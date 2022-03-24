import cx from 'classnames'

import {BASE_CLASS, TYPES} from '../config.js'

const CLASS_CHECKED = `${BASE_CLASS}--checked`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`
const CLASS_FULL_WIDTH = `${BASE_CLASS}--fullWidth`

export function switchClassNames(
  size,
  type,
  classType,
  isToggle,
  isDisabled,
  fullWidth
) {
  const CLASS_TYPE = `${BASE_CLASS}-${classType}`
  const CLASS_SIZE = `${BASE_CLASS}--${size}`

  const className = cx(BASE_CLASS, CLASS_TYPE, CLASS_SIZE, {
    [CLASS_CHECKED]: isToggle || type === TYPES.SELECT,
    [CLASS_DISABLED]: isDisabled,
    [CLASS_FULL_WIDTH]: fullWidth
  })
  return className
}

export function suitClass({element, modifier, component = BASE_CLASS}) {
  let className = component
  if (element) className += `-${element}`
  if (modifier) className += `--${modifier}`
  return className
}
