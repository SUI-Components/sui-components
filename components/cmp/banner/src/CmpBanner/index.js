import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpBanner} from './component'
import CmpModal from '@s-ui/react-cmp-modal'

import {CLASS, I18N} from '../settings'
const CLASS_CONTAINER = `${CLASS}-container`

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'

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
    document.addEventListener('click', ({target}) => {
      let isClickOnCmp = false
      while (target) {
        isClickOnCmp =
          ` ${target.className} `.indexOf(` ${CLASS_CONTAINER} `) > -1
        console.log(isClickOnCmp)
        if (isClickOnCmp) break
        console.log(target)
        target = target.parentNode
      }
      console.log(isClickOnCmp)
      if (isClickOnCmp === false) this._handleAccept()
    })

    const {getConsentStatus} = this.props
    const consentStatus = await getConsentStatus.execute()
    this.setState({
      showNotification: consentStatus === CONSENT_STATUS_NOT_ACCEPTED
    })
  }

  render() {
    const {companyName, lang, logo, privacyUrl} = this.props
    return (
      <div className={CLASS_CONTAINER}>
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
      </div>
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
