export const BASE_CLASS = 'sui-OrganismNestedCheckboxes'
export const CONTAINER_CLASS = `${BASE_CLASS}Container`
export const CHILD_CLASS = `${BASE_CLASS}Child`
export const BUTTON_CLASS = `${BASE_CLASS}Button`

export const checkItemIsChecked = ({checked}) => checked === true

export const isFunction = fn => typeof fn === 'function'

export const getInnerCheckboxes = (node, {checked, indeterminate}) => {
  const checkboxes = Array.from(node.querySelectorAll("input[type='checkbox']"))
  let isChecked = checked
  let isIndeterminate = indeterminate
  if (checkboxes.length) {
    isChecked = checkboxes.every(checkItemIsChecked)
    isIndeterminate = !isChecked && checkboxes.some(checkItemIsChecked)
  }
  return [checkboxes, {checked: isChecked, indeterminate: isIndeterminate}]
}
