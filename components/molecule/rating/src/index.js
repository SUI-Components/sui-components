import React, {Component} from 'react'
// import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeRating`
class MoleculeRating extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>MoleculeRating</h1>
      </div>
    )
  }
}

MoleculeRating.displayName = 'MoleculeRating'

// Remove these comments if you need
// MoleculeRating.contextTypes = {i18n: PropTypes.object}
// MoleculeRating.propTypes = {}
// MoleculeRating.defaultProps = {}

export default MoleculeRating
