import cx from 'classnames'

export const BASE_CLASS = 'sui-BreadcrumbBasic'

export const breadcrumbClassName = ({isExpanded, isScrollable, className}) =>
  cx(
    BASE_CLASS,
    {
      'is-expanded': isExpanded,
      'is-scrollable': isScrollable
    },
    className
  )

export const isFunction = fn => typeof fn === 'function'
