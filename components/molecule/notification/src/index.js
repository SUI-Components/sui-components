import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MoleculeNotification extends Component {
  render () {
    return (
      <div className='sui-MoleculeNotification'>
        <h1>MoleculeNotification</h1>
      </div>
    )
  }
}

MoleculeNotification.displayName = 'MoleculeNotification'

// Remove these comments if you need
// MoleculeNotification.contextTypes = {i18n: PropTypes.object}
MoleculeNotification.propTypes = {
  type: PropTypes.string
}
// MoleculeNotification.defaultProps = {}

export default MoleculeNotification
