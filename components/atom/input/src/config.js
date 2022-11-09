import cx from 'classnames'

export const PREFIX = 'sui'
export const CATEGORY = 'Atom'
export const COMPONENT = 'Input'

export const BASE = `${PREFIX}-${CATEGORY}${COMPONENT}`

export const BASE_CLASS_ITEM = `${BASE}-item`
export const BASE_CLASS_AREA_FOCUSABLE = `${BASE}-area-focusable`
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

export const getClassNames = ({
  size,
  charsSize,
  hideInput,
  noBorder,
  readOnly,
  errorState,
  state,
  shape
}) => {
  return cx(
    BASE_CLASS,
    size && `${BASE_CLASS}-size-${size}`,
    charsSize && `${BASE_CLASS}--charsSize`,
    hideInput && `${BASE_CLASS}--hidden`,
    noBorder && `${BASE_CLASS}--noBorder`,
    readOnly && `${BASE_CLASS}--readOnly`,
    errorState && `${BASE_CLASS}--status-${INPUT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--status-${INPUT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--status-${state}`,
    shape && `${BASE_CLASS}-shape-${shape}`
  )
}

export const isFunction = fn => typeof fn === 'function'

export const isValidSize = charSize =>
  Number.isInteger(charSize) && charSize >= 0
