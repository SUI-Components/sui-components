import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import Cropper from 'react-easy-crop'
import AtomSlider from '@s-ui/react-atom-slider'

import getCroppedImg from './utils/cropImage'

const baseClass = 'react-MoleculeImageEditor'
const DEFAULT_ASPECT = 4 / 3
export default function MoleculeImageEditor({
  aspect = DEFAULT_ASPECT,
  image,
  onChange
}) {
  const [crop, setCrop] = useState({x: 0, y: 0})
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(0)

  const getRotationDegrees = rotation => (rotation * 360) / 100

  const onCropComplete = useCallback(
    async (croppedArea, croppedAreaPixels) => {
      const rotationDegrees = getRotationDegrees(rotation)
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotationDegrees
      )
      onChange(croppedImage)
    },
    [rotation, image, onChange]
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
        <AtomSlider
          onChange={(event, {value}) => setZoom(value)}
          value={zoom}
          hideMarks
        />
      </div>
      <div className={`${baseClass}-slider`}>
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
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
