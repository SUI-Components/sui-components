import React from 'react'
import PropTypes from 'prop-types'
import LayoutGridItem from './gridItem'
import cx from 'classnames'

import {baseClass, JUSTIFY_CONTENT} from './settings'

function LayoutGrid({justifyContent, children}) {
  const classNames = cx(
    `${baseClass}`,
    justifyContent && `${baseClass}--${justifyContent}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGrid.displayName = 'LayoutGrid'

LayoutGrid.propTypes = {
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT),
  children: PropTypes.node.isRequired
}

export default LayoutGrid

export {LayoutGridItem, JUSTIFY_CONTENT}
