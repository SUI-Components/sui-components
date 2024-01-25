/**
 * Base class for the component
 */
export const BASE_CLASS = 'sui-AtomActionButton'

/**
 * Available colors for the Action Button
 */
export const COLORS = {PRIMARY: 'primary', ACCENT: 'accent', NEUTRAL: 'neutral'}

/**
 * Available modifiers for the Action Button
 */
export const MODIFIERS = {
  ACTIVE_FOCUSED: 'active',
  DISABLED: 'disabled',
  LINK: 'link'
}

/**
 * Available sizes for the Action Button
 */
export const SIZES = {SMALL: 'small', MEDIUM: 'medium', LARGE: 'large'}

/**
 * Available styles for the Action Button
 */
export const STYLES = {
  FILLED_NEGATIVE: 'filledNegative',
  FILLED_POSITIVE: 'filledPositive',
  OUTLINE: 'outline',
  FLAT: 'flat'
}

export const createClasses = (array, sufix = '') =>
  array.reduce((res, key) => ({...res, [key]: `${BASE_CLASS}--${key}${sufix}`}), {})

export const CLASSES = createClasses([...Object.values(SIZES), ...Object.values(STYLES), ...Object.values(MODIFIERS)])

export const COLOR_CLASSES = createClasses([...Object.values(COLORS)], 'Color')
