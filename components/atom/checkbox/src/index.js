import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const AtomCheckbox = ({id, value, disabled, checked, onChange, ...props}) => {
  const _changeHandler = ev => {
    const {
      target: {value}
    } = ev
    onChange(ev, {value})
  }

  return (
    <Fragment>
      <input
        className="react-AtomCheckbox-input"
        type="checkbox"
        id={id}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={_changeHandler}
        {...props}
      />
      <label className="react-AtomCheckbox-label" htmlFor={id}>
        {value}
      </label>
    </Fragment>
  )
}

AtomCheckbox.displayName = 'AtomCheckbox'

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
  onChange: PropTypes.func
}

export default AtomCheckbox
