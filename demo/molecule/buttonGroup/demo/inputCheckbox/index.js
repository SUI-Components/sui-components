/* eslint-disable react/prop-types, no-unused-vars, no-console, no-debugger */

import React from 'react'

import MoleculeButtonGroup from '../../../../../components/molecule/buttonGroup/src'
import AtomButton from '@s-ui/react-atom-button'

import {
  IconSquare,
  IconTriangle,
  IconCircle,
  IconEllipse,
  IconStar,
  IconMinus
} from '../icons'

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
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('square')}
            onClick={() => this.onChange({value: 'square', field: 'category'})}
            leftIcon={<IconSquare />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('triangle')}
            onClick={() =>
              this.onChange({value: 'triangle', field: 'category'})
            }
            leftIcon={<IconTriangle />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('ellipse')}
            onClick={() => this.onChange({value: 'ellipse', field: 'category'})}
            leftIcon={<IconEllipse />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('star')}
            onClick={() => this.onChange({value: 'star', field: 'category'})}
            leftIcon={<IconStar />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('minus')}
            onClick={() => this.onChange({value: 'minus', field: 'category'})}
            leftIcon={<IconMinus />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('circle')}
            onClick={() => this.onChange({value: 'circle', field: 'category'})}
            leftIcon={<IconCircle />}
          />
        </MoleculeButtonGroup>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <AtomButton design="solid" isSubmit>
          Send
        </AtomButton>
      </form>
    )
  }
}

export default SimpleCheckboxRadioForm
