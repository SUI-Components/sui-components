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

const getClassNames = ({type}) =>
  classnames(
    'sui-AtomColorPanel',
    `sui-AtomColorPanel-${type}`
  )

const getStyle = ({opacity}) => ({
  opacity
})

const AtomColorPanel = ({children, ...props}) => (
  <div className={getClassNames(props)} style={getStyle(props)}>
    {children}
  </div>
)

AtomColorPanel.displayName = 'AtomColorPanel'

AtomColorPanel.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(TYPES)),
  /**
   * @type float between 0 and 1
   */
  opacity: PropTypes.number
}

AtomColorPanel.defaultProps = {
  type: TYPES.DEFAULT,
  opacity: 1
}

export default AtomColorPanel
export {
  TYPES as atomColorPanelTypes
}
