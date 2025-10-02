import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {ALPHA, BORDER_RADIUS, COLORS, DEFAULT_ALPHA, DEFAULT_COLOR, ELEVATION, getColorClassNames} from './settings.js'

const ColorPanel = forwardRef(
  (
    {
      as = 'div',
      alpha = DEFAULT_ALPHA,
      color = DEFAULT_COLOR,
      children,
      id,
      className,
      rounded,
      elevation,
      isFullHeight,
      isFullWidth,
      ...otherProps
    },
    forwardedRef
  ) => {
    return (
      <PolymorphicElement
        ref={forwardedRef}
        as={as}
        id={id}
        className={getColorClassNames({
          className,
          alpha,
          color,
          rounded,
          elevation,
          isFullHeight,
          isFullWidth,
          ...otherProps
        })}
        {...otherProps}
      >
        {children}
      </PolymorphicElement>
    )
  }
)

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  as: PropTypes.elementType,
  id: PropTypes.string,
  children: PropTypes.node,
  isFullWidth: PropTypes.bool,
  isFullHeight: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(COLORS)),
  alpha: PropTypes.oneOf(Object.values(ALPHA)),
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),
  className: PropTypes.string
}

export default ColorPanel
