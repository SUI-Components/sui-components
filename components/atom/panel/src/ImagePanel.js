import PropTypes from 'prop-types'
import cx from 'classnames'
import {COLORS, ALPHA, BORDER_RADIUS, ELEVATION} from './constants'

const HORIZONTAL_ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
}

const VERTICAL_ALIGNMENTS = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

const DEFAULT_ALPHA = 'CONTRAST'
const DEFAULT_COLOR = 'ACCENT'

const getClassNames = function({
  verticalAlign,
  horizontalAlign,
  resized,
  overlayColor,
  overlayAlpha = DEFAULT_ALPHA,
  color,
  rounded,
  elevation
}) {
  const BASE_CLASS = 'sui-atom-panel'
  const IMAGE_PANEL_CLASS = `${BASE_CLASS}-image`
  const overlayAlphaValue = ALPHA[overlayAlpha] || DEFAULT_ALPHA
  const overlayColorValue = COLORS[overlayColor] || DEFAULT_COLOR

  return cx(
    BASE_CLASS,
    rounded !== BORDER_RADIUS.NONE && `${BASE_CLASS}--rounded-${rounded}`,
    `${IMAGE_PANEL_CLASS}--vertical-${verticalAlign}`,
    `${IMAGE_PANEL_CLASS}--horizontal-${horizontalAlign}`,
    overlayColor &&
      `${BASE_CLASS}--${overlayColorValue}-overlay-${overlayAlphaValue}`,
    `${BASE_CLASS}-color--${color}`,
    resized && `${IMAGE_PANEL_CLASS}--resized`,
    elevation !== ELEVATION.NONE && `${BASE_CLASS}--elevation-${elevation}`
  )
}

const getStyles = function({src}) {
  const url = `url(${src})`
  return {
    backgroundImage: url
  }
}

const ImagePanel = function({children, ...props}) {
  return (
    <div className={getClassNames(props)} style={getStyles(props)}>
      {children}
    </div>
  )
}

ImagePanel.displayName = 'ImagePanel'

ImagePanel.propTypes = {
  children: PropTypes.node,
  /**
   * Background color while loading the image
   */
  color: PropTypes.string,
  resized: PropTypes.bool,
  /**
   * Background position x
   */
  horizontalAlign: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENTS)),
  overlayAlpha: PropTypes.string,
  overlayColor: PropTypes.string,
  /**
   * Background position y
   */
  verticalAlign: PropTypes.oneOf(Object.values(VERTICAL_ALIGNMENTS)),
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  elevation: PropTypes.oneOf(Object.values(ELEVATION))
}

export default ImagePanel
export {HORIZONTAL_ALIGNMENTS, VERTICAL_ALIGNMENTS}
