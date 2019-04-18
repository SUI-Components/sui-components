import React, {Component} from 'react'
// import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeDataCounter`

class MoleculeDataCounter extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>MoleculeDataCounter</h1>
      </div>
    )
  }
}

MoleculeDataCounter.displayName = 'MoleculeDataCounter'

// Remove these comments if you need
// MoleculeDataCounter.contextTypes = {i18n: PropTypes.object}
// MoleculeDataCounter.propTypes = {}
// MoleculeDataCounter.defaultProps = {}

export default MoleculeDataCounter
