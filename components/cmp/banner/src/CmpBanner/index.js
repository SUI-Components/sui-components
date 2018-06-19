import React, {Component} from 'react'

import {CmpBanner} from './component'
import CmpModal from '../../../modal/src/index'

export class CmpBannerContainer extends Component {
  state = {
    showModal: false,
    showNotification: false
  }

  _handleAccept = () => {
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
