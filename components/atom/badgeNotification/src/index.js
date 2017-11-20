import PropTypes from 'prop-types'
import React, { Component } from 'react'

class BadgeNotification extends Component {
  render () {
    return (
      <div className='sui-BadgeNotification'>
        <span className={`sui-BadgeNotification-type sui-BadgeNotification-type-${this.props.type}-${this.props.size} sui-BadgeNotification-size-${this.props.size}`} />
      </div>
    )
  }
}

BadgeNotification.displayName = 'BadgeNotification'

BadgeNotification.propTypes = {
  /**
   * The string content is the badge size
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * The string content is the bage type
   */
  type: PropTypes.oneOf(['bullet'])
}

BadgeNotification.defaultProps = {
  type: 'bullet',
  size: 'medium'
}

export default BadgeNotification
