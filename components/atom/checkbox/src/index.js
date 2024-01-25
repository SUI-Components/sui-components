import {forwardRef, useRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import CheckboxIcon from './CheckboxIcon.js'
import {
  BASE_CLASS,
  CHECKBOX_SIZES,
  CHECKBOX_STATUS,
  getIcon,
  getIsNative,
  getReadOnly,
  isFunction,
  pressedValue,
  updateStatus
} from './config.js'

const AtomCheckbox = forwardRef(
  (
    {
      defaultChecked: defaultCheckedProp = false,
      checked: checkedProp,
      checkedIcon: CheckedIcon,
      uncheckedIcon: UncheckedIcon,
      disabled,
      readOnly: readOnlyProp,
      id,
      defaultIndeterminate: defaultIndeterminateProp = false,
      indeterminate: indeterminateProp,
      indeterminateIcon: IndeterminateIcon,
      icon: IconProp,
      iconSize,
      name: nameProp,
      onChange: onChangeFromProps,
      status,
      size = CHECKBOX_SIZES.MEDIUM,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const inputRef = useRef()
    const [checked, setChecked, isCheckedControlled] = useControlledState(checkedProp, defaultCheckedProp)
    const name = nameProp || id
    const [indeterminate, setIndeterminate, isIndeterminateControlled] = useControlledState(
      indeterminateProp,
      defaultIndeterminateProp
    )

    const ref = useMergeRefs(
      node =>
        updateStatus(node, {
          isChecked: checked,
          isIndeterminate: indeterminate
        }),
      inputRef,
      forwardedRef
    )
    const isControlled = isCheckedControlled || isIndeterminateControlled
    const isNative = getIsNative(
      {checked, indeterminate},
      {CheckedIcon, UncheckedIcon, IndeterminateIcon, Icon: IconProp}
    )
    const readOnlyAttributes = getReadOnly({
      readOnly: readOnlyProp,
      disabled,
      isNative
    })
    const Icon = getIcon(
      {isNative, checked, indeterminate},
      {CheckedIcon, UncheckedIcon, IndeterminateIcon, Icon: IconProp}
    )

    const handleChange = ref => event => {
      if (!disabled) {
        const {name, value} = event.target
        let newChecked = isControlled ? indeterminate || !checked : event.target.checked
        let newIndeterminate = false

        if (!isControlled) {
          setChecked(newChecked)
          setIndeterminate(newIndeterminate)
        }
        if (readOnlyProp) {
          newChecked = checked
          newIndeterminate = indeterminate
          setChecked(checked)
          setIndeterminate(indeterminate)
          event.target.indeterminate = indeterminate
        }
        isFunction(onChangeFromProps) &&
          onChangeFromProps(event, {
            name,
            value,
            checked: newChecked,
            indeterminate: newIndeterminate
          })
        ref.current.focus()
      }
    }

    const handleClick = ref => event => {
      event.preventDefault()
      event.stopPropagation()
      if (!disabled) {
        let newChecked = indeterminate || !checked
        let newIndeterminate = false
        if (!isControlled) {
          setChecked(newChecked)
          setIndeterminate(newIndeterminate)
        }
        if (readOnlyProp) {
          newChecked = checked
          newIndeterminate = indeterminate
          setChecked(checked)
          setIndeterminate(indeterminate)
          event.target.indeterminate = indeterminate
        }
        isFunction(onChangeFromProps) &&
          onChangeFromProps(event, {
            name,
            value,
            checked: newChecked,
            indeterminate: newIndeterminate
          })
        ref.current.focus()
      }
    }

    return (
      <label
        className={cx(
          BASE_CLASS,
          `${BASE_CLASS}--native-${isNative ? 'enabled' : 'disabled'}`,
          `${BASE_CLASS}--size-${size}`
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name || id}
          value={value}
          disabled={disabled}
          {...readOnlyAttributes}
          checked={checked}
          {...(Object.values(CHECKBOX_STATUS).includes(status) && {
            'data-status': status
          })}
          aria-hidden={!isNative}
          aria-checked={pressedValue({checked, indeterminate})}
          indeterminate={indeterminate ? 'true' : undefined}
          onChange={handleChange(inputRef)}
          {...props}
        />
        <CheckboxIcon
          disabled={disabled}
          size={iconSize || size}
          status={status}
          checked={checked}
          indeterminate={indeterminate}
          onClick={handleClick}
          icon={Icon}
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

  /* A read-only field cannot be modified. However, a user can tab to it, highlight it, and copy the text from it. */
  readOnly: PropTypes.bool,

  /* Mark the input as default initial selected */
  defaultChecked: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* AtomIcon when checkbox is checked */
  checkedIcon: PropTypes.elementType,

  /* AtomIcon when checkbox is unchecked */
  uncheckedIcon: PropTypes.elementType,

  /* Mark the input as default initial selected */
  defaultIndeterminate: PropTypes.bool,

  /* Mark the input as indeterminate */
  indeterminate: PropTypes.bool,

  /* AtomIcon when checkbox is intermediate */
  indeterminateIcon: PropTypes.elementType,

  /** mandatory icon shown not depending on its state. Change it depending on the checkbox state to emulate the behavior. **/
  icon: PropTypes.elementType,

  /* Determine the size of the icon. */
  iconSize: PropTypes.string,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  status: PropTypes.oneOf(Object.values(CHECKBOX_STATUS))
}

export default AtomCheckbox

export {CHECKBOX_STATUS as atomCheckboxStatus}
export {CHECKBOX_SIZES as atomCheckboxSizes}
