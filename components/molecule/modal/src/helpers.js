import {BASE_CLASS} from './config'

export function suitClass({element, modifier, component = BASE_CLASS} = {}) {
  let className = component
  if (element) className += `-${element}`
  if (modifier) className += `--${modifier}`
  return className
}
