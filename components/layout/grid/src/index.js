import React from 'react'
import PropTypes from 'prop-types'
import LayoutGridItem from './gridItem'
import cx from 'classnames'

import {baseClass, ALIGN_ITEMS, JUSTIFY_CONTENT} from './settings'

function LayoutGrid({justifyContent, alignItems, children}) {
  const classNames = cx(
    `${baseClass}`,
    justifyContent && `${baseClass}--jc-${justifyContent}`,
    alignItems && `${baseClass}--ai-${alignItems}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGrid.displayName = 'LayoutGrid'

LayoutGrid.propTypes = {
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT),
  children: PropTypes.node.isRequired
}

export default LayoutGrid

export {LayoutGridItem, ALIGN_ITEMS, JUSTIFY_CONTENT}
