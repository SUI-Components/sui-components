/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeButtonGroup from '../../../../../components/molecule/buttonGroup/src'
import AtomButtom, {
  atomButtonGroupPositions
} from '@schibstedspain/sui-atom-button'

import AtomInput from '@s-ui/react-atom-input'

const logoHouse =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/home-512.png'
const logoRocket =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/rocket-128.png'
const logoGlobe =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/globe-2-128.png'

const imageCheckboxStyle = {
  height: '50px',
  width: '50px',
  cursor: 'pointer'
}

class SimpleCheckboxRadioForm extends React.Component {
  constructor() {
    super()
    this.state = {category: ''}

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange({value, field}) {
    this.setState({
      [field]: value
    })
  }

  onSubmit(ev) {
    ev.preventDefault()
    ev.stopPropagation()

    window.alert(JSON.stringify(this.state))
  }

  isCategorySelected(category) {
    return this.state.category === category
  }

  styleIsCategorySelected(category) {
    return this.isCategorySelected(category)
      ? {display: 'inline-block', border: '1px solid black'}
      : {display: 'inline-block', border: '1px solid white'}
  }

  render() {
    const {termsService} = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <AtomInput
          hideInput
          id="categoryHouse"
          type="radio"
          value="house"
          checked={this.isCategorySelected('house')}
          onChange={({ev, value}) => {
            this.onChange({value, field: 'category', ev})
          }}
        />
        <AtomInput
          hideInput
          id="categoryRocket"
          type="radio"
          value="rocket"
          checked={this.isCategorySelected('rocket')}
          onChange={({ev, value}) => {
            this.onChange({value, field: 'category', ev})
          }}
        />
        <AtomInput
          hideInput
          id="categoryGlobe"
          value="globe"
          type="radio"
          checked={this.isCategorySelected('globe')}
          onChange={({ev, value}) => {
            this.onChange({value, field: 'category', ev})
          }}
        />
        <MoleculeButtonGroup>
          <AtomButtom>
            <label htmlFor="categoryHouse">A</label>
          </AtomButtom>
          <AtomButtom>
            <label htmlFor="categoryRocket">B</label>
          </AtomButtom>
          <AtomButtom>
            <label htmlFor="categoryGlobe">C</label>
          </AtomButtom>
        </MoleculeButtonGroup>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <AtomButtom type="submit">Send</AtomButtom>
      </form>
    )
  }
}

export default SimpleCheckboxRadioForm
