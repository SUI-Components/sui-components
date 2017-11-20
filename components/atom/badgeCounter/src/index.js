import PropTypes from 'prop-types'
import React, { Component } from 'react'

class BadgeCounter extends Component {
  render () {
    return (
      <div className='sui-BadgeCounter'>
        <span className={`sui-BadgeCounter-type sui-BadgeCounter-type-${this.props.type}-${this.props.size} sui-BadgeCounter-size-${this.props.size}`} />
      </div>
    )
  }
}

BadgeCounter.displayName = 'BadgeCounter'

BadgeCounter.propTypes = {
  /**
   * The string content is the badge-counter size
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * The string content is the bage-counter type
   */
  type: PropTypes.oneOf(['bullet'])
}

BadgeCounter.defaultProps = {
  type: 'bullet',
  size: 'medium'
}

export default BadgeCounter
