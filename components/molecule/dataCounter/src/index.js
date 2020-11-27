import {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomButton, {atomButtonSizes} from '@s-ui/react-atom-button'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import MoleculeField from '@s-ui/react-molecule-field'
import AddIcon from '@adv-ui/fc-iconset/lib/Add'
import SubstractIcon from '@adv-ui/fc-iconset/lib/Substract'

import {ACTIONS} from './config'

const BUTTON_TYPE = 'secondary'

const BASE_CLASS = `sui-MoleculeDataCounter`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

const MoleculeDataCounter = ({
  charsSize = 2,
  disabled,
  errorText: errorTextProps,
  id,
  inputDisabled = false,
  isLoading = false,
  label,
  max = 99,
  maxValueErrorText,
  maxValueHelpText,
  min = 1,
  minValueErrorText,
  minValueHelpText,
  onChange,
  size = inputSizes.MEDIUM,
  value
}) => {
  if (value) value = String(value)
  else if (min) value = String(min)
  else value = '0'

  const [internalValue, setInternalValue] = useState(value)
  const [lastAction, setLastActions] = useState()

  const numInternalValue = Number(internalValue)
  const numMax = Number(max)
  const numMin = Number(min)

  const isBelowMaxValue = numInternalValue < numMax
  const isOverMinValue = numInternalValue > numMin
  const isMaxValue = numInternalValue === numMax
  const isMinValue = numInternalValue === numMin
  const isLowerThanMinValue = numInternalValue < numMin
  const isHigherThanMaxValue = numInternalValue > numMax

  const decrementDisabled = disabled || numInternalValue <= numMin
  const incrementDisabled = disabled || numInternalValue >= numMax

  const assignValue = (e, {nValue}) => {
    const value = String(nValue)
    setInternalValue(value)
    onChange(e, {value})
  }

  const incrementValue = e => {
    setLastActions(ACTIONS.MORE)
    if (isBelowMaxValue) {
      const nValue = internalValue === '' ? min : parseInt(internalValue) + 1
      assignValue(e, {nValue})
    }
  }

  const decrementValue = e => {
    setLastActions(ACTIONS.LESS)
    if (isOverMinValue) {
      const nValue = internalValue === '' ? min : parseInt(internalValue) - 1
      assignValue(e, {nValue})
    }
  }

  const handleChange = (e, {value}) => {
    setLastActions(ACTIONS.CHANGE)
    const nValue = parseInt(value, 10)
    if (value.length <= 2 && !isNaN(nValue)) {
      assignValue(e, {nValue})
    }
  }

  const handleKeyDown = (e, {value}) => {
    const {key} = e
    if (key === 'ArrowUp') incrementValue(e)
    if (key === 'ArrowDown') decrementValue(e)
  }

  let helpText, errorText
  if (!disabled) {
    if (isMaxValue) helpText = maxValueHelpText
    else if (isMinValue) helpText = minValueHelpText
    else helpText = null

    if (isLowerThanMinValue) errorText = minValueErrorText
    else if (isHigherThanMaxValue) errorText = maxValueErrorText
    else if (errorTextProps) errorText = errorTextProps
    else errorText = null
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
            isLoading={isLoading && lastAction === ACTIONS.LESS}
            onClick={decrementValue}
            size={size === inputSizes.SMALL ? atomButtonSizes.SMALL : null}
            type={BUTTON_TYPE}
          >
            <SubstractIcon />
          </AtomButton>
          <AtomInput
            charsSize={charsSize}
            disabled={disabled || inputDisabled}
            id={id}
            isLoading={isLoading && lastAction === ACTIONS.CHANGE}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            size={size}
            value={internalValue}
          />
          <AtomButton
            disabled={incrementDisabled}
            isLoading={isLoading && lastAction === ACTIONS.MORE}
            onClick={incrementValue}
            size={size === inputSizes.SMALL ? atomButtonSizes.SMALL : null}
            type={BUTTON_TYPE}
          >
            <AddIcon />
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
  charsSize: PropTypes.number.isRequired,

  /** text to display in case of error */
  errorText: PropTypes.string,

  /** value of the control */
  value: PropTypes.number.isRequired,

  /** max value allowed */
  max: PropTypes.number.isRequired,

  /** min value allowed */
  min: PropTypes.number.isRequired,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* HelpText to be displayed when value reaches minimun value */
  minValueHelpText: PropTypes.string.isRequired,

  // /* ErrorText to be displayed when value is lower than minimun value */
  minValueErrorText: PropTypes.string.isRequired,

  // /* HelpText to be displayed when value reaches maximum value */
  maxValueHelpText: PropTypes.string.isRequired,

  // /* ErrorText to be displayed when value is lower than maximun value */
  maxValueErrorText: PropTypes.string.isRequired,

  /* component disabled or not */
  disabled: PropTypes.bool,

  /** 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(inputSizes)),

  /** use to show loading icon on apply an action */
  isLoading: PropTypes.bool,

  /** input disabled or not */
  inputDisabled: PropTypes.bool
}

export default MoleculeDataCounter
export {inputSizes as moleculeDataCounterSizes}
