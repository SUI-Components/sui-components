export const BASE_CLASS = 'sui-MoleculeSelectPopover'

export const SHAPES = {
  SQUARED: 'squared',
  ROUNDED: 'rounded',
  CIRCULAR: 'circular'
}

export const SIZES = {
  MEDIUM: 'm',
  SMALL: 's',
  XSMALL: 'xs'
}

export const PLACEMENTS = {
  AUTO_END: 'auto-end',
  AUTO_START: 'auto-start',
  LEFT: 'left',
  RIGHT: 'right'
}

export const OVERLAY_TYPES = {
  DARK: 'dark',
  LIGHT: 'light',
  NONE: 'none'
}

const placements = {
  [PLACEMENTS.AUTO_START]: PLACEMENTS.LEFT,
  [PLACEMENTS.AUTO_END]: PLACEMENTS.RIGHT,
  [PLACEMENTS.LEFT]: PLACEMENTS.LEFT,
  [PLACEMENTS.RIGHT]: PLACEMENTS.RIGHT,
  [undefined]: PLACEMENTS.RIGHT
}

export const getPlacement = placement => {
  return placements[placement]
}

export const getContentId = id => `content-${id}`
export const getLabelId = id => `label-${id}`
