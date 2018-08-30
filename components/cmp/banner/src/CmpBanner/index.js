import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpBanner} from './component'
import CmpModal from '@s-ui/react-cmp-modal'

import {I18N} from '../settings'

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'

export class CmpBannerContainer extends Component {
  state = {
    showModal: false,
    showNotification: false
  }

  containerDOMEl = React.createRef()

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

  /**
   * This handler is used everytime the user clicks on something in the web
   * in order to assume he's accepting our CMP if he's not trying to configure it and
   * he's just navigating the website
   */
  _handleClickOnDocument = ({target}) => {
    this.containerDOMEl.current.contains(target) === false &&
      this._handleAccept()
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
    // We're assuming, the user accepts our CMP if he keep navigating in our page
    document.addEventListener('click', this._handleClickOnDocument, true)

    const {getConsentStatus} = this.props
    const consentStatus = await getConsentStatus.execute()
    this.setState({
      showNotification: consentStatus === CONSENT_STATUS_NOT_ACCEPTED
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleClickOnDocument, true)
  }

  render() {
    const {companyName, lang, logo, privacyUrl} = this.props
    return (
      <div ref={this.containerDOMEl}>
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
