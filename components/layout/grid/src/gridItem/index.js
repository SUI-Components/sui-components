import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {baseClass, CELL_NUMBERS} from '../settings'

export default function LayoutGridItem({
  children,
  xxsOffset,
  xxs,
  xs,
  s,
  m,
  l,
  lOffset,
  xl,
  xxl
}) {
  const classNames = cx(
    `${baseClass}-item`,
    l && `${baseClass}-item--l-${l}`,
    lOffset && `${baseClass}-item--lOffset-${lOffset}`,
    m && `${baseClass}-item--m-${m}`,
    s && `${baseClass}-item--s-${s}`,
    xl && `${baseClass}-item--xl-${xl}`,
    xs && `${baseClass}-item--xs-${xs}`,
    xxl && `${baseClass}-item--xxl-${xxl}`,
    xxs && `${baseClass}-item--xxs-${xxs}`,
    xxsOffset && `${baseClass}-item--xxsOffset-${xxsOffset}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGridItem.displayName = 'sui-LayoutGrid-Item'

LayoutGridItem.propTypes = {
  children: PropTypes.node.isRequired,
  xxsOffset: PropTypes.oneOf(CELL_NUMBERS),
  xxs: PropTypes.oneOf(CELL_NUMBERS),
  xs: PropTypes.oneOf(CELL_NUMBERS),
  s: PropTypes.oneOf(CELL_NUMBERS),
  m: PropTypes.oneOf(CELL_NUMBERS),
  l: PropTypes.oneOf(CELL_NUMBERS),
  lOffset: PropTypes.oneOf(CELL_NUMBERS),
  xl: PropTypes.oneOf(CELL_NUMBERS),
  xxl: PropTypes.oneOf(CELL_NUMBERS)
}
