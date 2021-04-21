import PropTypes from 'prop-types'
import ColorPanel from './ColorPanel'
import ImagePanel, {
  HORIZONTAL_ALIGNMENTS,
  VERTICAL_ALIGNMENTS
} from './ImagePanel'
import {COLORS, ALPHA, BORDER_RADIUS, ELEVATION} from './constants'

const isImagePanel = function({src}) {
  return !!src
}

const AtomPanel = function({
  alpha = ALPHA.CONTRAST,
  color = COLORS.DEFAULT,
  elevation = ELEVATION.NONE,
  horizontalAlign = HORIZONTAL_ALIGNMENTS.CENTER,
  rounded = BORDER_RADIUS.NONE,
  src,
  verticalAlign = VERTICAL_ALIGNMENTS.CENTER,
  ...props
}) {
  return isImagePanel({src}) ? (
    <ImagePanel
      color={color}
      elevation={elevation}
      horizontalAlign={horizontalAlign}
      rounded={rounded}
      src={src}
      verticalAlign={verticalAlign}
      {...props}
    />
  ) : (
    <ColorPanel
      alpha={alpha}
      color={color}
      elevation={elevation}
      rounded={rounded}
      {...props}
    />
  )
}

AtomPanel.displayName = 'AtomPanel'

AtomPanel.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Background image
   */
  src: PropTypes.string,
  /**
   * Specify the type of alignment vertically
   */
  verticalAlign: PropTypes.oneOf(Object.values(VERTICAL_ALIGNMENTS)),
  /**
   * Specify the type of alignment horizontally
   */
  horizontalAlign: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENTS)),
  /**
   * Specify the border-radius of the panel
   */
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  /**
   * Specify the box-shadow of the panel
   */
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),
  /**
   * Specify the background-color
   */
  color: PropTypes.oneOf(Object.values(COLORS)),
  /**
   * Specify the opacity
   */
  alpha: PropTypes.oneOf(Object.values(ALPHA))
}

export default AtomPanel
export {
  HORIZONTAL_ALIGNMENTS as atomPanelHorizontalAlign,
  VERTICAL_ALIGNMENTS as atomPanelVerticalAlign,
  COLORS as atomPanelColors,
  ALPHA as atomPanelAlpha,
  BORDER_RADIUS as atomPanelRounded,
  ELEVATION as atomPanelElevation
}
