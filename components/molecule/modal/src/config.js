export const BASE_CLASS = 'sui-MoleculeModal'

export const SUPPORTED_KEYS = ['Escape']

export const MODAL_SIZES = {
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full'
}

export const toggleWindowScroll = disableScroll => {
  window.document.body.classList.toggle('is-MoleculeModal-open', disableScroll)
}
