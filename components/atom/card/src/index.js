import React, { Component } from 'react'

const BASE_CLASS = 'sui-AtomCard'

class AtomCard extends Component {
  render () {
    return (
      <div className={BASE_CLASS}>
        <h1>AtomCard</h1>
      </div>
    )
  }
}

AtomCard.displayName = 'AtomCard'

// Remove these comments if you need
// AtomCard.contextTypes = {i18n: PropTypes.object}
// AtomCard.propTypes = {}
// AtomCard.defaultProps = {}

export default AtomCard
