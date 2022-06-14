import {Children} from 'react'

export const BASE_CLASS = 'sui-OrganismNestedCheckboxes'
export const LIST_CLASS = `${BASE_CLASS}-list`
export const LIST_ITEM_CLASS = `${LIST_CLASS}Item`

export const checkItemIsChecked = ({props}) => {
  const {checked} = props
  return checked === true
}

export const getStatus = (ref, children) => {
  if (!ref.current) return {}
  // const inputs = Array.from(
  //   ref?.current.querySelectorAll('input[type="checkbox"]')
  // ).filter(
  //   element =>
  //     element.closest(`.${LIST_ITEM_CLASS}`).parentElement === ref.current
  // )
  // const checked = inputs.map(input => input.checked === true)
  return {
    checked: Children.toArray(children)?.every(checkItemIsChecked),
    indeterminate: Children.toArray(children)?.some(checkItemIsChecked)
  }
}
