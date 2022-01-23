import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import Cropper from 'react-easy-crop'
import AtomSlider from '@s-ui/react-atom-slider'

import getCroppedImg from './utils/cropImage.js'
import {baseClass, DEFAULT_ASPECT, noop} from './config.js'

export default function MoleculeImageEditor({
  aspect = DEFAULT_ASPECT,
  cropLabelIcon,
  cropLabelText,
  image,
  onChange,
  onCropping = noop,
  rotateLabelIcon,
  rotateLabelText
}) {
  const [crop, setCrop] = useState({x: 0, y: 0})
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(0)

  const getRotationDegrees = rotation => (rotation * 360) / 100

  const onCropComplete = useCallback(
    async (croppedArea, croppedAreaPixels) => {
      const rotationDegrees = getRotationDegrees(rotation)
      onCropping(true)
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotationDegrees
      )
      onChange(croppedImage)
      onCropping(false)
    },
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
          value={zoom}
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
          value={rotation}
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
