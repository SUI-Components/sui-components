import cx from 'classnames'

export const PREFIX = 'sui'
export const CATEGORY = 'Atom'
export const COMPONENT = 'Input'

export const BASE = `${PREFIX}-${CATEGORY}${COMPONENT}`

export const BASE_CLASS = `${BASE}-input`

// Enums
export const TYPES = {
  DATE: 'date',
  EMAIL: 'email',
  MASK: 'mask',
  NONE: 'none',
  NUMBER: 'number',
  PASSWORD: 'password',
  SEARCH: 'search',
  SUI_PASSWORD: 'sui-password',
  TEL: 'tel',
  TEXT: 'text'
}

export const SIZES = {
  XLARGE: 'xl',
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

export const INPUT_SHAPES = {
  ROUNDED: 'rounded',
  SQUARE: 'square',
  CIRCLE: 'circle'
}

export const noop = () => null

export const isFunction = fn => typeof fn === 'function'

export const getClassNames = ({
  size,
  charsSize,
  hideInput,
  noBorder,
  readOnly,
  errorState,
  state,
  shape,
  className
}) => {
  return cx(
    BASE_CLASS,
    size && `${BASE_CLASS}-size-${size}`,
    charsSize && `${BASE_CLASS}--charsSize`,
    hideInput && `${BASE_CLASS}--hidden`,
    noBorder && `${BASE_CLASS}--noBorder`,
    readOnly && `${BASE_CLASS}--readOnly`,
    errorState && `${BASE_CLASS}--state-${INPUT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--state-${INPUT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--state-${state}`,
    shape && `${BASE_CLASS}-shape-${shape}`,
    className
  )
}
