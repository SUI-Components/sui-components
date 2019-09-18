import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
  errorState
}) => {
  const handleChange = ev => {
    const {checked} = ev.target
    if (!disabled) onChangeFromProps(ev, {value: checked})
  }

  const className = cx(BASE_CLASS, getErrorStateClass(errorState))

  return (
    <Fragment>
      <input
        className={className}
        type="checkbox"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
    </Fragment>
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
