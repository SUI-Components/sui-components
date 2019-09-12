import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomCheckbox'
const CLASS_LABEL = `${BASE_CLASS}-label`

const AtomCheckbox = ({id, value, disabled, checked, onChange, label}) => {
  const handleChange = ev => {
    onChange(ev, {value: ev.target.value})
  }

  return (
    <Fragment>
      <input
        className={BASE_CLASS}
        type="checkbox"
        id={id}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      <label className={CLASS_LABEL} htmlFor={id}>
        {label}
      </label>
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

  /* value of the checkbox */
  value: PropTypes.string.isRequired,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func.isRequired,

  /* label to be displayed for that option */
  label: PropTypes.string.isRequired
}

export default AtomCheckbox
