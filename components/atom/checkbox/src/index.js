import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCheckbox'

const AtomCheckbox = ({
  id,
  name,
  disabled,
  checked = false,
  intermediate = false,
  checkedIcon: CheckedIcon,
  intermediateIcon: IntermediateIcon,
  onChange: onChangeFromProps = () => {},
  ...props
}) => {
  const handleChange = ev => {
    const {checked, name} = ev.target
    if (!disabled) onChangeFromProps(ev, {name, value: checked})
  }

  const className = cx(BASE_CLASS, {
    'is-checked': checked,
    'is-disabled': disabled
  })

  return (
    <label className={className}>
      {checked && <CheckedIcon />}
      {intermediate && !checked && <IntermediateIcon />}
      <input
        type="checkbox"
        id={id}
        name={name || id}
        disabled={disabled}
        checked={checked}
        intermediate={intermediate ? 'intermediate' : ''}
        onChange={handleChange}
        {...props}
      />
    </label>
  )
}

AtomCheckbox.displayName = 'AtomCheckbox'

AtomCheckbox.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string.isRequired,

  /* name attribute for the input */
  name: PropTypes.string,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* AtomIcon when checkbox is checked */
  checkedIcon: PropTypes.elementType.isRequired,

  /* Mark the input as intermediate */
  intermediate: PropTypes.bool,

  /* AtomIcon when checkbox is intermediate */
  intermediateIcon: PropTypes.elementType,

  /* onChange callback */
  onChange: PropTypes.func.isRequired
}

export default AtomCheckbox
