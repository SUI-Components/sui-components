import cx from 'classnames'

export {onHandler} from '../constants.js'

export const RIGHT_ICON_PLACEMENT = 'right'
export const LEFT_ICON_PLACEMENT = 'left'

export const getClassNames = function ({className}) {
  return cx('sui-AtomTag-actionable', className)
}

export const getLinkTypesString = types => types && types.join(' ')
