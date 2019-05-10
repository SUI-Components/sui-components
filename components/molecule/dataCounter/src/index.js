import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomButton from '@schibstedspain/sui-atom-button'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import MoleculeField from '@s-ui/react-molecule-field'

// import {isRequiredMessage} from './customPropTypes'
const BUTTON_TYPE = 'secondary'

const BASE_CLASS = `sui-MoleculeDataCounter`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

const isCharDigit = char => /[0-9]/.test(char)

const MoleculeDataCounter = ({
  id,
  label,
  value,
  errorText,
  size = inputSizes.MEDIUM,
  charsSize = 2,
  max = 99,
  min = 1,
  minValueHelpText,
  minValueErrorText,
  maxValueHelpText,
  maxValueErrorText,
  onChange,
  disabled
}) => {
  value = value ? String(value) : String(min)

  const [internalValue, setInternalValue] = useState(value)

  const isBelowMaxValue = internalValue < max
  const isOverMinValue = internalValue > min
  const isMaxValue = internalValue === max
  const isMinValue = internalValue === min

  const decrementDisabled = disabled || internalValue <= min
  const incrementDisabled = disabled || internalValue >= max

  const incrementValue = e => {
    if (isBelowMaxValue) {
      const newValue = internalValue === '' ? min : parseInt(internalValue) + 1
      const strNewValue = String(newValue)
      setInternalValue(strNewValue)
      onChange(e, {value: strNewValue})
    }
  }

  const decrementValue = e => {
    if (isOverMinValue) {
      const newValue = internalValue === '' ? min : parseInt(internalValue) - 1
      const strNewValue = String(newValue)
      setInternalValue(strNewValue)
      onChange(e, {value: strNewValue})
    }
  }

  const removeDigit = e => {
    if (internalValue.length) {
      const newValue = internalValue.slice(0, -1)
      setInternalValue(newValue)
      onChange(e, {value: newValue})
    }
  }

  const addDigit = (e, {key: digit}) => {
    const newValue = internalValue + digit
    setInternalValue(newValue)
    onChange(e, {value: newValue})
  }

  const handleKeyDown = e => {
    const {key} = e
    if (key === 'ArrowUp') incrementValue(e)
    if (key === 'ArrowDown') decrementValue(e)
    if (key === 'Backspace') removeDigit(e)
    if (isCharDigit(key)) addDigit(e, {key})
  }

  let helpText
  if (!disabled) {
    if (isMaxValue && maxValueHelpText) helpText = maxValueHelpText
    if (isMinValue && minValueHelpText) helpText = minValueHelpText
  }

  return (
    <div className={BASE_CLASS}>
      <MoleculeField
        name={id}
        label={label}
        helpText={helpText}
        errorText={errorText}
      >
        <div
          className={cx(
            CLASS_INPUT_CONTAINER,
            `${CLASS_INPUT_CONTAINER}--${size}`
          )}
        >
          <AtomButton
            disabled={decrementDisabled}
            onClick={decrementValue}
            type={BUTTON_TYPE}
          >
            -
          </AtomButton>
          <AtomInput
            id={id}
            disabled={disabled}
            size={size}
            charsSize={charsSize}
            value={internalValue}
            onKeyDown={handleKeyDown}
            onChange={handleKeyDown}
          />
          <AtomButton
            disabled={incrementDisabled}
            onClick={incrementValue}
            type="secondary"
          >
            +
          </AtomButton>
        </div>
      </MoleculeField>
    </div>
  )
}

MoleculeDataCounter.displayName = 'MoleculeDataCounter'

MoleculeDataCounter.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string.isRequired,

  /** width of input based in number of characters (native "size" attribute) */
  charsSize: PropTypes.number,

  /** text to display in case of error */
  errorText: PropTypes.string,

  /** value of the control */
  value: PropTypes.number,

  /** max value allowed */
  max: PropTypes.number,

  /** min value allowed */
  min: PropTypes.number,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  // minValueHelpText: PropTypes.string.isRequired,
  minValueErrorText: PropTypes.string.isRequired,
  maxValueHelpText: PropTypes.string.isRequired,
  maxValueErrorText: PropTypes.string.isRequired,

  /* HelpText to be displayed when value reaches minimun value */
  minValueHelpText: function(props, propName, componentName) {
    console.log({props, propName, componentName})
  },

  // /* ErrorText to be displayed when value is lower than minimun value */
  // minValueErrorText: isRequiredMessage('min'),

  // /* HelpText to be displayed when value reaches maximum value */
  // maxValueHelpText: isRequiredMessage('max'),

  // /* ErrorText to be displayed when value is lower than maximun value */
  // maxValueErrorText: isRequiredMessage('max'),

  /* component disabled or not */
  disabled: PropTypes.bool,

  /** 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(inputSizes))
}

export default MoleculeDataCounter
export {inputSizes as moleculeDataCounterSizes}
