import {Children, cloneElement, isValidElement} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  CLASS_CONTENT,
  CLASS_SCROLLER,
  CLASS_SNAP,
  TYPES,
  VARIANTS
} from '../config'

const MoleculeTabs = ({variant, type, children, onChange, snap}) => {
  const CLASS_VARIANT = `${BASE_CLASS}--${variant}`
  const CLASS_TYPE = `${BASE_CLASS}--${type}`

  const className = cx(BASE_CLASS, CLASS_VARIANT, CLASS_TYPE)

  const classScroller = cx(CLASS_SCROLLER, {
    [CLASS_SNAP]: snap
  })

  const childrenArray = Children.toArray(children)

  const extendedChildren = childrenArray
    .filter(child => isValidElement(child))
    .map((child, index) => {
      const numTab = index + 1
      return cloneElement(child, {
        onChange,
        numTab
      })
    })

  const activeTabContent = childrenArray.reduce((activeContent, child) => {
    if (child) {
      const {children: childrenChild, active} = child.props
      return active ? childrenChild : activeContent
    }
  }, null)

  return (
    <div className={className}>
      <ul className={classScroller}>{extendedChildren}</ul>
      {activeTabContent ? (
        <div className={CLASS_CONTENT}>{activeTabContent}</div>
      ) : null}
    </div>
  )
}

MoleculeTabs.displayName = 'MoleculeTabs'

MoleculeTabs.propTypes = {
  /** children */
  children: PropTypes.any,

  /** onChange */
  onChange: PropTypes.func,

  /** variant */
  variant: PropTypes.oneOf(Object.values(VARIANTS)),

  /** type */
  type: PropTypes.oneOf(Object.values(TYPES)),

  /** scroll snap */
  snap: PropTypes.bool
}

MoleculeTabs.defaultProps = {
  variant: VARIANTS.CLASSIC,
  type: TYPES.HORIZONTAL,
  onChange: () => {}
}

export default MoleculeTabs
