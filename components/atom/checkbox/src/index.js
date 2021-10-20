import {useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCheckbox'

const CHECKBOX_STATUS = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}
const CHECKBOX_SIZES = {SMALL: 'small', MEDIUM: 'medium'}

const AtomCheckbox = ({
  checked = false,
  checkedIcon: CheckedIcon,
  disabled,
  id,
  intermediate = false,
  intermediateIcon: IntermediateIcon,
  isNative: isNativeProp = false,
  name,
  onChange: onChangeFromProps = () => {},
  status,
  size = CHECKBOX_SIZES.MEDIUM,
  ...props
}) => {
  const inputRef = useRef()
  const hasNotCustomIcons = !CheckedIcon && !IntermediateIcon
  const isNative = isNativeProp || hasNotCustomIcons
  const isIntermediate = intermediate && !checked

  const updateNativeIndeterminate = () => {
    inputRef.current && (inputRef.current.indeterminate = isIntermediate)
  }

  const handleChange = ev => {
    // Handler doesn't necessarily trigger render, but browser could still set
    // native indeterminate property which may end up in a mismatch between it
    // and the component's prop, so native value should be kept updated here.
    updateNativeIndeterminate()

    const {checked, name} = ev.target
    if (!disabled) onChangeFromProps(ev, {name, value: checked})
  }

  const className = cx(BASE_CLASS, {
    [`${BASE_CLASS}--${size}`]: Object.values(CHECKBOX_SIZES).includes(size),
    'is-checked': checked,
    'is-disabled': disabled,
    'is-intermediate': isIntermediate,
    [`${BASE_CLASS}--native`]: isNative,
    [`${BASE_CLASS}--status-${status}`]: Object.values(
      CHECKBOX_STATUS
    ).includes(status)
  })

  // Keep native indeterminate property updated every render
  updateNativeIndeterminate()

  return (
    <label className={className}>
      {!isNative && checked && <CheckedIcon />}
      {!isNative && isIntermediate && <IntermediateIcon />}
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        name={name || id}
        disabled={disabled}
        checked={checked}
        intermediate={isIntermediate ? 'intermediate' : ''}
        onChange={handleChange}
        {...props}
      />
    </label>
  )
}

AtomCheckbox.displayName = 'AtomCheckbox'

AtomCheckbox.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string,

  /* Determine the size of the checkbox. (default: CHECKBOX_SIZES.MEDIUM) */
  size: PropTypes.string,

  /* Name attribute for the input */
  name: PropTypes.string,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* AtomIcon when checkbox is checked */
  checkedIcon: PropTypes.elementType,

  /* Mark the input as intermediate */
  intermediate: PropTypes.bool,

  /* AtomIcon when checkbox is intermediate */
  intermediateIcon: PropTypes.elementType,

  /* Uses browser's native look and feel instead of custom icons */
  isNative: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  status: PropTypes.oneOf(Object.values(CHECKBOX_STATUS))
}

export default AtomCheckbox
export {CHECKBOX_STATUS as checkboxStatus}
export {CHECKBOX_SIZES as checkboxSizes}
