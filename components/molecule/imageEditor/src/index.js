import {useCallback, useState} from 'react'

import PropTypes from 'prop-types'

import {debounce} from '@s-ui/js/lib/function/debounce.js'
import Injector from '@s-ui/react-primitive-injector'

import getCroppedImg from './utils/cropImage.js'
import {
  baseClass,
  DEBOUNCING_TIME,
  DEFAULT_ASPECT,
  getRotationDegrees,
  noop
} from './config.js'
import ImageEditorCropper from './ImageEditorCropper.js'
import ImageEditorDefault from './ImageEditorDefault.js'
import ImageEditorSliders from './ImageEditorSliders.js'

const MoleculeImageEditor = ({
  aspect = DEFAULT_ASPECT,
  cropLabelIcon,
  cropLabelText,
  debouncingTime = DEBOUNCING_TIME,
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
    debouncingTime > 0 ? debounce(cropSetter, debouncingTime) : cropSetter

  const setRotation =
    debouncingTime > 0
      ? debounce(rotationSetter, debouncingTime)
      : rotationSetter

  const setZoom =
    debouncingTime > 0 ? debounce(zoomSetter, debouncingTime) : zoomSetter

  const cropCompleteHandler = async (croppedArea, croppedAreaPixels) => {
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

  const onCropComplete = useCallback(
    debouncingTime > 0
      ? debounce(cropCompleteHandler, debouncingTime)
      : cropCompleteHandler,
    [rotation, onCropping, image, onChange]
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
  debouncingTime: PropTypes.number,
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
