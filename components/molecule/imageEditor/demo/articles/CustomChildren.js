import PropTypes from 'prop-types'

import {Cell, Grid} from '@s-ui/documentation-library'

import {MoleculeImageEditorCropper, MoleculeImageEditorSliders} from '../../src/index.js'

const CustomChildren = ({
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
    <Grid cols={2} gutter={[8, 8]}>
      <Cell>
        <MoleculeImageEditorCropper
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
      </Cell>
      <Cell>
        <MoleculeImageEditorSliders
          rotateLabelIcon={rotateLabelIcon}
          rotateLabelText={rotateLabelText}
          cropLabelIcon={cropLabelIcon}
          cropLabelText={cropLabelText}
          onZoomChange={onZoomSliderChange}
          onRotateChange={onRotateSliderChange}
          zoom={zoom}
          rotation={rotation}
        />
      </Cell>
    </Grid>
  )
}

CustomChildren.dosplayName = 'CustomChildren'
CustomChildren.propTypes = {
  image: PropTypes.number,
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

export default CustomChildren
