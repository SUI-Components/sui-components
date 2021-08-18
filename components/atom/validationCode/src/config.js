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

export const arrowKeysEventHandlingMapper = {
  ArrowLeft: ({index, setter, elements}) => {
    const newIndex = index - 1
    setter(newIndex)
    elements[newIndex].focus()
    elements[newIndex].select()
  },
  ArrowRight: ({index, setter, elements}) => {
    const newIndex = index + 1
    setter(newIndex)
    elements[newIndex].focus()
    elements[newIndex].select()
  }
}
