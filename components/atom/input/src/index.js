import React from 'react'
import PropTypes from 'prop-types'
import {AtomMaskInput, MaskInput} from './inputs/MaskInput'
import {AtomTagInput, TagInput} from './inputs/TagInput'
import {AtomPasswordInput, PasswordInput} from './inputs/PasswordInput'
import NativeInput from './inputs/NativeInput'
import {SIZES, atomInputValidationTypes} from './InputWrapper'
import {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'

const NATIVE_TYPES = ['text', 'number', 'date']
const TYPES = {
  mask: 'mask',
  password: 'password',
  tag: 'tag',
  text: 'text',
  number: 'number',
  date: 'date'
}

const AtomInput = (props) => {
  const {type} = props
  if (NATIVE_TYPES.includes(type)) return <NativeInput {...props} />
  if (type === TYPES.mask) return <AtomMaskInput {...props} />
  if (type === TYPES.password) return <AtomPasswordInput {...props} />
  if (type === TYPES.tag) return <AtomTagInput {...props} />
}

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput
AtomInput.Password = PasswordInput

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  /**
   * InputWrapper: Text to be shown left side addon
   */
  addonLeft: PropTypes.string,
  /**
   * InputWrapper:  Text to be shown right side addon
   */
  addonRight: PropTypes.string,
  /**
   * InputWrapper:  <input /> to be wrapped
   */
  children: PropTypes.node,
  /**
   * InputWrapper:  Text to be shown as help text
   */
  helpText: PropTypes.string,
  /**
   * AtomPasswordInput: Text to be shown in order to hide the password on click
   */
  hideText: PropTypes.string,
  /**
   * Element identifier
   */
  id: PropTypes.string.isRequired,
  /**
   * InputWrapper:  Text to be shown as label
   */
  label: PropTypes.string,
  /**
   * AtomMaskInput: mask object, see https://unmanner.github.io/imaskjs/
   */
  mask: PropTypes.object,
  /**
   * AtomTagInput, AtomMaskInput, InputWrapper: : The name of the control
   */
  name: PropTypes.string,
  /**
   * NativeInput, AtomPasswordInput, AtomTagInput, AtomMaskInput: Event launched on every input change
   */
  onChange: PropTypes.func,
  /**
   * InputWrapper: Text to be shown as label optional text
   */
  optionalText: PropTypes.string,
  /**
   * AtomPasswordInput: Text to be shown in order to show the password on click
   */
  showText: PropTypes.string,
  /**
   * InputWrapper: Input size: 'small' or 'medium'
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * NativeInput: Native input types allowed: 'text', 'number', 'date'
   */
  type: PropTypes.oneOf(Object.values(TYPES)),
  /**
   * InputWrapper: Text to be shown as validation text
   */
  validationText: PropTypes.string,
  /**
   * InputWrapper: Validation text type: 'success' or 'error'
   */
  validationType: PropTypes.oneOf(Object.values(AtomValidationTextTypes)),
}

export default AtomInput
export {
  SIZES as atomInputSizes,
  TYPES as atomInputTypes,
  atomInputValidationTypes,
}
