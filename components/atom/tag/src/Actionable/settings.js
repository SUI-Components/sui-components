import cx from 'classnames'

export {onHandler} from '../constants.js'

export const ICON_PLACEMENTS = {
  RIGHT: 'right',
  LEFT: 'left'
}

export const ICON_PLACEMENT_CLASSNAME = {
  [ICON_PLACEMENTS.LEFT]: 'sui-AtomTag-icon',
  [ICON_PLACEMENTS.RIGHT]: 'sui-AtomTag-secondary-icon'
}

export const getClassNames = function ({className}) {
  return cx('sui-AtomTag-actionable', className)
}

export const getLinkTypesString = types => types && types.join(' ')
