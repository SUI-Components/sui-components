import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpBanner} from './component'
import CmpModal from '@s-ui/react-cmp-modal'

import {I18N} from '../settings'

export class CmpBannerContainer extends Component {
  state = {
    showModal: false,
    showNotification: false
  }

  _handleAccept = async () => {
    const {getPurposesAndVendors, sendConsents} = this.props
    const {
      purposeConsents,
      vendorConsents
    } = await getPurposesAndVendors.execute()
    await sendConsents.execute({purposeConsents, vendorConsents})
    this.setState({showModal: false, showNotification: false})
  }

  _handleReadMore = async () => {
    this.setState({showModal: true, showNotification: false})
  }

  _handleExitModal = () => {
    this.setState({showModal: false})
  }

  _generateButtons() {
    const i18n = I18N[this.props.lang]
    return [
      {
        children: i18n.READ_MORE_BUTTON,
        negative: true,
        onClick: this._handleReadMore,
        size: 'small',
        type: 'tertiary'
      },
      {
        children: i18n.ACCEPT_BUTTON,
        negative: true,
        onClick: this._handleAccept,
        size: 'large',
        type: 'primary'
      }
    ]
  }

  async componentDidMount() {
    const {getConsentStatus} = this.props
    const consentStatus = await getConsentStatus.execute()
    const {userAcceptedCookies} = consentStatus
    // todo, we still has to know which is the correct key to check
    this.setState({showNotification: !userAcceptedCookies})
  }

  render() {
    const {companyName, lang, logo, privacyUrl} = this.props
    return (
      <React.Fragment>
        {this.state.showNotification && (
          <CmpBanner
            buttons={this._generateButtons()}
            companyName={companyName}
            lang={lang}
          />
        )}
        {this.state.showModal && (
          <CmpModal
            cmpReady
            lang={lang}
            logo={logo}
            onExit={this._handleExitModal}
            privacyUrl={privacyUrl}
          />
        )}
      </React.Fragment>
    )
  }
}

CmpBannerContainer.propTypes = {
  companyName: PropTypes.string.isRequired,
  getConsentStatus: PropTypes.object.isRequired,
  getPurposesAndVendors: PropTypes.object.isRequired,
  lang: PropTypes.string,
  logo: PropTypes.string,
  privacyUrl: PropTypes.string,
  sendConsents: PropTypes.object.isRequired
}
