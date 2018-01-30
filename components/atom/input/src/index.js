import React from 'react'
import PropTypes from 'prop-types'
import {
  MaskInput,
  TagInput,
  PasswordInput
} from './inputs'
import InputWrapper, {SIZES, VERIFICATION_TYPES} from './InputWrapper'

const NATIVE_TYPES = ['text', 'number', 'date']

const changeHandler = (ev, onChange) => {
  onChange && onChange({value: ev.target.value, target: ev.target})
}

const AtomInput = ({
  label,
  name,
  onChange,
  size,
  helpText,
  verificationtext,
  verificationtype,
  ...props
}) =>
  <InputWrapper
    label={label}
    name={name}
    size={size}
    helpText={helpText}
    verificationtext={verificationtext}
    verificationtype={verificationtype}
  >
    <input name={name} className='sui-AtomInput-input' {...props} onChange={(ev) => changeHandler(ev, onChange)} />
  </InputWrapper>

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput
AtomInput.Password = PasswordInput

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(NATIVE_TYPES),
  size: PropTypes.string,
  helpText: PropTypes.string,
  verificationtext: PropTypes.string,
  verificationtype: PropTypes.oneOf(Object.values(VERIFICATION_TYPES))
}

export default AtomInput
export {
  SIZES as atomInputSizes,
  VERIFICATION_TYPES as atomInputVerificationTypes
}
