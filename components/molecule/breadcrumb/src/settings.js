import cx from 'classnames'

const BASE_CLASS = 'sui-BreadcrumbBasic'

export const breadcrumbClassName = ({isExpanded, isScrollable}) =>
  cx(BASE_CLASS, {
    'is-expanded': isExpanded,
    'is-scrollable': isScrollable
  })
