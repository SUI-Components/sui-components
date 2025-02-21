import {filterKeys} from './helpers.js'

export const ACTIONABLE_ONLY_PROPS = [
  'href',
  'iconPlacement',
  'target',
  'actionable',
  'linkFactory',
  'rel',
  'pressed',
  'defaultPressed'
]

export const STANDARD_ONLY_PROPS = ['closeIcon', 'onClose', 'closeLabel']

export const SIZES = {
  XLARGE: 'xl',
  LARGE: 'l',
  MEDIUM: 'm',
  SMALL: 's',
  XSMALL: 'xs'
}

export const COLORS = {
  PRIMARY: 'primary',
  ACCENT: 'accent',
  SUCCESS: 'success',
  ALERT: 'alert',
  ERROR: 'error',
  NEUTRAL: 'neutral',
  SURFACE: 'surface'
}

export const getColor = ({isActionable, color}) => {
  if (color !== undefined && Object.values(COLORS).includes(color)) {
    return color
  }
  return isActionable ? COLORS.PRIMARY : COLORS.NEUTRAL
}

export const ICON_PLACEMENTS = {
  LEFT: 'left',
  RIGHT: 'right'
}

export const LINK_TYPES = {
  NOFOLLOW: 'nofollow',
  NOOPENER: 'noopener',
  NOREFERRER: 'noreferrer',
  PREV: 'prev',
  NEXT: 'next',
  TAG: 'tag'
}

export const DESIGNS = {
  SOLID: 'solid',
  TINTED: 'tinted',
  OUTLINE: 'outline',
  DASHED: 'dashed'
}

export const getDesign = ({isActionable, design}) => {
  if (design !== undefined && Object.values(DESIGNS).includes(design)) {
    return design
  }
  return isActionable ? DESIGNS.SOLID : DESIGNS.TINTED
}

/**
 * Removes all actionable tag props from the react props
 * @return {Object}
 */
export const getStandardProps = props => filterKeys(props, ACTIONABLE_ONLY_PROPS)

/**
 * Removes all standard tag props from the react props
 * @return {Object}
 */
export const getActionableProps = props => filterKeys(props, STANDARD_ONLY_PROPS)

export const isFunction = fn => typeof fn === 'function'

export const onHandler = ({disabled, readOnly}, handler, {...args} = {}) => {
  return event => {
    if (!(disabled || readOnly)) {
      event.stopPropagation()
      isFunction(handler) && handler(event, {...args})
    }
  }
}
