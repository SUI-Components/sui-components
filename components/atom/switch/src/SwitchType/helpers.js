import {BASE_CLASS, TYPES} from '../index'
import cx from 'classnames'

export function workClassNames (size, type, classType, isToggle, isFocus, isDisabled) {
  return cx(
    BASE_CLASS,
    prefixClass(classType),
    prefixClass(size),
    {
      'sui-AtomSwitch--active': (isToggle || type === TYPES.SELECT),
      'sui-AtomSwitch--focus': isFocus,
      'sui-AtomSwitch--disabled': isDisabled
    })
}

export function prefixClass (name) {
  return `${BASE_CLASS}--${name}`
}
