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

export const valueChecker = ({length = 1, mask}) => (value = '') => {
  if (length === 0 && value === '') return true
  if (value.length !== length) return false
  const matchExpression = `${mask}{${length}}`
  const regex = new RegExp(matchExpression)
  return regex.test(value)
}

export const getValueType = ({value, defaultValue}) => {
  let valueType
  if (typeof value === 'string') {
    valueType = typeof value
  } else if (typeof value === 'object' && value instanceof Array) {
    valueType = 'array'
  } else if (typeof defaultValue === 'string') {
    valueType = typeof defaultValue
  } else if (
    typeof defaultValue === 'object' &&
    defaultValue instanceof Array
  ) {
    valueType = 'array'
  } else {
    valueType = 'string'
  }
  return valueType
}
