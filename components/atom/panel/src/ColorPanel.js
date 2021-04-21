import PropTypes from 'prop-types'
import cx from 'classnames'
import {ALPHA, COLORS, BORDER_RADIUS, ELEVATION} from './constants'

const getClassNames = function({color, alpha, rounded, elevation}) {
  const BASE_CLASS = 'sui-atom-panel'
  const COLOR_PANEL_CLASS = 'sui-atom-panel-color'
  return cx(
    BASE_CLASS,
    rounded !== BORDER_RADIUS.NONE && `${BASE_CLASS}--rounded-${rounded}`,
    COLOR_PANEL_CLASS,
    color && `${COLOR_PANEL_CLASS}--${color}-${alpha}`,
    elevation !== ELEVATION.NONE && `${BASE_CLASS}--elevation-${elevation}`
  )
}

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
