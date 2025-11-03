import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {
  BORDER_RADIUS,
  DEFAULT_HORIZONTAL_ALIGNMENT,
  DEFAULT_VERTICAL_ALIGNMENT,
  ELEVATION,
  getImageClassNames,
  getImageStyles,
  HORIZONTAL_ALIGNMENTS,
  VERTICAL_ALIGNMENTS
} from './settings.js'

const ImagePanel = forwardRef(
  (
    {
      as = 'div',
      id,
      src,
      verticalAlign = DEFAULT_VERTICAL_ALIGNMENT,
      horizontalAlign = DEFAULT_HORIZONTAL_ALIGNMENT,
      resized,
      overlayColor,
      overlayAlpha,
      color,
      rounded,
      elevation,
      isFullWidth,
      isFullHeight,
      children,
      className,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <PolymorphicElement
        ref={forwardedRef}
        as={as}
        id={id}
        className={getImageClassNames({
          verticalAlign,
          horizontalAlign,
          resized,
          overlayColor,
          overlayAlpha,
          color,
          rounded,
          elevation,
          isFullWidth,
          isFullHeight,
          className,
          ...props
        })}
        style={getImageStyles({src, ...props})}
        {...props}
      >
        {children}
      </PolymorphicElement>
    )
  }
)

ImagePanel.displayName = 'ImagePanel'

ImagePanel.propTypes = {
  as: PropTypes.elementType,
  id: PropTypes.string,
  /**
   * Background image
   */
  src: PropTypes.string,
  children: PropTypes.node,
  isFullWidth: PropTypes.bool,
  isFullHeight: PropTypes.bool,
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
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),
  className: PropTypes.string
}

export default ImagePanel
export {HORIZONTAL_ALIGNMENTS, VERTICAL_ALIGNMENTS}
