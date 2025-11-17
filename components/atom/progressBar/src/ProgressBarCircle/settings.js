import {BASE_CLASS, SIZES} from '../settings.js'

export const BASE_CLASS_NAME = `${BASE_CLASS}Circle`

export const INDICATOR_CLASS_NAME = `${BASE_CLASS_NAME}-indicator`

export const SIZE_TO_WIDTH_LINE_MAP = {
  [SIZES.EXTRA_LARGE]: 6,
  [SIZES.LARGE]: 4,
  [SIZES.MEDIUM]: 8,
  [SIZES.SMALL]: 8,
  [SIZES.EXTRA_SMALL]: 12
}

export const STROKE_SIZE_MAP = {
  [SIZES.LARGE]: 18,
  [SIZES.MEDIUM]: 12,
  [SIZES.SMALL]: 6,
  [SIZES.EXTRA_SMALL]: 4
}
