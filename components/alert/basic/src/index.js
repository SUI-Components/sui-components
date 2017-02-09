import React, {PropTypes} from 'react'
import Info from '@schibstedspain/sui-svgiconset/lib/Info'

export default function AlertBasic ({ type, children, icon: AlertIcon }) {
  return (
    <div>
      <div className={`sui-AlertBasic sui-AlertBasic--${type}`}>
        <div>
          <AlertIcon svgClass='sui-AlertBasic-icon' />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

AlertBasic.propTypes = {
  /**
   * Alert type
   */
  type: PropTypes.oneOf(['info']),
  /**
   * Alert content
   */
  children: PropTypes.element,
  /**
   * Alert icon
   */
  icon: PropTypes.function
}

AlertBasic.defaultProps = {
  type: 'info',
  icon: Info
}

AlertBasic.displayName = 'AlertBasic'
