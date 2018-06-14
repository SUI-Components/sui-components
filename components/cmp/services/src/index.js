import {Component} from 'react'
import PropTypes from 'prop-types'

import {
  getConsentStatus,
  getPurposesAndVendors,
  sendConsents
} from './useCases/index'

class CmpServices extends Component {
  render() {
    return this.props.children({
      getConsentStatus,
      getPurposesAndVendors,
      sendConsents
    })
  }
}

CmpServices.displayName = 'CmpServices'
CmpServices.propTypes = {
  children: PropTypes.func.isRequired
}

export default CmpServices
