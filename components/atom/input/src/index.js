import React, {Component} from 'react'
import PropTypes from 'prop-types'

import nativeInputProps from './common/nativeInputProps'
import {MaskedInput, DateInput} from './inputs'

import { filterObjectKeys } from './libs'

const TYPES = {
  TEXT: 'text',
  DATE: 'date',
  NUMBER: 'number'
}

class AtomInput extends Component {
  state = {
    error: false
  }

  get inputProps () {
    return filterObjectKeys(this.props, Object.keys(nativeInputProps))
  }

  renderMaskedInput (mask) {
    return (
      <MaskedInput
        mask={mask}
        {...this.inputProps}
      />
    )
  }

  renderDateInput () {
    return (
      <DateInput {...this.inputProps} />
    )
  }

  renderInput (mask, type) {
    if (mask) return this.renderMaskedInput(mask)
    if (type === TYPES.DATE) return this.renderDateInput()
    return (
      <input type={type} {...this.inputProps} />
    )
  }

  render () {
    const {label, name, mask, type} = this.props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        {this.renderInput(mask, type)}
      </div>
    )
  }
}

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)),
  mask: PropTypes.object,
  ...nativeInputProps
}

export default AtomInput
export {
  TYPES as AtomInputTypes
}
