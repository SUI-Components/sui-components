import PropTypes from 'prop-types'
import React, {Component} from 'react'

class BadgeCounter extends Component {
  render() {
    return (
      <div className="sui-BadgeCounter">
        <span
          className={`sui-BadgeCounter--${this.props.size} sui-BadgeCounter-${
            this.props.type
          } sui-BadgeCounter-${this.props.type}--${this.props.thickness}`}
        />
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
   * The string content is the bage-counter thickness
   */
  thickness: PropTypes.oneOf(['thin', 'medium', 'thick']),
  /**
   * The string content is the bage-counter type
   */
  type: PropTypes.oneOf(['bullet'])
}

BadgeCounter.defaultProps = {
  size: 'medium',
  thickness: 'medium',
  type: 'bullet'
}

export default BadgeCounter
