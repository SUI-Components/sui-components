import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {ALPHA, COLORS} from './constants'

const getClassNames = function({color, alpha}) {
  const COLOR_PANEL_CLASS = 'sui-atom-panel-color'
  return cx(`${COLOR_PANEL_CLASS}--${color}-${alpha}`)
}

const ColorPanel = function({children, ...props}) {
  return <div className={getClassNames(props)}>{children}</div>
}

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  alpha: PropTypes.string
}

ColorPanel.defaultProps = {
  alpha: ALPHA.CONTRAST,
  color: COLORS.DEFAULT
}

export default ColorPanel
