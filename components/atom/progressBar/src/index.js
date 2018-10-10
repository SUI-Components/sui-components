import React, {Component} from 'react'
// import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomProgressBar'

class AtomProgressBar extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>AtomProgressBar</h1>
      </div>
    )
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

// Remove these comments if you need
// AtomProgressBar.contextTypes = {i18n: PropTypes.object}
// AtomProgressBar.propTypes = {}
// AtomProgressBar.defaultProps = {}

export default AtomProgressBar
