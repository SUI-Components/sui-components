import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpBanner} from './component'
import CmpModal from '../../../modal/src/index'
import {sendConsents} from '../../../services/src/useCases'

export class CmpBannerContainer extends Component {
  state = {
    showModal: false,
    showNotification: false
  }

  _handleAccept = async () => {
    console.log('accept')
    const {getPurposesAndVendors} = this.props
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

  _generateButtons() {
    return [
      {
        children: 'Cambiar configuración',
        negative: true,
        onClick: this._handleReadMore,
        type: 'tertiary',
        size: 'small'
      },
      {
        children: 'Seguir navegando',
        negative: true,
        onClick: this._handleAccept,
        type: 'primary',
        size: 'large'
      }
    ]
  }

  componentDidMount() {
    this.setState({showNotification: true})
    // const {userAcceptedCookies} = await this.props.getUserAcceptedCookiesUseCase.execute()
    // if (userAcceptedCookies === false) {
    //   const {CookiesNotification} = await import('./CookiesNotification')
    //   this._cookiesNotificationComponent =
    //     CookiesNotification || CookiesNotification.default
    //   this.setState({showNotification: true})
    // }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showNotification && (
          <CmpBanner buttons={this._generateButtons()} />
        )}
        {this.state.showModal && <CmpModal />}
      </React.Fragment>
    )
  }
}

CmpBannerContainer.propTypes = {
  getPurposesAndVendors: PropTypes.object.isRequired
}
