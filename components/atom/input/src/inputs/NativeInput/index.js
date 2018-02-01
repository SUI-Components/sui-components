import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper, {VERIFICATION_TYPES} from '../../InputWrapper'

const NATIVE_TYPES = ['text', 'number', 'date']

/**
 * Intercepts native onChange event in order to set the param format
 * expected for all sui-input onChange functions
 */
const changeHandler = (ev, onChange) => {
  onChange && onChange({value: ev.target.value, target: ev.target})
}

const NativeInput = ({
  name,
  label,
  size,
  helpText,
  verificationText,
  verificationType,
  onChange,
  type,
  placeholder
}) =>
  <InputWrapper
    label={label}
    name={name}
    size={size}
    helpText={helpText}
    verificationText={verificationText}
    verificationType={verificationType}
  >
    <input
      name={name}
      className='sui-AtomInput-input'
      type={type}
      placeholder={placeholder}
      onChange={(ev) => changeHandler(ev, onChange)}
    />
  </InputWrapper>

NativeInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(NATIVE_TYPES),
  size: PropTypes.string,
  helpText: PropTypes.string,
  verificationText: PropTypes.string,
  verificationType: PropTypes.oneOf(Object.values(VERIFICATION_TYPES))
}

export default NativeInput
