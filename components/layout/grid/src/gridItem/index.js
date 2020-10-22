import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {baseClass, CELL_NUMBERS} from '../settings'

export default function LayoutGridItem({children, sm, md, lg, xl}) {
  const classNames = cx(
    `${baseClass}-item`,
    sm && `${baseClass}-item--sm-${sm}`,
    md && `${baseClass}-item--md-${md}`,
    lg && `${baseClass}-item--lg-${lg}`,
    xl && `${baseClass}-item--xl-${xl}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGridItem.displayName = 'sui-LayoutGrid-Item'

LayoutGridItem.propTypes = {
  children: PropTypes.node.isRequired,
  sm: PropTypes.oneOf(CELL_NUMBERS),
  md: PropTypes.oneOf(CELL_NUMBERS),
  lg: PropTypes.oneOf(CELL_NUMBERS),
  xl: PropTypes.oneOf(CELL_NUMBERS)
}
