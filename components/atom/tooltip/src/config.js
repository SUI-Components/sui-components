import {Children} from 'react'

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
export const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ACCENT: 'accent',
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  ALERT: 'alert',
  ERROR: 'error'
}

/**
 * Available trigger behaviors for tooltip
 */
export const TRIGGERS = {
  CLICK: 'click',
  FOCUS: 'focus',
  HOVER: 'hover',
  LEGACY: 'legacy',
  MANUAL: 'manual'
}

/**
 * Available placements for the tooltip
 */
export const PLACEMENTS = {
  AUTO: 'auto',
  AUTO_START: 'auto-start',
  AUTO_END: 'auto-end',
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

export const DEFAULT_OFFSET = 'auto,4px'

export const getChildrenAsReactNode = element =>
  typeof element === 'string' ? <span key={1}>{element}</span> : Children.only(element)
