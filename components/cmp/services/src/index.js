import {Component} from 'react'
import PropTypes from 'prop-types'

import {
  getConsentStatus,
  getPurposesAndVendors,
  sendConsents
} from './useCases/index'

import {CmpWaitForLibrary} from './CmpWaitForLibrary'

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

export {CmpWaitForLibrary}
export default CmpServices
