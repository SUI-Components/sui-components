import PropTypes from 'prop-types'

import AtomSlider from '@s-ui/react-atom-slider'

import {baseClass} from './config.js'

const ImageEditorSliders = ({
  rotateLabelIcon,
  rotateLabelText,
  cropLabelIcon,
  cropLabelText,
  onZoomChange,
  onRotateChange,
  zoom,
  rotation
}) => (
  <div className={`${baseClass}-sliders`}>
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
      <AtomSlider onChange={onZoomChange} defaultValue={zoom} hideMarks />
    </div>
    <div className={`${baseClass}-slider`}>
      {(rotateLabelIcon || rotateLabelText) && (
        <div className={`${baseClass}-label`}>
          {rotateLabelIcon && (
            <span className={`${baseClass}-labelIcon`}>{rotateLabelIcon}</span>
          )}
          {rotateLabelText && (
            <span className={`${baseClass}-labelText`}>{rotateLabelText}</span>
          )}
        </div>
      )}
      <AtomSlider onChange={onRotateChange} defaultValue={rotation} hideMarks />
    </div>
  </div>
)

ImageEditorSliders.displayName = 'ImageEditorSliders'
ImageEditorSliders.propTypes = {
  rotateLabelIcon: PropTypes.node,
  rotateLabelText: PropTypes.string,
  cropLabelIcon: PropTypes.node,
  cropLabelText: PropTypes.string,
  onZoomChange: PropTypes.func,
  onRotateChange: PropTypes.func,
  zoom: PropTypes.number,
  rotation: PropTypes.number
}

export default ImageEditorSliders
