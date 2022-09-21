import {BASE, BASE_CLASS_ITEM, BASE_CLASS_AREA_FOCUSABLE} from '../../../config.js'

export const ICON_TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

export {BASE_CLASS_ITEM, BASE_CLASS_AREA_FOCUSABLE}
export const BASE_CLASS_ICON = `${BASE}--withIcon`
export const BASE_CLASS_ICON_COMPONENT = `${BASE_CLASS_ICON}-icon`
export const BASE_CLASS_ICON_CONTENT_COMPONENT = `${BASE_CLASS_ICON_COMPONENT}--content`
export const BASE_CLASS_ICON_COMPONENT_HANDLER = `${BASE_CLASS_ICON_COMPONENT}--withHandler`
export const BASE_CLASS_ICON_COMPONENT_LEFT = `${BASE_CLASS_ICON_COMPONENT}--${ICON_TYPES.LEFT}`
export const BASE_CLASS_ICON_COMPONENT_RIGHT = `${BASE_CLASS_ICON_COMPONENT}--${ICON_TYPES.RIGHT}`
