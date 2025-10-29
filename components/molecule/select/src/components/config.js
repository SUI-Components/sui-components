import cx from 'classnames'

import {BASE_CLASS as ROOT_BASE_CLASS} from '../config.js'

export const BASE_CLASS = `${ROOT_BASE_CLASS}-inputSelect`
const CLASS_SEARCH = `${BASE_CLASS}-search`
export const CLASS_SEARCH_CONTAINER = `${BASE_CLASS}-search-container`
export const getClassSearch = isOpen =>
  cx(CLASS_SEARCH, {
    [`${CLASS_SEARCH}--hidden`]: !isOpen
  })
export const CLASS_CONTAINER = `${BASE_CLASS}-container`
export const CLASS_ARROW = `${BASE_CLASS}-arrow`
export const CLASS_ARROW_DOWN = `${CLASS_ARROW}--down`
export const CLASS_ARROW_UP = `${CLASS_ARROW}--up`
export const CLASS_ARROW_DISABLED = `${CLASS_ARROW}--disabled`
