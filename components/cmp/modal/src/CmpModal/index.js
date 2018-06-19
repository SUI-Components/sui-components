import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModal} from './component'
export class CmpModalContainer extends Component {
  state = {
    consentKey: 0,
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
    this.setState({...purposesAndVendors})
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
      return {[key]: consents, consentKey: state.consentKey + 1}
    })
  }

  _handleAccept = async () => {
    const {sendConsents, onExit} = this.props
    const {purposeConsents, vendorConsents} = this.state
    await sendConsents.execute({purposeConsents, vendorConsents})
    onExit()
  }

  render() {
    const {lang, logo} = this.props
    const {
      consentKey,
      purposes,
      purposeConsents,
      vendors,
      vendorConsents
    } = this.state

    return (
      <CmpModal
        consentKey={consentKey}
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
  getPurposesAndVendors: PropTypes.object,
  lang: PropTypes.string.isRequired,
  logo: PropTypes.string,
  onExit: PropTypes.func.isRequired,
  retrieveConsentsFromCmp: PropTypes.bool
}
