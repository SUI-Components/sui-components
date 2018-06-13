import React, {Component} from 'react'

import {getUserAcceptedCookiesUseCase} from './useCases'

class ModalCmp extends Component {
  state = {
    showModal: false,
    showNotification: false
  }

  _cmpModalComponent = null
  _cookiesNotificationComponent = null

  async componentDidMount() {
    const {userAcceptedCookies} = await getUserAcceptedCookiesUseCase.execute()
    if (userAcceptedCookies === false) {
      const {CookiesNotification} = await import('./CookiesNotification')
      this._cookiesNotificationComponent = CookiesNotification
      this.setState({showNotification: true})
    }
  }

  _handleAccept = () => {
    this.setState({showModal: false, showNotification: false})
  }

  _handleReadMore = async () => {
    const {CmpModal} = await import('./CmpModal')
    this._cmpModalComponent = CmpModal
    this.setState({showModal: true, showNotification: false})
  }

  _generateButtons() {
    return [
      {
        children: 'Leer más',
        negative: true,
        onClick: this._handleReadMore,
        type: 'tertiary'
      },
      {
        children: 'Seguir navegando',
        negative: true,
        onClick: this._handleAccept,
        type: 'primary'
      }
    ]
  }

  render() {
    const {showModal, showNotification} = this.state

    return (
      <div className="sui-UserCmp">
        {showModal && <this._cmpModalComponent />}
        {showNotification && (
          <this._cookiesNotificationComponent
            buttons={this._generateButtons()}
          />
        )}
      </div>
    )
  }
}

ModalCmp.displayName = 'ModalCmp'

ModalCmp.propTypes = {}

export default ModalCmp
