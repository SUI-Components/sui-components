import React, {Component} from 'react'
// import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeTable`

class MoleculeTable extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>MoleculeTable</h1>
      </div>
    )
  }
}

MoleculeTable.displayName = 'MoleculeTable'

// Remove these comments if you need
// MoleculeTable.contextTypes = {i18n: PropTypes.object}
// MoleculeTable.propTypes = {}
// MoleculeTable.defaultProps = {}

export default MoleculeTable
