export const SIZES = {
  XXSMALL: 'xxsmall',
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
}
export const BASE_CLASSNAME = 'sui-PinInput'
export const STATUS = {ERROR: 'error', UNDEFINED: 'undefined', FOCUS: 'focus'}
export const MASK = {
  NUMBER: '[0-9]',
  ALPHABETIC: '[A-Za-z]',
  ALPHANUMERIC: '[A-Za-z0-9]'
}

export const valueChecker = ({length = 1, mask}) => value => {
  const matchExpression = `${mask}{${length}}`
  const regex = new RegExp(matchExpression)
  return regex.test(value)
}

export const triggerInputChange = (node, inputValue) => {
  const descriptor = Object.getOwnPropertyDescriptor(node, 'value')

  node.value = `${inputValue}#`
  if (descriptor && descriptor.configurable) {
    delete node.value
  }
  node.value = inputValue

  const e = document.createEvent('HTMLEvents')
  e.initEvent('change', true, false)
  node.dispatchEvent(e)

  if (descriptor) {
    Object.defineProperty(node, 'value', descriptor)
  }
}
