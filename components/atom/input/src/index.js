import React from 'react'
import {AtomMaskInput, MaskInput} from './inputs/MaskInput'
import {AtomTagInput, TagInput} from './inputs/TagInput'
import {AtomPasswordInput, PasswordInput} from './inputs/PasswordInput'
import NativeInput from './inputs/NativeInput'
import {SIZES, atomInputValidationTypes} from './InputWrapper'

const AtomInput = (props) =>
  <NativeInput {...props} />

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput
AtomInput.Mask = MaskInput
AtomInput.Password = PasswordInput

AtomInput.displayName = 'AtomInput'

export default AtomInput
export {
  AtomMaskInput,
  AtomPasswordInput,
  AtomTagInput,
  atomInputValidationTypes,
  SIZES as atomInputSizes,
}
