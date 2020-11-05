import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {baseClass, CELL_NUMBERS} from '../settings'

export default function LayoutGridItem({
  children,
  l,
  lOffset,
  m,
  mOffset,
  s,
  sOffset,
  xl,
  xlOffset,
  xs,
  xsOffset,
  xxl,
  xxlOffset,
  xxs,
  xxsOffset
}) {
  const classNames = cx(
    `${baseClass}-item`,
    l && `${baseClass}-item--l-${l}`,
    lOffset && `${baseClass}-item--lOffset-${lOffset}`,
    m && `${baseClass}-item--m-${m}`,
    mOffset && `${baseClass}-item--mOffset-${mOffset}`,
    s && `${baseClass}-item--s-${s}`,
    sOffset && `${baseClass}-item--sOffset-${sOffset}`,
    xl && `${baseClass}-item--xl-${xl}`,
    xlOffset && `${baseClass}-item--xlOffset-${xlOffset}`,
    xs && `${baseClass}-item--xs-${xs}`,
    xsOffset && `${baseClass}-item--xsOffset-${xsOffset}`,
    xxl && `${baseClass}-item--xxl-${xxl}`,
    xxlOffset && `${baseClass}-item--xxlOffset-${xxlOffset}`,
    xxs && `${baseClass}-item--xxs-${xxs}`,
    xxsOffset && `${baseClass}-item--xxsOffset-${xxsOffset}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGridItem.displayName = 'sui-LayoutGrid-Item'

LayoutGridItem.propTypes = {
  children: PropTypes.node.isRequired,
  l: PropTypes.oneOf(CELL_NUMBERS),
  lOffset: PropTypes.oneOf(CELL_NUMBERS),
  m: PropTypes.oneOf(CELL_NUMBERS),
  mOffset: PropTypes.oneOf(CELL_NUMBERS),
  s: PropTypes.oneOf(CELL_NUMBERS),
  sOffset: PropTypes.oneOf(CELL_NUMBERS),
  xl: PropTypes.oneOf(CELL_NUMBERS),
  xlOffset: PropTypes.oneOf(CELL_NUMBERS),
  xs: PropTypes.oneOf(CELL_NUMBERS),
  xsOffset: PropTypes.oneOf(CELL_NUMBERS),
  xxl: PropTypes.oneOf(CELL_NUMBERS),
  xxlOffset: PropTypes.oneOf(CELL_NUMBERS),
  xxs: PropTypes.oneOf(CELL_NUMBERS),
  xxsOffset: PropTypes.oneOf(CELL_NUMBERS)
}
