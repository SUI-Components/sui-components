import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TYPES = {
  DEFAULT: 'default',
  CANVAS: 'canvas',
  BASE: 'base',
  CONTRAST: 'contrast',
  CORPORATE: 'corporate',
  HIGHLIGHT: 'highlight'
}

const ALPHAS = {
  CONTRAST: 'contrast',
  OVERLAY_D4: 'overlay_d4',
  OVERLAY_D3: 'overlay_d3',
  OVERLAY_D2: 'overlay_d2',
  OVERLAY_D1: 'overlay_d1'
}

const getClassNames = ({type, alpha}) =>
  classnames(
    'sui-AtomColorPanel',
    `sui-AtomColorPanel-${type}-${alpha}`
  )

const AtomColorPanel = ({children, ...props}) =>
  <div className={getClassNames(props)}>
    {children}
  </div>

AtomColorPanel.displayName = 'AtomColorPanel'

AtomColorPanel.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(TYPES)),
  alpha: PropTypes.oneOf(Object.values(ALPHAS))
}

AtomColorPanel.defaultProps = {
  type: TYPES.DEFAULT,
  alpha: ALPHAS.CONTRAST
}

export default AtomColorPanel
export {
  TYPES as atomColorPanelTypes
}
