export const BASE_CLASS = 'sui-AtomCheckbox'

export const CHECKBOX_STATUS = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const CHECKBOX_SIZES = {SMALL: 'small', MEDIUM: 'medium'}

export const updateStatus = (
  element,
  {isIndeterminate = false, isChecked = false},
  setter
) => {
  if (!element) {
    return
  }
  const {checked, indeterminate} = element
  if (isChecked !== checked) {
    element.checked = isChecked
    element.indeterminate = isChecked ? false : isIndeterminate
    setter({
      checked: isChecked,
      indeterminate: isChecked ? false : isIndeterminate
    })
  } else if (isIndeterminate !== indeterminate) {
    element.indeterminate = isChecked ? false : isIndeterminate
    element.checked = false
    setter({
      checked: false,
      indeterminate: isChecked ? false : isIndeterminate
    })
    return
  }
  return undefined
}
