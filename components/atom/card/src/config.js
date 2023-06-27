export const BASE_CLASS = 'sui-AtomCard'
export const CLASS_MEDIA = `${BASE_CLASS}-media`
export const CLASS_INFO = `${BASE_CLASS}-info`

export const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
export const CLASS_RESPONSIVE = `${BASE_CLASS}--responsive`
export const CLASS_HIGHLIGHT = `${BASE_CLASS}--highlight`
export const CLASS_LINK = `${BASE_CLASS}-link`

export const BORDER_RADIUS = {
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl'
}

export const ELEVATION = {
  S: 's',
  M: 'm',
  L: 'l'
}

export const redirectToHref = ({href, blank}) => {
  if (href && blank) return window.open(href, '_blank')
  if (href) window.location.href = href
}
