/* eslint-disable react/prop-types, no-unused-vars, no-console, no-debugger */

import React from 'react'

import MoleculeButtonGroup from '../../../../../components/molecule/buttonGroup/src'
import AtomButtom from '@schibstedspain/sui-atom-button'

const logoHouse =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/home-512.png'
const logoRocket =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/rocket-128.png'
const logoGlobe =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/globe-2-128.png'

const imageCheckboxStyle = {
  height: '30px',
  width: '30px',
  padding: '3px',
  cursor: 'pointer'
}

class SimpleCheckboxRadioForm extends React.Component {
  constructor() {
    super()
    this.state = {category: []}

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange({value, field}) {
    const values = this.state[field]

    this.setState({
      [field]: this.isCategorySelected(value)
        ? values.filter(v => value !== v)
        : [...values, value]
    })
  }

  onSubmit(ev) {
    ev.preventDefault()
    ev.stopPropagation()

    window.alert(JSON.stringify(this.state))
  }

  isCategorySelected(value) {
    return this.state.category.includes(value)
  }

  styleIsCategorySelected(category) {
    return this.isCategorySelected(category)
      ? {display: 'inline-block', border: '1px solid black'}
      : {display: 'inline-block', border: '1px solid white'}
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <MoleculeButtonGroup>
          <AtomButtom
            isButton
            focused={this.isCategorySelected('house')}
            onClick={() => this.onChange({value: 'house', field: 'category'})}
          >
            <img style={imageCheckboxStyle} src={logoHouse} alt="" />
          </AtomButtom>
          <AtomButtom
            isButton
            focused={this.isCategorySelected('rocket')}
            onClick={() => this.onChange({value: 'rocket', field: 'category'})}
          >
            <img style={imageCheckboxStyle} src={logoRocket} alt="" />
          </AtomButtom>
          <AtomButtom
            isButton
            focused={this.isCategorySelected('globe')}
            onClick={() => this.onChange({value: 'globe', field: 'category'})}
          >
            <img style={imageCheckboxStyle} src={logoGlobe} alt="" />
          </AtomButtom>
        </MoleculeButtonGroup>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <AtomButtom isSubmit>Send</AtomButtom>
      </form>
    )
  }
}

export default SimpleCheckboxRadioForm
