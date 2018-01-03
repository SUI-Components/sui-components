import React from 'react'
import PropTypes from 'prop-types'
import ColorPanel from './ColorPanel'
import ImagePanel, {HORIZONTAL_ALIGNMENTS, VERTICAL_ALIGNMENTS} from './ImagePanel'
import {COLORS, ALPHA} from './constants'

const isImagePanel = function ({src}) {
  return !!src
}

const AtomPanel = function (props) {
  return isImagePanel(props)
    ? <ImagePanel {...props} />
    : <ColorPanel {...props} />
}

AtomPanel.displayName = 'AtomPanel'

AtomPanel.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Background image
   */
  src: PropTypes.string,
  /**
   * Background position x
   */
  horizontalAlign: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENTS)),
  /**
   * Background position y
   */
  verticalAlign: PropTypes.oneOf(Object.values(VERTICAL_ALIGNMENTS)),
  resized: PropTypes.bool,
  color: PropTypes.string
}

AtomPanel.defaultProps = {
  verticalAlign: HORIZONTAL_ALIGNMENTS.CENTER,
  horizontalAlign: VERTICAL_ALIGNMENTS.CENTER,
  backgroundColor: COLORS.DEFAULT
}

export default AtomPanel
export {
  HORIZONTAL_ALIGNMENTS as atomPanelHorizontalAlign,
  VERTICAL_ALIGNMENTS as atomPanelVerticalAlign,
  COLORS as atomPanelColors,
  ALPHA as atomPanelAlpha
}
