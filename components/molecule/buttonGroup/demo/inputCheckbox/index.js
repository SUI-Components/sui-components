/* eslint-disable react/prop-types, no-unused-vars, no-console, no-debugger */

import {Component} from 'react'

import MoleculeButtonGroup from 'components/molecule/buttonGroup/src'
import AtomButton from '@s-ui/react-atom-button'

import {
  IconSquare,
  IconTriangle,
  IconCircle,
  IconEllipse,
  IconStar,
  IconMinus
} from '../icons'

class SimpleCheckboxRadioForm extends Component {
  constructor() {
    super()
    this.state = {category: []}

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange({value, field}) {
    const values = this.state[field]

    this.setState({
      [field]: this.isCategorySelected(value)
        ? values.filter(v => value !== v)
        : [...values, value]
    })
  }

  handleOnSubmit(ev) {
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
    const {handleOnChange, handleOnSubmit} = this
    return (
      <form onSubmit={handleOnSubmit}>
        <MoleculeButtonGroup>
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('square')}
            onClick={() => handleOnChange({value: 'square', field: 'category'})}
            leftIcon={<IconSquare />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('triangle')}
            onClick={() =>
              handleOnChange({value: 'triangle', field: 'category'})
            }
            leftIcon={<IconTriangle />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('ellipse')}
            onClick={() =>
              handleOnChange({value: 'ellipse', field: 'category'})
            }
            leftIcon={<IconEllipse />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('star')}
            onClick={() => handleOnChange({value: 'star', field: 'category'})}
            leftIcon={<IconStar />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('minus')}
            onClick={() => handleOnChange({value: 'minus', field: 'category'})}
            leftIcon={<IconMinus />}
          />
          <AtomButton
            isButton
            design="solid"
            focused={this.isCategorySelected('circle')}
            onClick={() => handleOnChange({value: 'circle', field: 'category'})}
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
