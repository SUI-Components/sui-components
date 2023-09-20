import cx from 'classnames'

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

export const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

export const OVERLAY_TYPES = {
  ACCENT: 'accent',
  DARK: 'dark',
  LIGHT: 'light',
  PRIMARY: 'primary',
  TRANSPARENT: 'transparent'
}

export const DELAY = 500 // ms
export const BASE_CLASS = 'sui-AtomSpinner'
export const CLASS_FULL = `${BASE_CLASS}--fullPage`

export const getParentClassName = ({overlayType, size, type}) =>
  cx(
    `${BASE_CLASS}--${overlayType}`,
    `${BASE_CLASS}--${overlayType}-${size}`,
    `${BASE_CLASS}--${size}`,
    {
      [BASE_CLASS]: type === TYPES.SECTION,
      [CLASS_FULL]: type === TYPES.FULL
    }
  )

export const addParentClass = parentNodeClassList => parentClassName =>
  parentNodeClassList.add(...parentClassName.split(' '))
export const removeParentClass = parentNodeClassList => parentClassName =>
  parentNodeClassList.remove(...parentClassName.split(' '))
