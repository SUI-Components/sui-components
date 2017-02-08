import React, {PropTypes} from 'react'

export default function AlertBasic ({alert}) {
  const {
    type,
    content,
    icon: AlertIcon
  } = alert
  const alertType = `sui-AlertBasic sui-AlertBasic--${type}`

  return (
    <div>
      <div className={alertType}>
        <div>
          <AlertIcon svgClass='sui-AlertBasic-icon' />
        </div>
        <div>{content}</div>
      </div>
    </div>
  )
}

AlertBasic.propTypes = {
  alert: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Alert type
     */
    type: PropTypes.string,
    /**
     * Alert content
     */
    content: PropTypes.string,
    /**
     * Alert content
     */
    icon: PropTypes.function
  })).isRequired
}

AlertBasic.displayName = 'AlertBasic'
