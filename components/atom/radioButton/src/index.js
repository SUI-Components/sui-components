import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS, CLASS_HIDDEN} from './settings.js'

const AtomRadioButton = forwardRef(({id, disabled, checked = false, onChange, isHidden, value, ...props}, ref) => {
  const handleChange = ev => {
    if (!disabled) {
      const {name, value, checked} = ev.target
      typeof onChange === 'function' && onChange(ev, {name, value, checked})
    }
  }

  const className = cx(BASE_CLASS, {
    [CLASS_HIDDEN]: isHidden
  })

  return (
    <input
      className={className}
      value={value}
      type="radio"
      id={id}
      disabled={disabled}
      checked={checked}
      onChange={handleChange}
      ref={ref}
      {...props}
    />
  )
})

AtomRadioButton.displayName = 'AtomRadioButton'

AtomRadioButton.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Value assigned to the radio button */
  value: PropTypes.string,

  /* If is hidden */
  isHidden: PropTypes.bool
}

export default AtomRadioButton
