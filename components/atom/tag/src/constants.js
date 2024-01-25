import {filterKeys} from './helpers.js'

export const ACTIONABLE_ONLY_PROPS = ['href', 'iconPlacement', 'target', 'actionable', 'linkFactory', 'rel']

export const STANDARD_ONLY_PROPS = ['closeIcon', 'onClose']

export const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
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
  OUTLINE: 'outline'
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

export const onHandler =
  ({disabled, readOnly}, handler, {...args} = {}) =>
  event => {
    if (!(disabled || readOnly)) {
      event.stopPropagation()
      isFunction(handler) && handler(event, {...args})
    }
  }
