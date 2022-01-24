import cx from 'classnames'

export const BASE_CLASS = 'sui-AtomValidationText'

export const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  ALERT: 'alert'
}

export const getClassNames = type => cx(BASE_CLASS, `${BASE_CLASS}--${type}`)
