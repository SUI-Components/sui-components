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
  XL: 'xl',
  XXL: 'xxl',
  GIANT: 'giant'
}

export const ELEVATION = {
  NONE: 'none',
  S: 's',
  M: 'm',
  L: 'l'
}

export const isImagePanel = function ({src}) {
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

export const DEFAULT_ALPHA = ALPHA.CONTRAST
export const DEFAULT_COLOR = COLORS.ACCENT
export const DEFAULT_ELEVATION = ELEVATION.NONE
export const DEFAULT_BORDER_RADIUS = BORDER_RADIUS.NONE
export const DEFAULT_VERTICAL_ALIGNMENT = VERTICAL_ALIGNMENTS.CENTER
export const DEFAULT_HORIZONTAL_ALIGNMENT = HORIZONTAL_ALIGNMENTS.CENTER

const BASE_CLASS = 'sui-atom-panel'
const COLOR_PANEL_CLASS = 'sui-atom-panel-color'
const IMAGE_PANEL_CLASS = `${BASE_CLASS}-image`

export const getColorClassNames = function ({color, alpha, rounded, elevation, isFullWidth, isFullHeight, className}) {
  return cx(
    BASE_CLASS,
    COLOR_PANEL_CLASS,
    {
      [`${BASE_CLASS}--rounded-${rounded}`]: ![BORDER_RADIUS.NONE, undefined].includes(rounded),
      [`${COLOR_PANEL_CLASS}--${color}-${alpha}`]: color,
      [`${BASE_CLASS}--elevation-${elevation}`]: elevation !== ELEVATION.NONE,
      [`${BASE_CLASS}--fullWidth`]: isFullWidth,
      [`${BASE_CLASS}--fullHeight`]: isFullHeight
    },
    className
  )
}

export const getImageClassNames = function ({
  verticalAlign,
  horizontalAlign,
  resized,
  overlayColor,
  overlayAlpha = DEFAULT_ALPHA,
  color,
  rounded,
  elevation,
  isFullWidth,
  isFullHeight,
  className
}) {
  return cx(
    BASE_CLASS,
    {
      [`${BASE_CLASS}-color--${color}`]: color,
      [`${BASE_CLASS}--${overlayColor}-overlay-${overlayAlpha}`]: overlayColor,
      [`${BASE_CLASS}--elevation-${elevation}`]: elevation !== ELEVATION.NONE,
      [`${BASE_CLASS}--rounded-${rounded}`]: rounded !== BORDER_RADIUS.NONE,
      [`${BASE_CLASS}--fullWidth`]: isFullWidth,
      [`${BASE_CLASS}--fullHeight`]: isFullHeight,
      [`${IMAGE_PANEL_CLASS}--resized`]: resized,
      [`${IMAGE_PANEL_CLASS}--vertical-${verticalAlign}`]: verticalAlign,
      [`${IMAGE_PANEL_CLASS}--horizontal-${horizontalAlign}`]: horizontalAlign
    },
    className
  )
}

export const getImageStyles = function ({src, styles = {}} = {}) {
  const url = `url(${src})`
  return {
    backgroundImage: url,
    ...styles
  }
}
