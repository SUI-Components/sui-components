import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {ALPHA, COLORS} from './constants'

const DEFAULT_ALPHA = 'CONTRAST'

const getClassNames = function ({color, alpha}) {
  const COLOR_PANEL_CLASS = 'sui-atom-panel-color'
  const alphaValue = ALPHA[alpha] || DEFAULT_ALPHA
  return cx(
    `${COLOR_PANEL_CLASS}--${color}-${alphaValue}`
  )
}

const ColorPanel = function ({children, ...props}) {
  return (
    <div className={getClassNames(props)} >
      {children}
    </div>
  )
}

ColorPanel.displayName = 'ColorPanel'

ColorPanel.propTypes = {
  children: PropTypes.node
}

ColorPanel.defaultProps = {
  alpha: DEFAULT_ALPHA,
  color: COLORS.DEFAULT
}

export default ColorPanel
