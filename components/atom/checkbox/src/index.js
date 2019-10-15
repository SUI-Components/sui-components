import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import withCheckedValue from './hoc/withCheckedValue'

const BASE_CLASS = 'sui-AtomCheckbox'

const ERROR_STATES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

const getErrorStateClass = errorState => {
  if (errorState) return `${BASE_CLASS}--${ERROR_STATES.ERROR}`
  if (errorState === false) return `${BASE_CLASS}--${ERROR_STATES.SUCCESS}`
  return ''
}

const AtomCheckbox = ({
  id,
  disabled,
  checked,
  onChange: onChangeFromProps,
  errorState,
  ...props
}) => {
  const handleChange = ev => {
    const {checked, name} = ev.target
    if (!disabled) onChangeFromProps(ev, {name, value: checked})
  }

  const className = cx(BASE_CLASS, getErrorStateClass(errorState))
  return (
    <>
      <input
        className={className}
        type="checkbox"
        id={id}
        name={id}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
    </>
  )
}

AtomCheckbox.displayName = 'AtomCheckbox'

AtomCheckbox.defaultProps = {
  checked: false
}

AtomCheckbox.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string.isRequired,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func.isRequired,

  /* Will set a red/green border if set to true/false */
  errorState: PropTypes.bool
}

export default AtomCheckbox
export {withCheckedValue}
