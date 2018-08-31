import React, {Component} from 'react'
// import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomInput'

class AtomInput extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>AtomInput</h1>
      </div>
    )
  }
}

AtomInput.displayName = 'AtomInput'

// Remove these comments if you need
// AtomInput.contextTypes = {i18n: PropTypes.object}
// AtomInput.propTypes = {}
// AtomInput.defaultProps = {}

export default AtomInput
