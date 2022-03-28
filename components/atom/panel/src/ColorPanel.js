import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-atom-polymorphic-element'

import {
  ALPHA,
  COLORS,
  BORDER_RADIUS,
  ELEVATION,
  getClassNames
} from './constants.js'

const ColorPanel = function ({
  as = 'div',
  alpha = ALPHA.CONTRAST,
  color = COLORS.DEFAULT,
  children,
  ...otherProps
}) {
  return (
    <PolymorphicElement
      as={as}
      className={getClassNames({alpha, color, ...otherProps})}
    >
      {children}
    </PolymorphicElement>
  )
}

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(COLORS)),
  alpha: PropTypes.oneOf(Object.values(ALPHA)),
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  elevation: PropTypes.oneOf(Object.values(ELEVATION))
}

export default ColorPanel
