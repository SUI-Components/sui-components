import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpBanner} from './component'
import CmpModal from '../../../modal/src/index'

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
    // todo, we have to call cmp and tell him user accepted everything
    this.setState({showModal: false, showNotification: false})
  }

  _handleReadMore = async () => {
    this.setState({showModal: true, showNotification: false})
  }

  _handleExitModal = () => {
    this.setState({showModal: false})
  }

  _generateButtons() {
    return [
      {
        children: 'Cambiar configuración',
        negative: true,
        onClick: this._handleReadMore,
        size: 'small',
        type: 'tertiary'
      },
      {
        children: 'Seguir navegando',
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
    const {lang, logo, privacyUrl} = this.props
    return (
      <React.Fragment>
        {this.state.showNotification && (
          <CmpBanner buttons={this._generateButtons()} lang={lang} />
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
  getConsentStatus: PropTypes.object.isRequired,
  getPurposesAndVendors: PropTypes.object.isRequired,
  lang: PropTypes.string,
  logo: PropTypes.string,
  privacyUrl: PropTypes.string,
  sendConsents: PropTypes.object.isRequired
}
