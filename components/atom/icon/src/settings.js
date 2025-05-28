export const BASE_CLASS = 'sui-AtomIcon'

export const ATOM_ICON_COLORS = {
  accent: 'accent',
  alert: 'alert',
  currentColor: 'currentColor',
  error: 'error',
  primary: 'primary',
  success: 'success',
  gray: 'gray'
}

export const ATOM_ICON_SIZES = {
  extraSmall: 'extraSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extraLarge',
  extraExtraLarge: 'extraExtraLarge'
}

export const ATOM_ICON_SHAPES = {
  SQUARED: 'squared',
  ROUNDED: 'rounded',
  CIRCULAR: 'circular'
}

export const ATOM_ICON_RENDERS = {
  eager: 'eager',
  lazy: 'lazy'
}

export const IMG_ROLE = 'img'

export const getAttributes = title =>
  title
    ? {
        role: IMG_ROLE,
        'aria-label': title
      }
    : {}
