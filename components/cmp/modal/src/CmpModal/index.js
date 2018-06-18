import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModal} from './component'
export class CmpModalContainer extends Component {
  state = {
    fetchingData: true,
    purposeConsents: {},
    purposes: [],
    vendorConsents: {},
    vendors: []
  }

  async componentDidMount() {
    const {getPurposesAndVendors, retrieveConsentsFromCmp} = this.props
    const purposesAndVendors = await getPurposesAndVendors.execute({
      retrieveConsentsFromCmp
    })
    console.log(purposesAndVendors)
    this.setState({...purposesAndVendors, fetchingData: false})
  }

  _getKeyOfConsentToUpdate({isVendor}) {
    const consentToUpdate = isVendor ? 'vendor' : 'purpose'
    return `${consentToUpdate}Consents`
  }

  _handleToggleConsent = ({enabled, id, isVendor}) => {
    const key = this._getKeyOfConsentToUpdate({isVendor})

    this.setState(state => ({
      [key]: {
        ...state[key],
        [id]: enabled
      }
    }))
  }

  _handleToggleAll = ({enabled, isVendor}) => {
    const key = this._getKeyOfConsentToUpdate({isVendor})

    this.setState(state => {
      const consents = Object.keys(state[key]).reduce((acc, consentId) => {
        acc[consentId] = enabled
        return acc
      }, {})
      return {[key]: consents}
    })
  }

  _handleAccept = async () => {
    const {sendConsents} = this.props
    const {featuresConsents, vendorsConsents} = this.state
    sendConsents.execute({featuresConsents, vendorsConsents})
  }

  render() {
    const {lang, logo} = this.props
    const {
      fetchingData,
      purposes,
      purposeConsents,
      vendors,
      vendorConsents
    } = this.state

    if (fetchingData) return null

    return (
      <CmpModal
        lang={lang}
        logo={logo}
        onAccept={this._handleAccept}
        onToggleAll={this._handleToggleAll}
        onToggleConsent={this._handleToggleConsent}
        purposeConsents={purposeConsents}
        purposes={purposes}
        vendorConsents={vendorConsents}
        vendors={vendors}
      />
    )
  }
}

CmpModalContainer.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string
}
