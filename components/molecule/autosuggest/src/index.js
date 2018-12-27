import React, {Component} from 'react'
// import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeAutosuggest`

class MoleculeAutosuggest extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>MoleculeAutosuggest</h1>
      </div>
    )
  }
}

MoleculeAutosuggest.displayName = 'MoleculeAutosuggest'

// Remove these comments if you need
// MoleculeAutosuggest.contextTypes = {i18n: PropTypes.object}
// MoleculeAutosuggest.propTypes = {}
// MoleculeAutosuggest.defaultProps = {}

export default MoleculeAutosuggest
