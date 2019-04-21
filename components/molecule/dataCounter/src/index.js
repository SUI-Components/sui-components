import React from 'react'
import PropTypes from 'prop-types'

import AtomButton from '@schibstedspain/sui-atom-button'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import AtomLabel from '@s-ui/react-atom-label'

import {withStateValue} from '@s-ui/hoc'

const BASE_CLASS = `sui-MoleculeDataCounter`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-container`

const MoleculeDataCounter = ({
  id,
  label,
  value = 1,
  charsSize = 1,
  placeholder = '1',
  onChange
}) => {
  const incrementValue = e => {
    onChange(e, {value: value + 1})
  }

  const decrementValue = e => {
    onChange(e, {value: value - 1})
  }

  return (
    <div className={BASE_CLASS}>
      <AtomLabel name={id} text={label} />
      <div className={CLASS_INPUT_CONTAINER}>
        <AtomButton onClick={decrementValue} type="secondary">
          -
        </AtomButton>
        <AtomInput
          id={id}
          size={inputSizes.SMALL}
          charsSize={charsSize}
          placeholder={placeholder}
          value={value}
        />
        <AtomButton onClick={incrementValue} type="secondary">
          +
        </AtomButton>
      </div>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func
}

export default withStateValue(MoleculeDataCounter)
