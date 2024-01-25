import cx from 'classnames'

import {BASE} from '../../../config.js'

export const BASE_CLASS_ADDON = `${BASE}--withAddon`
export const BASE_CLASS_ADDON_WRAPPER = `${BASE_CLASS_ADDON}Wrapper`
export const ADDON_TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

export const getClassName = ({type}) => cx(BASE_CLASS_ADDON, `${BASE_CLASS_ADDON}--${type}`)
