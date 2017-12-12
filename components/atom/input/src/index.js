import React from 'react'
import PropTypes from 'prop-types'
import {MaskInput} from './inputs'
import InputWrapper from './InputWrapper'

const AtomInput = ({label, name, ...props}) =>
  <InputWrapper label={label} name={name}>
    <input name={name} {...props} />
  </InputWrapper>

AtomInput.Mask = MaskInput

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

export default AtomInput
