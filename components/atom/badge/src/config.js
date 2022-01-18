import cx from 'classnames'

export const MAX_LABEL_LENGTH = 100
export const TRANSPARENT = 'transparent'
export const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

export const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  ALERT: 'alert',
  NEW: 'new',
  NEUTRAL: 'neutral',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
}

export const DESIGNS = {
  SOLID: 'solid',
  SOFT: 'soft'
}

export const BASE_CLASS = `sui-AtomBadge`
export const CLASS_ICON = `${BASE_CLASS}-icon`
export const CLASS_ICON_RIGHT = `${CLASS_ICON}--iconRight`
export const CLASS_TEXT = `${CLASS_ICON}-text`

/**
 * Cuts off exceeded char limit
 * @param  {string} label
 * @return {string}
 */
export const truncateText = function(label) {
  return label.length < MAX_LABEL_LENGTH
    ? label
    : label.substr(0, MAX_LABEL_LENGTH)
}

/**
 * @param  {object} options
 * @param  {string} options.size
 * @param  {boolean} options.transparent
 * @param  {object} options.iconRight
 * @param  {string} options.type
 * @return {string}
 */
export const getClassNames = function({
  design,
  iconRight,
  size,
  transparent: isTransparent,
  type,
  isFitted
}) {
  return cx(
    BASE_CLASS,
    `${BASE_CLASS}-size-${size}`,
    `${BASE_CLASS}-type-${type}`,
    `${BASE_CLASS}-design-${design}`,
    {
      [`${BASE_CLASS}--isTransparent`]: isTransparent,
      [`${BASE_CLASS}--isFitted`]: isFitted,
      [CLASS_ICON_RIGHT]: iconRight
    }
  )
}

/**
 * Small badges with background can't have icon
 * @param  {Object} options
 * @param  {Object} options.icon
 * @param  {string} options.size
 * @param  {boolean} options.transparent
 * @return {boolean}
 */
export const shouldRenderIcon = ({icon, size, transparent}) =>
  Boolean(icon && (size !== SIZES.SMALL || transparent))
