import PropTypes from 'prop-types'

import {
  ALPHA,
  COLORS,
  BORDER_RADIUS,
  ELEVATION,
  getClassNames
} from './constants.js'

const ColorPanel = function({children, ...props}) {
  return <div className={getClassNames(props)}>{children}</div>
}

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(COLORS)),
  alpha: PropTypes.oneOf(Object.values(ALPHA)),
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),
  elevation: PropTypes.oneOf(Object.values(ELEVATION))
}

export default ColorPanel
