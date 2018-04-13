import React from 'react'
import MaskInput from './inputs/MaskInput'
import {AtomTagInput, TagInput} from './inputs/TagInput'
import PasswordInput from './inputs/PasswordInput'
import NativeInput from './inputs/NativeInput'
import {SIZES, AtomValidationTextTypes} from './InputWrapper'

const AtomInput = (props) =>
  <NativeInput {...props} />

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput
AtomInput.Password = PasswordInput

AtomInput.displayName = 'AtomInput'

export default AtomInput
export {
  SIZES as atomInputSizes,
  AtomValidationTextTypes,
  AtomTagInput,
}
