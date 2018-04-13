import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from '../../InputWrapper'
import Input from '../../Input'

const DEFAULT_TYPE = 'text'
const NATIVE_TYPES = [DEFAULT_TYPE, 'number', 'date']

/**
 * Intercepts native onChange event in order to set the param format
 * expected for all sui-input onChange functions
 */
const changeHandler = (ev, onChange) => {
  onChange && onChange({value: ev.target.value, target: ev.target})
}

const NativeInput = (props) => {
  const {onChange, type} = props
  return (
    <InputWrapper {...props}>
      <Input
        className='sui-AtomInput-input'
        onChange={(ev) => changeHandler(ev, onChange)}
        type={type}
        {...props}
      />
    </InputWrapper>
  )
}

NativeInput.propTypes = {
  type: DEFAULT_TYPE
}

NativeInput.propTypes = {
  /**
   * Event launched on every input change
   */
  onChange: PropTypes.func,
  /**
   * Native input types allowed: 'text', 'number', 'date'
   */
  type: PropTypes.oneOf(NATIVE_TYPES)
}

export default NativeInput
