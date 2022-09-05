import Cropper from 'react-easy-crop'

import PropTypes from 'prop-types'

import {baseClass, getRotationDegrees} from './config.js'

const ImageEditorCropper = ({
  image,
  crop,
  zoom,
  rotation,
  aspect,
  onCropChange,
  onCropComplete,
  onRotationChange,
  onZoomChange
}) => (
  <div className={`${baseClass}-crop`}>
    <Cropper
      image={image}
      crop={crop}
      zoom={1 + zoom / 100}
      rotation={getRotationDegrees(rotation)}
      aspect={aspect}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      onRotationChange={onRotationChange}
      onZoomChange={onZoomChange}
    />
  </div>
)

ImageEditorCropper.displayName = 'ImageEditorCropper'
ImageEditorCropper.propTypes = {
  image: PropTypes.string,
  crop: PropTypes.number,
  zoom: PropTypes.number,
  rotation: PropTypes.number,
  aspect: PropTypes.number,
  onCropChange: PropTypes.func,
  onCropComplete: PropTypes.func,
  onRotationChange: PropTypes.func,
  onZoomChange: PropTypes.func
}

export default ImageEditorCropper
