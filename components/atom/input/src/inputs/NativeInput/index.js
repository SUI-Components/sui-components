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
  verificationtext,
  verificationtype,
  onChange,
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

NativeInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(NATIVE_TYPES),
  size: PropTypes.string,
  helpText: PropTypes.string,
  verificationtext: PropTypes.string,
  verificationtype: PropTypes.oneOf(Object.values(VERIFICATION_TYPES))
}

export default NativeInput
