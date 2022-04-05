export const BASE_CLASSNAME = 'sui-PinInput'

export const SIZES = {
  XXSMALL: 'xxsmall',
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
}
export const STATUS = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}
export const MASK = {
  NUMBER: '[0-9]',
  ALPHABETIC: '[A-Za-z]',
  ALPHANUMERIC: '[A-Za-z0-9]'
}

export const valueChecker =
  ({length = 1, mask}) =>
  (value = '') => {
    if (length === 0 && value === '') return true
    if (value.length !== length) return false
    const matchExpression = `${mask}{${length}}`
    const regex = new RegExp(matchExpression)
    return regex.test(value)
  }

export const getValueType = ({value, defaultValue}) => {
  const val = value || defaultValue
  let valueType = typeof val
  if (typeof val === 'object' && val instanceof Array) {
    valueType = 'array'
  }
  return valueType
}
