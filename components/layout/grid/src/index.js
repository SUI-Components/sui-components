import React from 'react'
import PropTypes from 'prop-types'
import LayoutGridItem from './gridItem'
import cx from 'classnames'

import {baseClass, ALIGN_CONTENT} from './settings'

function LayoutGrid({alignContent, children}) {
  const classNames = cx(
    `${baseClass}`,
    alignContent && `${baseClass}--${alignContent}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGrid.displayName = 'LayoutGrid'

LayoutGrid.propTypes = {
  alignContent: PropTypes.oneOf(ALIGN_CONTENT),
  children: PropTypes.node.isRequired
}

export default LayoutGrid

export {LayoutGridItem}
