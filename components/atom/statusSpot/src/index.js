import PropTypes from 'prop-types'
import React, { Component } from 'react'

class AtomStatusSpot extends Component {
  render () {
    return (
      <div className='sui-AtomStatusSpot'>
        <span className={'sui-AtomStatusSpot-status sui-AtomStatusSpot-status-' + this.props.status} />
      </div>
    )
  }
}

AtomStatusSpot.displayName = 'AtomStatusSpot'

AtomStatusSpot.propTypes = {
  /**
   * The string content is the status spot
   */
  status: PropTypes.oneOf(['high', 'medium', 'low'])
}

AtomStatusSpot.defaultProps = {
  status: 'default'
}

export default AtomStatusSpot
