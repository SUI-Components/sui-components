import cx from 'classnames'

import type {AtomLabelProps} from './index'

export const CLASSNAME = 'sui-AtomLabel'

export const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  ALERT: 'alert',
  CONTRAST: 'contrast',
  DISABLED: 'disabled'
} as const

export const FONT_SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
} as const

export const getClass = ({
  inline,
  type,
  fontSize,
  className,
  disabled
}: Pick<AtomLabelProps, 'inline' | 'type' | 'fontSize' | 'className' | 'disabled'>) =>
  cx(
    CLASSNAME,
    {
      [`${CLASSNAME}--disabled`]: Boolean(disabled),
      [`${CLASSNAME}--${fontSize as string}`]: Boolean(fontSize),
      [`${CLASSNAME}--${type as string}`]: Boolean(type),
      [`${CLASSNAME}--inlineLeft`]: inline === 'left',
      [`${CLASSNAME}--inlineRight`]: inline === 'right'
    },
    className
  )
