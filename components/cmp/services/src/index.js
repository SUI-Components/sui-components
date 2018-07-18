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
  /**
   * Render prop. It will receive as parameter an object with all the services you can use. The function has to return the element you want to render
   */
  children: PropTypes.func.isRequired
}

export {CmpWaitForLibrary}
export default CmpServices
