import PropTypes from 'prop-types'

import ImageEditorCropper from './ImageEditorCropper.js'
import ImageEditorSliders from './ImageEditorSliders.js'

const ImageEditorDefault = ({
  image,
  crop,
  zoom,
  rotation,
  aspect,
  onCropChange,
  onCropComplete,
  onRotationChange,
  onZoomChange,
  rotateLabelIcon,
  rotateLabelText,
  cropLabelIcon,
  cropLabelText,
  onZoomSliderChange,
  onRotateSliderChange
}) => {
  return (
    <>
      <ImageEditorCropper
        image={image}
        crop={crop}
        zoom={zoom}
        rotation={rotation}
        aspect={aspect}
        onCropChange={onCropChange}
        onCropComplete={onCropComplete}
        onRotationChange={onRotationChange}
        onZoomChange={onZoomChange}
      />
      <ImageEditorSliders
        rotateLabelIcon={rotateLabelIcon}
        rotateLabelText={rotateLabelText}
        cropLabelIcon={cropLabelIcon}
        cropLabelText={cropLabelText}
        onZoomChange={onZoomSliderChange}
        onRotateChange={onRotateSliderChange}
        zoom={zoom}
        rotation={rotation}
      />
    </>
  )
}

ImageEditorDefault.displayName = 'ImageEditorDefault'
ImageEditorDefault.propTypes = {
  image: PropTypes.string.isRequired,
  crop: PropTypes.number,
  zoom: PropTypes.number,
  rotation: PropTypes.number,
  aspect: PropTypes.number,
  onCropChange: PropTypes.func,
  onCropComplete: PropTypes.func,
  onRotationChange: PropTypes.func,
  onZoomChange: PropTypes.func,
  rotateLabelIcon: PropTypes.node,
  rotateLabelText: PropTypes.string,
  cropLabelIcon: PropTypes.node,
  cropLabelText: PropTypes.string,
  onZoomSliderChange: PropTypes.func,
  onRotateSliderChange: PropTypes.func
}

export default ImageEditorDefault
