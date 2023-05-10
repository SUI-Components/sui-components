import cx from 'classnames'

import {BASE, BASE_CLASS_ITEM} from '../../../config.js'

export const BASE_CLASS_ADDON = `${BASE}--withAddon`
export const ADDON_TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

export const getClassName = ({type}) =>
  cx(BASE_CLASS_ITEM, BASE_CLASS_ADDON, `${BASE_CLASS_ADDON}--${type}`)
