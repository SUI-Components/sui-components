import {useCallback, useState} from 'react'
import Cropper from 'react-easy-crop'

import PropTypes from 'prop-types'

import {debounce} from '@s-ui/js/lib/function/debounce.js'
import AtomSlider from '@s-ui/react-atom-slider'

import getCroppedImg from './utils/cropImage.js'
import {baseClass, DEBOUNCING_TIME, DEFAULT_ASPECT, noop} from './config.js'

const MoleculeImageEditor = ({
  aspect = DEFAULT_ASPECT,
  cropLabelIcon,
  cropLabelText,
  image,
  onChange,
  onCropping = noop,
  rotateLabelIcon,
  rotateLabelText
}) => {
  const [crop, cropSetter] = useState({x: 0, y: 0})
  const [rotation, rotationSetter] = useState(0)
  const [zoom, zoomSetter] = useState(0)

  const setCrop = debounce(cropSetter, DEBOUNCING_TIME)
  const setRotation = debounce(rotationSetter, DEBOUNCING_TIME)
  const setZoom = debounce(zoomSetter, DEBOUNCING_TIME)

  const getRotationDegrees = rotation => (rotation * 360) / 100

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
    debounce(cropCompleteHandler, DEBOUNCING_TIME),
    [rotation, onCropping, image, onChange]
  )

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-crop`}>
        <Cropper
          image={image}
          crop={crop}
          zoom={1 + zoom / 100}
          rotation={getRotationDegrees(rotation)}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onRotationChange={setRotation}
          onZoomChange={zoom => setZoom((zoom - 1) * 100)}
        />
      </div>
      <div className={`${baseClass}-slider`}>
        {(cropLabelIcon || cropLabelText) && (
          <div className={`${baseClass}-label`}>
            {cropLabelIcon && (
              <span className={`${baseClass}-labelIcon`}>{cropLabelIcon}</span>
            )}
            {cropLabelText && (
              <span className={`${baseClass}-labelText`}>{cropLabelText}</span>
            )}
          </div>
        )}
        <AtomSlider
          onChange={(event, {value}) => setZoom(value)}
          defaultValue={zoom}
          hideMarks
        />
      </div>
      <div className={`${baseClass}-slider`}>
        {(rotateLabelIcon || rotateLabelText) && (
          <div className={`${baseClass}-label`}>
            {rotateLabelIcon && (
              <span className={`${baseClass}-labelIcon`}>
                {rotateLabelIcon}
              </span>
            )}
            {rotateLabelText && (
              <span className={`${baseClass}-labelText`}>
                {rotateLabelText}
              </span>
            )}
          </div>
        )}
        <AtomSlider
          onChange={(event, {value}) => setRotation(value)}
          defaultValue={rotation}
          hideMarks
        />
      </div>
    </div>
  )
}

MoleculeImageEditor.displayName = 'MoleculeImageEditor'
MoleculeImageEditor.propTypes = {
  aspect: PropTypes.number,
  cropLabelIcon: PropTypes.node,
  cropLabelText: PropTypes.string,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCropping: PropTypes.func,
  rotateLabelIcon: PropTypes.node,
  rotateLabelText: PropTypes.string
}

export default MoleculeImageEditor
