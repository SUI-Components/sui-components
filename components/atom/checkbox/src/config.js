import cx from 'classnames'

export const BASE_CLASS = 'sui-AtomCheckbox'
export const CLASS_ICON = 'sui-AtomCheckbox--Icon'

export const CHECKBOX_STATUS = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const CHECKBOX_SIZES = {SMALL: 'small', MEDIUM: 'medium'}

export const className = ({size, checked, disabled, indeterminate}) =>
  cx(CLASS_ICON, {
    [`${CLASS_ICON}--${size}`]: Object.values(CHECKBOX_SIZES).includes(size),
    'is-checked': checked,
    'is-disabled': disabled,
    'is-indeterminate': indeterminate
  })

export const pressedValue = ({checked, indeterminate}) => {
  if (checked) {
    return 'true'
  } else if (indeterminate) {
    return 'mixed'
  }
  return 'false'
}

export const getIsNative = (
  {checked, indeterminate},
  {CheckedIcon, UncheckedIcon, IndeterminateIcon, Icon}
) => {
  if (checked && !CheckedIcon && !Icon) return true
  else if (!checked && indeterminate && !IndeterminateIcon && !Icon) return true
  else if (!checked && !indeterminate && !UncheckedIcon && !Icon) return true
  return false
}

export const getReadOnly = ({readOnly, disabled, isNative}) => {
  if (disabled) return {}
  else if (readOnly && isNative) {
    return {readOnly: true}
  } else if (!isNative) {
    return {readOnly: true}
  }
  return {}
}

export const getIcon = (
  {isNative, checked, indeterminate},
  {CheckedIcon, UncheckedIcon, IndeterminateIcon, Icon}
) => {
  if (isNative) {
    return null
  }
  let ResultingIcon = Icon || CheckedIcon
  if (!checked) {
    if (indeterminate) {
      ResultingIcon = Icon || IndeterminateIcon
    } else {
      ResultingIcon = Icon || UncheckedIcon
    }
  }
  return ResultingIcon
}

export const updateStatus = (
  element,
  {isIndeterminate = false, isChecked = false}
) => {
  if (!element) {
    return
  }
  const {indeterminate} = element
  if (isIndeterminate !== indeterminate) {
    element.indeterminate = isChecked ? false : isIndeterminate
    return
  }
  return undefined
}

export const isFunction = fn => typeof fn === 'function'
