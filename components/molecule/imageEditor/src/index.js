import {useCallback, useState} from 'react'

import PropTypes from 'prop-types'

import {debounce} from '@s-ui/js/lib/function/debounce.js'
import Injector from '@s-ui/react-primitive-injector'

import getCroppedImg from './utils/cropImage.js'
import {baseClass, DEFAULT_ASPECT, getRotationDegrees, noop} from './config.js'
import ImageEditorCropper from './ImageEditorCropper.js'
import ImageEditorDefault from './ImageEditorDefault.js'
import ImageEditorSliders from './ImageEditorSliders.js'
import {debouncingTimePropType} from './prop-types.js'

const MoleculeImageEditor = ({
  aspect = DEFAULT_ASPECT,
  cropLabelIcon,
  cropLabelText,
  debouncingTime,
  image,
  onChange,
  onCropping = noop,
  rotateLabelIcon,
  rotateLabelText,
  children = <ImageEditorDefault />
}) => {
  const [crop, cropSetter] = useState({x: 0, y: 0})
  const [rotation, rotationSetter] = useState(0)
  const [zoom, zoomSetter] = useState(0)

  const setCrop =
    debouncingTime === undefined
      ? cropSetter
      : debounce(cropSetter, debouncingTime)

  const setRotation =
    debouncingTime === undefined
      ? rotationSetter
      : debounce(rotationSetter, debouncingTime)

  const setZoom =
    debouncingTime === undefined
      ? zoomSetter
      : debounce(zoomSetter, debouncingTime)

  const onCropComplete = useCallback(
    async (croppedArea, croppedAreaPixels, ...args) => {
      const cropCompleteHandler = async () => {
        const rotationDegrees = getRotationDegrees(rotation)
        onCropping(true)
        const [croppedImageUrl, croppedImageBlobObject] = await getCroppedImg(
          image,
          croppedAreaPixels,
          rotationDegrees
        )
        onChange(croppedImageUrl, croppedImageBlobObject)
        onCropping(false)
      }
      const callback =
        debouncingTime === undefined
          ? cropCompleteHandler
          : debounce(cropCompleteHandler, debouncingTime)
      await callback(croppedArea, croppedAreaPixels, ...args)
    },
    [rotation, onCropping, image, onChange, debouncingTime]
  )

  return (
    <div className={baseClass}>
      <Injector
        image={image}
        crop={crop}
        zoom={zoom}
        rotation={rotation}
        aspect={aspect}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onRotationChange={setRotation}
        onZoomChange={zoom => setZoom((zoom - 1) * 100)}
        rotateLabelIcon={rotateLabelIcon}
        rotateLabelText={rotateLabelText}
        cropLabelIcon={cropLabelIcon}
        cropLabelText={cropLabelText}
        onZoomSliderChange={(event, {value}) => setZoom(value)}
        onRotateSliderChange={(event, {value}) => setRotation(value)}
      >
        {children}
      </Injector>
    </div>
  )
}

MoleculeImageEditor.displayName = 'MoleculeImageEditor'
MoleculeImageEditor.propTypes = {
  aspect: PropTypes.number,
  cropLabelIcon: PropTypes.node,
  cropLabelText: PropTypes.string,
  debouncingTime: debouncingTimePropType,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCropping: PropTypes.func,
  rotateLabelIcon: PropTypes.node,
  rotateLabelText: PropTypes.string,
  children: PropTypes.node
}

export default MoleculeImageEditor

export {
  ImageEditorCropper as MoleculeImageEditorCropper,
  ImageEditorSliders as MoleculeImageEditorSliders
}
