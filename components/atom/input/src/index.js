import React from 'react'
import PropTypes from 'prop-types'
import {
  MaskInput,
  TagInput,
  PasswordInput
} from './inputs'
import InputWrapper from './InputWrapper'

const NATIVE_TYPES = ['text', 'number', 'date']

const changeHandler = (ev, cb) => {
  cb && cb({value: ev.target.value, target: ev.target})
}

const AtomInput = ({label, name, onChange, ...props}) =>
  <InputWrapper label={label} name={name}>
    <input name={name} {...props} onChange={(ev) => changeHandler(ev, onChange)} />
  </InputWrapper>

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput
AtomInput.Password = PasswordInput

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(NATIVE_TYPES)
}

export default AtomInput
