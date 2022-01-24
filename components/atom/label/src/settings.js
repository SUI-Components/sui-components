import cx from 'classnames'

export const CLASSNAME = 'sui-AtomLabel'

export const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  ALERT: 'alert',
  CONTRAST: 'contrast',
  DISABLED: 'disabled'
}

export const FONT_SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
}

export const getClass = ({type, inline, fontSize}) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${fontSize}`]: fontSize,
    [`${CLASSNAME}--${type}`]: type,
    [`${CLASSNAME}--inlineLeft`]: inline === 'left',
    [`${CLASSNAME}--inlineRight`]: inline === 'right'
  })
