import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomValidationText, {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'
import Addon, {AddonTypes} from './Addon'

const BASE_CLASS = 'sui-AtomInput'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const getInputClass = ({size, validationType}) =>
  cx(
    `${BASE_CLASS}-inputWrapper`,
    `${BASE_CLASS}--${size}`,
    `${BASE_CLASS}--${validationType}`
  )

const getClassNames = ({size, validationText, validationType}) =>
  cx(BASE_CLASS)

const InputWrapper = (props) => {
  const {
    addonLeft,
    addonRight,
    children,
    helpText,
    label,
    name,
    optionalText,
    size,
    validationText,
    validationType,
  } = props

  return (
    <div className={getClassNames({size, validationText, validationType})}>
      <AtomLabel
        name={name}
        for='labelName'
        text={label}
        optional={optionalText}
        type={validationType} />

      <div className={getInputClass({size, validationType})}>
        { addonLeft && <Addon label={addonLeft} type={AddonTypes.LEFT} /> }
        { children }
        { addonRight && <Addon label={addonRight} type={AddonTypes.RIGHT} /> }
      </div>
      { helpText && <AtomHelpText text={helpText} /> }
      { validationType && <AtomValidationText text={validationText} type={validationType} /> }
    </div>
  )
}

InputWrapper.propTypes = {
  /**
   * Text to be shown left side addon
   */
  addonLeft: PropTypes.string,
  /**
   * Text to be shown right side addon
   */
  addonRight: PropTypes.string,
  /**
   * <input /> to be wrapped
   */
  children: PropTypes.node.isRequired,
  /**
   * Text to be shown as help text
   */
  helpText: PropTypes.string,
  /**
   * Text to be shown as label
   */
  label: PropTypes.string.isRequired,
  /**
   * Name of the control
   */
  name: PropTypes.string.isRequired,
  /**
   * Text to be shown as label optional text
   */
  optionalText: PropTypes.string,
  /**
   * Input size: 'small' or 'medium'
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Text to be shown as validation text
   */
  validationText: PropTypes.string,
  /**
   * Validation text type: 'success' or 'error'
   */
  validationType: PropTypes.oneOf(Object.values(AtomValidationTextTypes)),
}

InputWrapper.defaultProps = {
  size: SIZES.MEDIUM
}

export default InputWrapper
export {SIZES, AtomValidationTextTypes as atomInputValidationTypes}
