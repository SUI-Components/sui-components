import loadable from '@loadable/component'

export const TRIGGERS = {
  CLICK: 'click',
  FOCUS: 'focus',
  HOVER: 'hover',
  LEGACY: 'legacy',
  MANUAL: 'manual'
}

export const BASE_CLASS = 'sui-AtomPopover'
export const CLASS_INNER = `${BASE_CLASS}-inner`
export const PREFIX_PLACEMENT = `${BASE_CLASS}-`
export const DEFAULT_OFFSET = 'auto,4px'
export const DEFAULT_TRIGGER = TRIGGERS.LEGACY
export const DEFAULT_DELAY = 0

// https://github.com/reactstrap/reactstrap/blob/8.9.0/src/Popover.js
export const Popover = loadable(() => import('reactstrap/lib/Popover'), {
  ssr: true
})

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
