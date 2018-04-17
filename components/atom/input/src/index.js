import React from 'react'
import PropTypes from 'prop-types'
import {AtomMaskInput, MaskInput} from './inputs/MaskInput'
import {AtomTagInput, TagInput} from './inputs/TagInput'
import {AtomPasswordInput, PasswordInput} from './inputs/PasswordInput'
import NativeInput from './inputs/NativeInput'
import {SIZES, atomInputValidationTypes} from './InputWrapper'
import {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'

const AtomInput = (props) =>
  <NativeInput {...props} />

AtomInput.Mask = MaskInput
AtomInput.Tag = TagInput
AtomInput.Mask = MaskInput
AtomInput.Password = PasswordInput

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  /**
   * NativeInput, AtomPasswordInput, AtomTagInput, AtomMaskInput: Event launched on every input change
   */
  onChange: PropTypes.func,
  /**
   * NativeInput: Native input types allowed: 'text', 'number', 'date'
   */
  type: PropTypes.oneOf(['text', 'number', 'date']),
  /**
   * AtomPasswordInput: Text to be shown in order to show the password on click
   */
  showText: PropTypes.string,
  /**
   * AtomPasswordInput: Text to be shown in order to hide the password on click
   */
  hideText: PropTypes.string,
  /**
   * AtomTagInput, AtomMaskInput, InputWrapper: : The name of the control
   */
  name: PropTypes.string,
  /**
   * AtomMaskInput: mask object, see https://unmanner.github.io/imaskjs/
   */
  mask: PropTypes.object,

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
   * InputWrapper:  Text to be shown as label
   */
  label: PropTypes.string,
  /**
   * InputWrapper: Text to be shown as label optional text
   */
  optionalText: PropTypes.string,
  /**
   * InputWrapper: Input size: 'small' or 'medium'
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
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
  AtomMaskInput,
  AtomPasswordInput,
  AtomTagInput,
  atomInputValidationTypes,
  SIZES as atomInputSizes,
}
