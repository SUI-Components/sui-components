import cx from 'classnames'

export const PREFIX = 'sui'
export const CATEGORY = 'Atom'
export const COMPONENT = 'Input'

export const BASE = `${PREFIX}-${CATEGORY}${COMPONENT}`

export const BASE_CLASS = `${BASE}-input`

// Enums
export const TYPES = {
  DATE: 'date',
  MASK: 'mask',
  NUMBER: 'number',
  PASSWORD: 'password',
  SUI_PASSWORD: 'sui-password',
  TEXT: 'text',
  TEL: 'tel',
  EMAIL: 'email'
}

export const SIZES = {
  LARGE: 'l',
  MEDIUM: 'm',
  SMALL: 's',
  XSMALL: 'xs'
}

export const INPUT_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const noop = () => null

export const getClassNames = ({
  size,
  charsSize,
  hideInput,
  noBorder,
  readOnly,
  errorState,
  state
}) => {
  return cx(
    BASE_CLASS,
    `${BASE_CLASS}-${size}`,
    charsSize && `${BASE_CLASS}--size`,
    hideInput && `${BASE_CLASS}--hidden`,
    noBorder && `${BASE_CLASS}--noBorder`,
    readOnly && `${BASE_CLASS}--readOnly`,
    errorState && `${BASE_CLASS}--${INPUT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${INPUT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--${state}`
  )
}
