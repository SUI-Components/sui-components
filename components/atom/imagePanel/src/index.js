import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const BASE_16 = 16
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

const TYPES = {
  CROPPED: 'cropped',
  RESIZED: 'resized'
}

const hexToRgb = function (hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], BASE_16),
    g: parseInt(result[2], BASE_16),
    b: parseInt(result[3], BASE_16)
  } : {}
}

const getClassNames = function ({verticalAlign, horizontalAlign, classNames, type}) {
  return classnames(
    'sui-AtomImagePanel',
    `sui-AtomImagePanel--v-${verticalAlign}`,
    `sui-AtomImagePanel--h-${horizontalAlign}`,
    `sui-AtomImagePanel-${type}`,
    classNames
  )
}

const getStyles = function ({placeholderColor, overlayColor, src, overlayAlpha, opacity}) {
  const url = `url(${src})`
  if (overlayColor) {
    const overlayColorRgb = hexToRgb(overlayColor)
    const rgba = `rgba(${overlayColorRgb.r}, ${overlayColorRgb.g}, ${overlayColorRgb.b}, ${overlayAlpha})`
    var gradient = `linear-gradient(${rgba}, ${rgba})`
  }
  return {
    backgroundImage: gradient ? `${gradient}, ${url}` : url,
    backgroundColor: placeholderColor,
    opacity
  }
}

const AtomImagePanel = function ({src, children, ...props}) {
  return (
    <div className={getClassNames(props)} style={getStyles({src, ...props})}>
      {children}
    </div>
  )
}

AtomImagePanel.displayName = 'AtomImagePanel'

AtomImagePanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  /**
   * Background image
   */
  src: PropTypes.string.isRequired,
  /**
   * Background opacity
   * @type float between 0 and 1
   */
  opacity: PropTypes.number,
  /**
   * Background color
   */
  placeholderColor: PropTypes.string.isRequired,
  /**
   * Gradient color
   */
  overlayColor: PropTypes.string,
  /**
   * Gradient opacity
   * @type float between 0 and 1
   */
  overlayAlpha: PropTypes.number,
  /**
   * Background position x
   */
  horizontalAlign: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENTS)),
  /**
   * Background position y
   */
  verticalAlign: PropTypes.oneOf(Object.values(VERTICAL_ALIGNMENTS)),
  type: PropTypes.oneOf(Object.values(TYPES))
}

AtomImagePanel.defaultProps = {
  verticalAlign: HORIZONTAL_ALIGNMENTS.CENTER,
  horizontalAlign: VERTICAL_ALIGNMENTS.CENTER,
  overlayColor: '#000',
  opacity: 1,
  overlayAlpha: 0,
  type: TYPES.CROPPED
}

export default AtomImagePanel
export {
  HORIZONTAL_ALIGNMENTS as atomImagePanelHorizontalAlign,
  VERTICAL_ALIGNMENTS as atomImagePanelVerticalAlign,
  TYPES as atomItemPanelTypes
}
