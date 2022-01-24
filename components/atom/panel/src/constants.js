import cx from 'classnames'

export const COLORS = {
  CANVAS: 'canvas',
  ACCENT: 'accent',
  BASE: 'base',
  DARK: 'dark',
  CONTRAST: 'contrast',
  CORPORATE: 'corporate',
  DEFAULT: 'default',
  HIGHLIGHT: 'highlight',
  SUCCESS: 'success',
  ALERT: 'alert',
  ERROR: 'error'
}

export const ALPHA = {
  CONTRAST: '100',
  OVERLAY_D4: '75',
  OVERLAY_D3: '50',
  OVERLAY_D2: '25',
  OVERLAY_D1: '15'
}

export const BORDER_RADIUS = {
  NONE: 'none',
  M: 'm',
  L: 'l',
  XL: 'xl'
}

export const ELEVATION = {
  NONE: 'none',
  S: 's',
  M: 'm',
  L: 'l'
}

export const isImagePanel = function({src}) {
  return !!src
}

export const HORIZONTAL_ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
}

export const VERTICAL_ALIGNMENTS = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

export const DEFAULT_ALPHA = 'CONTRAST'
export const DEFAULT_COLOR = 'ACCENT'

export const getClassNames = function({color, alpha, rounded, elevation}) {
  const BASE_CLASS = 'sui-atom-panel'
  const COLOR_PANEL_CLASS = 'sui-atom-panel-color'
  return cx(
    BASE_CLASS,
    rounded !== BORDER_RADIUS.NONE && `${BASE_CLASS}--rounded-${rounded}`,
    COLOR_PANEL_CLASS,
    color && `${COLOR_PANEL_CLASS}--${color}-${alpha}`,
    elevation !== ELEVATION.NONE && `${BASE_CLASS}--elevation-${elevation}`
  )
}
