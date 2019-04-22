import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomButton from '@schibstedspain/sui-atom-button'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import MoleculeField from '@s-ui/react-molecule-field'

import {withStateValue} from '@s-ui/hoc'

const BASE_CLASS = `sui-MoleculeDataCounter`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

const MoleculeDataCounter = ({
  id,
  label,
  value,
  size = inputSizes.MEDIUM,
  charsSize = 2,
  placeholder = '1',
  max = 99,
  min = 1,
  minValueHelpText = 'Minimum Value',
  maxValueHelpText = 'Maximum Value',
  onChange,
  disabled
}) => {
  value = value || min

  const isBelowMaxValue = value < max
  const isOverMinValue = value > min
  const isMaxValue = value === max
  const isMinValue = value === min

  const incrementValue = e => {
    if (isBelowMaxValue) onChange(e, {value: value + 1})
  }

  const decrementValue = e => {
    if (isOverMinValue) onChange(e, {value: value - 1})
  }

  const handleKeyDown = e => {
    const {key} = e
    if (key === 'ArrowUp') incrementValue(e)
    if (key === 'ArrowDown') decrementValue(e)
  }

  let helpText
  if (!disabled) {
    if (isMaxValue && maxValueHelpText) helpText = maxValueHelpText
    if (isMinValue && minValueHelpText) helpText = minValueHelpText
  }

  return (
    <div className={BASE_CLASS}>
      <MoleculeField name={id} label={label} helpText={helpText}>
        <div
          className={cx(
            CLASS_INPUT_CONTAINER,
            `${CLASS_INPUT_CONTAINER}--${size}`
          )}
        >
          <AtomButton
            disabled={disabled || value === min}
            onClick={decrementValue}
            type="secondary"
          >
            -
          </AtomButton>
          <AtomInput
            id={id}
            disabled={disabled}
            size={size}
            charsSize={charsSize}
            placeholder={placeholder}
            value={value}
            onKeyDown={handleKeyDown}
          />
          <AtomButton
            disabled={disabled || value === max}
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

  /** A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. */
  placeholder: PropTypes.string,

  /** width of input based in number of characters (native "size" attribute) */
  charsSize: PropTypes.number,

  /** value of the control */
  value: PropTypes.number,

  /** max value allowed */
  max: PropTypes.number,

  /** min value allowed */
  min: PropTypes.number,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* HelpText to be displayed when value reaches minimun value */
  minValueHelpText: PropTypes.string,

  /* HelpText to be displayed when value reaches maximum value */
  maxValueHelpText: PropTypes.string,

  /* component disabled or not */
  disabled: PropTypes.bool,

  /** 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(inputSizes))
}

export default withStateValue(MoleculeDataCounter)
export {inputSizes as moleculeDataCounterSizes}
