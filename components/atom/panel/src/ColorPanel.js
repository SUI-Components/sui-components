import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {
  ALPHA,
  BORDER_RADIUS,
  COLORS,
  ELEVATION,
  getClassNames
} from './constants.js'

const ColorPanel = function ({
  as = 'div',
  alpha = ALPHA.CONTRAST,
  color = COLORS.DEFAULT,
  children,
  id,
  ...otherProps
}) {
  return (
    <PolymorphicElement
      as={as}
      id={id}
      className={getClassNames({alpha, color, ...otherProps})}
    >
      {children}
    </PolymorphicElement>
  )
}

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
  elevation: PropTypes.oneOf(Object.values(ELEVATION))
}

export default ColorPanel
