export const BASE_CLASS = 'sui-AtomCard'
export const BASE_CLASS_WRAPPER = `${BASE_CLASS}-Wrapper`
export const BASE_CLASS_CONTAINER = `${BASE_CLASS}-Container`
export const BASE_CLASS_CONTAINER_CONTENT = `${BASE_CLASS}-Container-Content`
export const BASE_CLASS_PANEL = `${BASE_CLASS}-Panel`
export const CLASS_MEDIA = `${BASE_CLASS}-media`
export const CLASS_INFO = `${BASE_CLASS}-info`

export const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
export const CLASS_RESPONSIVE = `${BASE_CLASS}--responsive`
export const CLASS_HIGHLIGHT = `${BASE_CLASS}--highlight`
export const CLASS_LINK = `${BASE_CLASS}-link`

export const CORNER_SIZE = {
  NONE: 'none',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
  XXXL: 'xxxl'
}

export const BORDER_RADIUS = Object.freeze(CORNER_SIZE)

export const ELEVATION = {
  XL: 'xl',
  L: 'l',
  M: 'm',
  S: 's',
  XS: 'xs',
  NONE: 'none',
  '-XS': '-xs',
  '-S': '-s',
  '-M': '-m',
  '-L': '-l',
  '-XL': '-xl'
}

export const redirectToHref = ({href, blank}) => {
  if (href && blank) return window.open(href, '_blank')
  if (href) window.location.href = href
}

export const DESIGN = {
  FILLED: 'filled',
  TINTED: 'tinted',
  OUTLINED: 'outlined',
  DASHED: 'dashed',
  GHOSTED: 'ghosted',
  GLASSED: 'glassed'
}

export const COLOR = {
  SURFACE: 'surface',
  PRIMARY: 'primary',
  ACCENT: 'accent',
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  ALERT: 'alert',
  ERROR: 'error'
}
