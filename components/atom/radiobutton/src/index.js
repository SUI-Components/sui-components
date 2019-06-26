import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const AtomRadiobutton = ({
  id,
  value,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const _changeHandler = ev => {
    const {
      target: {value}
    } = ev
    onChange(ev, {value})
  }

  return (
    <Fragment>
      <input
        className="react-AtomRadiobutton-input"
        type="radio"
        id={id}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={_changeHandler}
        {...props}
      />
      <label className="react-AtomRadiobutton-label" htmlFor={id}>
        {value}
      </label>
    </Fragment>
  )
}

AtomRadiobutton.displayName = 'AtomRadiobutton'

AtomRadiobutton.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string.isRequired,

  /* value of the input */
  value: PropTypes.string.isRequired,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func
}

export default AtomRadiobutton
