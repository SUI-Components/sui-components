import PropTypes from 'prop-types'
import ColorPanel from './ColorPanel'
import ImagePanel, {
  HORIZONTAL_ALIGNMENTS,
  VERTICAL_ALIGNMENTS
} from './ImagePanel'
import {COLORS, ALPHA, BORDER_RADIUS, BOX_SHADOW} from './constants'

const isImagePanel = function({src}) {
  return !!src
}

const AtomPanel = function(props) {
  return isImagePanel(props) ? (
    <ImagePanel {...props} />
  ) : (
    <ColorPanel {...props} />
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
  boxShadow: PropTypes.oneOf(Object.values(BOX_SHADOW))
}

AtomPanel.defaultProps = {
  horizontalAlign: HORIZONTAL_ALIGNMENTS.CENTER,
  verticalAlign: VERTICAL_ALIGNMENTS.CENTER,
  rounded: BORDER_RADIUS.NONE,
  boxShadow: BOX_SHADOW.NONE
}

export default AtomPanel
export {
  HORIZONTAL_ALIGNMENTS as atomPanelHorizontalAlign,
  VERTICAL_ALIGNMENTS as atomPanelVerticalAlign,
  COLORS as atomPanelColors,
  ALPHA as atomPanelAlpha,
  BORDER_RADIUS as atomPanelRounded,
  BOX_SHADOW as atomPanelBoxShadow
}
