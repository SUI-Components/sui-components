import cx from 'classnames'
import {BASE_CLASS, TYPES} from '../config'

const CLASS_ACTIVE = `${BASE_CLASS}--active`
const CLASS_FOCUS = `${BASE_CLASS}--focus`
const CLASS_CLICK = `${BASE_CLASS}--click`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

export function switchClassNames(
  size,
  type,
  classType,
  isToggle,
  isFocus,
  isClick,
  isDisabled
) {
  const CLASS_TYPE = `${BASE_CLASS}-${classType}`
  const CLASS_SIZE = `${BASE_CLASS}-${size}`

  const className = cx(BASE_CLASS, CLASS_TYPE, CLASS_SIZE, {
    [CLASS_ACTIVE]: isToggle || type === TYPES.SELECT,
    [CLASS_CLICK]: isClick,
    [CLASS_FOCUS]: isFocus && !isClick,
    [CLASS_DISABLED]: isDisabled
  })
  return className
}

export function suitClass({element, modifier, component = BASE_CLASS}) {
  let className = component
  if (element) className += `-${element}`
  if (modifier) className += `--${modifier}`
  return className
}
