import cx from 'classnames'

import {BASE_CLASS} from '../config.js'

const CLASS_FULL_WIDTH = `${BASE_CLASS}--fullWidth`

export function switchClassNames({size, color, design, fullWidth}) {
  const CLASS_TYPE = `${BASE_CLASS}--design-${design}`
  const CLASS_SIZE = `${BASE_CLASS}--size-${size}`
  const CLASS_COLOR = `${BASE_CLASS}--color-${color}`

  const className = cx(BASE_CLASS, CLASS_TYPE, CLASS_SIZE, CLASS_COLOR, {
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
