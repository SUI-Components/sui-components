import {
  IconStarFilled,
  IconStarHalfFilled,
  IconStarOutline
} from '../Icons/index.js'
import {BASE_CLASS as ROOT_BASE_CLASS} from '../settings.js'

export const BASE_CLASS = `${ROOT_BASE_CLASS}-Star`

export const DEFAULTS_STAR = {
  value: 0,
  fullValue: 1,
  halfValue: 0.5,
  IconStarFilled,
  IconStarHalfFilled,
  IconStarEmpty: IconStarOutline
}

export const DEFAULTS_STAR_HOVER = {
  ratingValues: [1, 2, 3, 4, 5],
  IconStarEmpty: IconStarOutline
}
