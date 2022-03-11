import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-atom-polymorphic-element'

import {
  ALPHA,
  COLORS,
  BORDER_RADIUS,
  ELEVATION,
  getClassNames
} from './constants.js'

const ColorPanel = function ({as = 'div', children, ...props}) {
  return (
    <PolymorphicElement as={as} className={getClassNames(props)}>
      {children}
    </PolymorphicElement>
  )
}

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  ...PolymorphicElement.propTypes,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(COLORS)),
  alpha: PropTypes.oneOf(Object.values(ALPHA)),
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  elevation: PropTypes.oneOf(Object.values(ELEVATION))
}

export default ColorPanel
