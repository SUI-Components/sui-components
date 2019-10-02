import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomRadioButton'

const ERROR_STATES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

const getErrorStateClass = errorState => {
  if (errorState) return `${BASE_CLASS}--${ERROR_STATES.ERROR}`
  if (errorState === false) return `${BASE_CLASS}--${ERROR_STATES.SUCCESS}`
  return ''
}

const AtomRadioButton = ({
  id,
  disabled,
  checked,
  onChange: onChangeFromProps,
  errorState,
  value
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
        value={value}
        type="radio"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
    </Fragment>
  )
}

AtomRadioButton.displayName = 'AtomRadioButton'

AtomRadioButton.defaultProps = {
  checked: false
}

AtomRadioButton.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string.isRequired,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func.isRequired,

  /* Will set a red/green border if set to true/false */
  errorState: PropTypes.bool,

  /* Value assigned to the radio button */
  value: PropTypes.string
}

export default AtomRadioButton
