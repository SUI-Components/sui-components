import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import {VendorRow} from './VendorRow'
import {VendorsTable} from './VendorsTable'

// to remove
import mockedVendorsJSON from './mockedVendors.json'

class ModalCmp extends Component {
  state = {
    vendors: []
  }

  componentDidMount () {
    // get the vendors list from window.__cmp
    this.setState({
      vendors: mockedVendorsJSON
    })
  }

  _handleToggleVendorStatus = ({ enabled, id }) => {
    console.log({ enabled, id })
  }

  render () {
    const {title, body, acceptAllLabel, denyAllLabel} = this.props
    return (
      <div className='sui-ModalCmp'>
        <div className='sui-ModalCmp-ui-container sui-ModalCmp-showing'>
          <div className='sui-ModalCmp-ui sui-ModalCmp-showing'>
            <div className='sui-ModalCmp-nav-bar sui-ModalCmp-top'>
              <div className='sui-ModalCmp-nav-bar-publisher-logo-container'>
                <img className='sui-ModalCmp-nav-bar-publisher-logo' src='http://www.schibsted.com/Global/LogoTypes/SMG_Logo_Small_RGB.png' alt='Schibsted Spain logo' />
              </div>
              <Button onClick={() => {}} type='secondary'>{denyAllLabel}</Button>
              <Button onClick={() => {}}>{acceptAllLabel}</Button>
            </div>
            <div className='sui-ModalCmp-partner-info'>
              <div className='sui-ModalCmp-sub-title-container'>
                <h1 className='sui-ModalCmp-sub-title'>{title}</h1>
              </div>
              <p className='sui-ModalCmp-messaging'>{body}</p>
              <VendorsTable>
                <VendorRow
                  enabled
                  handleToggleVendorStatus={this._handleToggleVendorStatus}
                  id={2}
                  title='El gato volador'
                />
                <VendorRow
                  enabled
                  handleToggleVendorStatus={this._handleToggleVendorStatus}
                  id={2}
                  title='El gato volador'
                />
                <VendorRow
                  enabled
                  handleToggleVendorStatus={this._handleToggleVendorStatus}
                  id={3}
                  title='Beerlin'
                />
                <VendorRow
                  enabled
                  handleToggleVendorStatus={this._handleToggleVendorStatus}
                  id={4}
                  title='1000 saca cuartos'
                />
              </VendorsTable>
            </div>
            <div className='sui-ModalCmp-nav-bar sui-ModalCmp-bottom'>
              <Button type='tertiary' onClick={() => {}}>Cancelar</Button>
              <Button onClick={() => {}}>Guardar y salir</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ModalCmp.displayName = 'ModalCmp'

ModalCmp.propTypes = {
  acceptAllLabel: PropTypes.string.isRequired,
  denyAllLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default ModalCmp
