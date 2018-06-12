import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import {VendorRow} from './VendorRow'
import {VendorsTable} from './VendorsTable'

import {CLASS} from './settings'

import mockedVendorsJSON from './mockedVendors.json'

class ModalCmp extends Component {
  state = {
    vendors: []
  }

  componentDidMount() {
    console.log(mockedVendorsJSON)
    // get the vendors list from window.__cmp
    this.setState({
      vendors: mockedVendorsJSON
    })
  }

  _handleToggleVendorStatus = ({enabled, id}) => {
    console.log({enabled, id})
  }

  render() {
    const {title, body} = this.props
    return (
      <div className={CLASS}>
        <div className={`${CLASS}-content`}>
          <header className={`${CLASS}-header`}>
            <img
              className={`${CLASS}-logo`}
              src={this.props.logo}
              alt="Schibsted Spain logo"
            />

            <Button onClick={() => {}} type="secondary">
              Habilitar todo
            </Button>
          </header>

          <section className={`${CLASS}-body`}>
            <h3 className={`${CLASS}-title`}>{title}</h3>
            <p className={`${CLASS}-message`}>{body}</p>
            <VendorsTable>
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={2}
                title="El gato volador"
              />
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={2}
                title="El gato volador"
              />
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={3}
                title="Beerlin"
              />
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={4}
                title="1000 saca cuartos"
              />
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={2}
                title="El gato volador"
              />
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={3}
                title="Beerlin"
              />
              <VendorRow
                enabled
                handleToggleVendorStatus={this._handleToggleVendorStatus}
                id={4}
                title="1000 saca cuartos"
              />
            </VendorsTable>
          </section>

          <footer className={`${CLASS}-footer`}>
            <Button type="tertiary" onClick={() => {}} size="small">
              Cancelar
            </Button>
            <Button onClick={() => {}} size="large">
              Guardar y salir
            </Button>
          </footer>
        </div>
      </div>
    )
  }
}

ModalCmp.displayName = 'ModalCmp'

ModalCmp.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default ModalCmp
