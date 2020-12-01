import PropTypes from 'prop-types'
import cx from 'classnames'
import {ALPHA, COLORS, BORDER_RADIUS} from './constants'

const getClassNames = function({color, alpha, rounded}) {
  const BASE_CLASS = 'sui-atom-panel'
  const COLOR_PANEL_CLASS = 'sui-atom-panel-color'
  return cx(
    BASE_CLASS,
    rounded !== BORDER_RADIUS.NONE && `${BASE_CLASS}--rounded-${rounded}`,
    COLOR_PANEL_CLASS,
    color && `${COLOR_PANEL_CLASS}--${color}-${alpha}`
  )
}

const ColorPanel = function({children, ...props}) {
  return <div className={getClassNames(props)}>{children}</div>
}

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  alpha: PropTypes.string,
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS))
}

ColorPanel.defaultProps = {
  alpha: ALPHA.CONTRAST,
  color: COLORS.DEFAULT,
  rounded: BORDER_RADIUS.NONE
}

export default ColorPanel
