import cx from 'classnames'

export const RIGHT_ICON_PLACEMENT = 'right'
export const LEFT_ICON_PLACEMENT = 'left'

export const getClassNames = function({className, disabled}) {
  return cx(
    'sui-AtomTag-actionable',
    disabled && 'sui-AtomTag--disabled',
    className
  )
}

export const getLinkTypesString = types => types && types.join(' ')
