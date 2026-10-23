import {BASE} from '../../../config.js'

export const ICON_TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

export const BASE_CLASS_ICON = `${BASE}--withIcon`
export const BASE_CLASS_ICON_LEFT = `${BASE_CLASS_ICON}--${ICON_TYPES.LEFT}`
export const BASE_CLASS_ICON_RIGHT = `${BASE_CLASS_ICON}--${ICON_TYPES.RIGHT}`
export const BASE_CLASS_ICON_COMPONENT = `${BASE_CLASS_ICON}-icon`
export const BASE_CLASS_ICON_BUTTON = `${BASE_CLASS_ICON}-button`
export const BASE_CLASS_ICON_BUTTON_CONTAINER = `${BASE_CLASS_ICON}-button-container`
export const BASE_CLASS_ICON_COMPONENT_LEFT = `${BASE_CLASS_ICON_COMPONENT}--${ICON_TYPES.LEFT}`
export const BASE_CLASS_ICON_COMPONENT_RIGHT = `${BASE_CLASS_ICON_COMPONENT}--${ICON_TYPES.RIGHT}`
