import PropTypes from 'prop-types'
import LayoutGridItem from './gridItem'
import cx from 'classnames'

import {ALIGN_ITEMS, BASE_CLASS, JUSTIFY_CONTENT} from './settings'

function LayoutGrid({alignItems, children, justifyContent}) {
  const classNames = cx(
    `${BASE_CLASS}`,
    alignItems && `${BASE_CLASS}--ai-${alignItems}`,
    justifyContent && `${BASE_CLASS}--jc-${justifyContent}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGrid.displayName = 'LayoutGrid'

LayoutGrid.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Sets the align-self value on all direct children as a group. It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  /**
   * Distribute space between and around content items. It's applied for all screen sizes.
   */
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT)
}

export default LayoutGrid

export {LayoutGridItem, ALIGN_ITEMS, JUSTIFY_CONTENT}
