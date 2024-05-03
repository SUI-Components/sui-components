import {Children, cloneElement, isValidElement} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useOnScreen from '@s-ui/react-hooks/lib/useOnScreen'

import {BASE_CLASS, CLASS_CONTENT, CLASS_SCROLLER, TYPES, VARIANTS} from '../config.js'

const MoleculeTabs = ({
  autoScrollIntoView = true,
  children,
  id = 'molecule-tab-content',
  onChange,
  type = TYPES.HORIZONTAL,
  variant = VARIANTS.CLASSIC
}) => {
  const className = cx(BASE_CLASS, {
    [`${BASE_CLASS}--${variant}`]: variant,
    [`${BASE_CLASS}--${type}`]: type
  })
  const childrenArray = Children.toArray(children)
  const isVerticalOrientation = type === TYPES.VERTICAL

  const [isIntersecting, outerRef] = useOnScreen()

  const extendedChildren = childrenArray
    .filter(child => isValidElement(child))
    .map((child, index) => {
      const numTab = index + 1
      return cloneElement(child, {
        autoScrollIntoView,
        isIntersecting,
        numTab,
        id,
        onChange
      })
    })

  const activeTabContent = childrenArray.reduce((activeContent, child) => {
    if (child) {
      const {children: childrenChild, active, numTab} = child.props

      if (active) {
        return (
          <div className={CLASS_CONTENT} id={`${id}-${numTab}`} role="tabpanel">
            {childrenChild}
          </div>
        )
      }
    }
    return activeContent
  }, null)

  return (
    <div className={className}>
      <ul
        ref={outerRef}
        className={CLASS_SCROLLER}
        role="tablist"
        aria-orientation={isVerticalOrientation ? TYPES.VERTICAL : TYPES.HORIZONTAL}
      >
        {extendedChildren}
      </ul>
      {activeTabContent}
    </div>
  )
}

MoleculeTabs.displayName = 'MoleculeTabs'

MoleculeTabs.propTypes = {
  /** Enable scroll into view funcionality */
  autoScrollIntoView: PropTypes.bool,

  /** children */
  children: PropTypes.any,

  /** id used to make tabs unique */
  id: PropTypes.string,

  /** onChange */
  onChange: PropTypes.func,

  /** variant */
  variant: PropTypes.oneOf(Object.values(VARIANTS)),

  /** type */
  type: PropTypes.oneOf(Object.values(TYPES))
}

export default MoleculeTabs
