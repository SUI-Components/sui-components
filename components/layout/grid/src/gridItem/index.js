import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {baseClass, CELL_NUMBERS} from '../settings'

export default function LayoutGridItem({children, xxs, xs, s, m, l, xl, xxl}) {
  const classNames = cx(
    `${baseClass}-item`,
    xxs && `${baseClass}-item--xxs-${xxs}`,
    xs && `${baseClass}-item--xs-${xs}`,
    s && `${baseClass}-item--s-${s}`,
    m && `${baseClass}-item--m-${m}`,
    l && `${baseClass}-item--l-${l}`,
    xl && `${baseClass}-item--xl-${xl}`,
    xxl && `${baseClass}-item--xxl-${xxl}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGridItem.displayName = 'sui-LayoutGrid-Item'

LayoutGridItem.propTypes = {
  children: PropTypes.node.isRequired,
  xxs: PropTypes.oneOf(CELL_NUMBERS),
  xs: PropTypes.oneOf(CELL_NUMBERS),
  s: PropTypes.oneOf(CELL_NUMBERS),
  m: PropTypes.oneOf(CELL_NUMBERS),
  l: PropTypes.oneOf(CELL_NUMBERS),
  xl: PropTypes.oneOf(CELL_NUMBERS),
  xxl: PropTypes.oneOf(CELL_NUMBERS)
}
