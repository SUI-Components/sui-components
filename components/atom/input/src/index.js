import React from 'react'
import PropTypes from 'prop-types'
import {MaskInput, TagInput} from './inputs'
import InputWrapper from './InputWrapper'

const onChange = (ev) => {
  const {onChange} = this.props
  onChange && onChange({value: ev.target.value, target: ev.target})
}

const AtomInput = ({label, name, ...props}) =>
  <InputWrapper label={label} name={name}>
    <input name={name} {...props} onChange={onChange} />
  </InputWrapper>

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default AtomInput
