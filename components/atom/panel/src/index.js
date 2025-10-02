import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import ColorPanel from './ColorPanel.js'
import {
  ALPHA,
  BORDER_RADIUS,
  COLORS,
  ELEVATION,
  DEFAULT_ELEVATION,
  DEFAULT_BORDER_RADIUS,
  HORIZONTAL_ALIGNMENTS,
  VERTICAL_ALIGNMENTS,
  isImagePanel
} from './settings.js'
import ImagePanel from './ImagePanel.js'

const AtomPanel = forwardRef(
  (
    {
      alpha,
      color,
      elevation = DEFAULT_ELEVATION,
      horizontalAlign,
      verticalAlign,
      rounded = DEFAULT_BORDER_RADIUS,
      src,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const [Component, componentProps] = isImagePanel({src})
      ? [ImagePanel, {src, horizontalAlign, verticalAlign}]
      : [ColorPanel, {alpha}]

    return (
      <Component
        ref={forwardedRef}
        className={className}
        color={color}
        elevation={elevation}
        rounded={rounded}
        {...componentProps}
        {...props}
      />
    )
  }
)

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
  alpha: PropTypes.oneOf(Object.values(ALPHA)),
  /**
   * Specify the HTML tag element or component to render in the DOM.
   */
  as: PropTypes.elementType,
  /**
   * Specify the element id
   */
  id: PropTypes.string,
  /**
   * Sets the element's width to 100%
   */
  isFullWidth: PropTypes.bool,
  /**
   * Sets the element's height to 100%
   */
  isFullHeight: PropTypes.bool,
  /**
   * Additional classes
   */
  className: PropTypes.string
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
