import {useRef, forwardRef, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {
  BASE_CLASS,
  CHECKBOX_STATUS,
  CHECKBOX_SIZES,
  updateStatus
} from './config.js'

const AtomCheckbox = forwardRef(
  (
    {
      checked: checkedProp = false,
      checkedIcon: CheckedIcon,
      disabled,
      id,
      indeterminate: indeterminateProp = false,
      indeterminateIcon: IndeterminateIcon,
      isNative: isNativeProp = false,
      name,
      onChange: onChangeFromProps,
      status,
      size = CHECKBOX_SIZES.MEDIUM,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const inputRef = useRef()
    const [{checked, indeterminate}, setStatus] = useState({
      checked: checkedProp,
      indeterminate: indeterminateProp
    })
    const ref = useMergeRefs(
      node =>
        updateStatus(
          node,
          {isChecked: checkedProp, isIndeterminate: indeterminateProp},
          setStatus
        ),
      inputRef,
      forwardedRef
    )
    const hasNotCustomIcons = !CheckedIcon && !IndeterminateIcon
    const isNative = isNativeProp || hasNotCustomIcons

    const handleChange = ev => {
      const {name, value} = ev.target
      if (!disabled && typeof onChangeFromProps === 'function')
        onChangeFromProps(ev, {name, value, checked: !checked, indeterminate})
    }

    const className = cx(BASE_CLASS, {
      [`${BASE_CLASS}--${size}`]: Object.values(CHECKBOX_SIZES).includes(size),
      'is-checked': checked,
      'is-disabled': disabled,
      'is-indeterminate': indeterminate,
      [`${BASE_CLASS}--native`]: isNative,
      [`${BASE_CLASS}--status-${status}`]:
        Object.values(CHECKBOX_STATUS).includes(status)
    })

    return (
      <label className={className}>
        {!isNative && checked && <CheckedIcon />}
        {!isNative && indeterminate && <IndeterminateIcon />}
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name || id}
          value={value}
          disabled={disabled}
          checked={checked}
          indeterminate={indeterminate ? 'true' : undefined}
          onChange={handleChange}
          {...props}
        />
      </label>
    )
  }
)

AtomCheckbox.displayName = 'AtomCheckbox'

AtomCheckbox.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string,

  /* Determine the size of the checkbox. (default: CHECKBOX_SIZES.MEDIUM) */
  size: PropTypes.string,

  /**
   * Defines the value associated with the button's name when it's submitted with the form data.
   * This value is passed to the server in params when the form is submitted using this button.
   */
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /* Name attribute for the input */
  name: PropTypes.string,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* AtomIcon when checkbox is checked */
  checkedIcon: PropTypes.elementType,

  /* Mark the input as indeterminate */
  indeterminate: PropTypes.bool,

  /* AtomIcon when checkbox is intermediate */
  indeterminateIcon: PropTypes.elementType,

  /* Uses browser's native look and feel instead of custom icons */
  isNative: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  status: PropTypes.oneOf(Object.values(CHECKBOX_STATUS))
}

export default AtomCheckbox

export {CHECKBOX_STATUS as atomCheckboxStatus}
export {CHECKBOX_SIZES as atomCheckboxSizes}
