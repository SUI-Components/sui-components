/**
 * Base class for the component
 */
export const BASE_CLASS = 'sui-AtomTooltip'

/**
 * Class for the inner element
 */
export const CLASS_INNER = `${BASE_CLASS}-inner`

/**
 * Class for the arrow element
 */
export const CLASS_ARROW = `${BASE_CLASS}-arrow`

/**
 * Class for the preffix placement
 */
export const PREFIX_PLACEMENT = `${BASE_CLASS}-`

/**
 * Class for the target element
 */
export const CLASS_TARGET = `${BASE_CLASS}-target`

/**
 * Available colors for the tooltip
 */
export const COLORS = [
  'primary',
  'accent',
  'neutral',
  'success',
  'alert',
  'error'
]

/**
 * Available placements for the tooltip
 */
export const PLACEMENTS = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
}
