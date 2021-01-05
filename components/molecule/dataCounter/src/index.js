import {useState, useEffect, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomButton, {atomButtonSizes} from '@s-ui/react-atom-button'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import MoleculeField from '@s-ui/react-molecule-field'

import {ACTIONS} from './config'

const BUTTON_TYPE = 'secondary'

const BASE_CLASS = `sui-MoleculeDataCounter`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

const MoleculeDataCounter = forwardRef(
  (
    {
      addIcon = '+',
      charsSize,
      disabled,
      errorText: errorTextProps,
      id,
      inputDisabled = false,
      isLoading = false,
      label,
      max = 100,
      maxValueErrorText,
      maxValueHelpText,
      min = 0,
      minValueErrorText,
      minValueHelpText,
      onChange,
      size = inputSizes.MEDIUM,
      substractIcon = '-',
      initialValue,
      value
    },
    ref
  ) => {
    let initialStateValue

    const numMax = Number(max)
    const numMin = Number(min)

    if (value !== undefined) {
      initialStateValue = Number(value)
    } else if (initialValue !== undefined) {
      initialStateValue = Number(initialValue)
    } else {
      initialStateValue = Math.trunc((numMax - numMin) / 2)
    }

    const [lastAction, setLastActions] = useState()
    const [internalValue, setInternalValue] = useState(initialStateValue)

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(Number(value))
      }
    }, [value])

    const isMaxValue = (number = internalValue) => number === numMax
    const isMinValue = (number = internalValue) => number === numMin
    const isLowerThanMinValue = (number = internalValue) => number < numMin
    const isHigherThanMaxValue = (number = internalValue) => number > numMax

    const decrementDisabled = disabled || internalValue <= numMin
    const incrementDisabled = disabled || internalValue >= numMax

    const assignValue = (event, {newValue, lastAction}) => {
      if (value === undefined) {
        // uncontrolled component
        setInternalValue(newValue)
      }
      if (lastAction) {
        setLastActions(lastAction)
      }
      if (typeof onChange === 'function') {
        onChange(event, {value: String(newValue), action: lastAction})
      }
    }

    const incrementValue = event => {
      let newValue = internalValue + 1
      if (isHigherThanMaxValue(newValue)) {
        newValue = internalValue
      }
      assignValue(event, {newValue, lastAction: ACTIONS.MORE})
    }

    const decrementValue = event => {
      let newValue = internalValue - 1
      if (isLowerThanMinValue(newValue)) {
        newValue = internalValue
      }
      assignValue(event, {newValue, lastAction: ACTIONS.LESS})
    }

    const handleChange = (event, {value}) => {
      const newValue = parseInt(value, 10)
      assignValue(event, {
        newValue: isNaN(newValue) ? '' : newValue,
        lastAction: ACTIONS.CHANGE
      })
    }

    const handleKeyDown = event => {
      const {key} = event
      if (key === 'ArrowUp') incrementValue(event)
      if (key === 'ArrowDown') decrementValue(event)
    }

    let helpText, errorText
    if (!disabled) {
      if (isMaxValue()) helpText = maxValueHelpText
      else if (isMinValue()) helpText = minValueHelpText
      else helpText = null

      if (isLowerThanMinValue()) errorText = minValueErrorText
      else if (isHigherThanMaxValue()) errorText = maxValueErrorText
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
              {substractIcon}
            </AtomButton>
            <AtomInput
              ref={ref}
              charsSize={
                charsSize || internalValue.toString().length <= 2
                  ? 2
                  : internalValue.toString().length
              }
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
              {addIcon}
            </AtomButton>
          </div>
        </MoleculeField>
      </div>
    )
  }
)

MoleculeDataCounter.displayName = 'MoleculeDataCounter'

MoleculeDataCounter.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string,

  /** width of input based in number of characters (native "size" attribute) */
  charsSize: PropTypes.number.isRequired,

  /** text to display in case of error */
  errorText: PropTypes.string,

  /** value of the control */
  value: PropTypes.number,

  /** initial value of the control */
  initialValue: PropTypes.number,

  /** max value allowed */
  max: PropTypes.number,

  /** min value allowed */
  min: PropTypes.number,

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
  inputDisabled: PropTypes.bool,

  /** Icon to show on add button */
  addIcon: PropTypes.node,

  /** Icon to show on substract button */
  substractIcon: PropTypes.node
}

export default MoleculeDataCounter
export {inputSizes as moleculeDataCounterSizes}
