import {Children, cloneElement, isValidElement, useEffect, useRef} from 'react'

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
  const tabRefs = useRef([]) // To store refs of each tab item

  // Initialize or clear tabRefs based on children length
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, childrenArray.length)
  }, [childrenArray.length])

  const focusTab = index => {
    if (tabRefs.current[index]) {
      tabRefs.current[index].focus()
    }
  }

  const handleKeyDown = event => {
    const activeTabIndex = childrenArray.findIndex(child => child.props.active)
    let nextTabIndex = activeTabIndex

    if (event.key === 'ArrowRight' && !isVerticalOrientation) {
      nextTabIndex = (activeTabIndex + 1) % childrenArray.length
    } else if (event.key === 'ArrowLeft' && !isVerticalOrientation) {
      nextTabIndex = (activeTabIndex - 1 + childrenArray.length) % childrenArray.length
    } else if (event.key === 'ArrowDown' && isVerticalOrientation) {
      nextTabIndex = (activeTabIndex + 1) % childrenArray.length
    } else if (event.key === 'ArrowUp' && isVerticalOrientation) {
      nextTabIndex = (activeTabIndex - 1 + childrenArray.length) % childrenArray.length
    } else if (event.key === 'Home') {
      nextTabIndex = 0
    } else if (event.key === 'End') {
      nextTabIndex = childrenArray.length - 1
    }

    if (nextTabIndex !== activeTabIndex) {
      event.preventDefault()
      const nextTab = childrenArray[nextTabIndex]
      if (nextTab && !nextTab.props.disabled) {
        onChange(event, {numTab: nextTabIndex + 1})
        focusTab(nextTabIndex)
      } else {
        // If the next tab is disabled, try to find the next available tab in that direction
        let potentialNextTabIndex = nextTabIndex
        const increment = event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'End' ? 1 : -1
        while (childrenArray[potentialNextTabIndex] && childrenArray[potentialNextTabIndex].props.disabled) {
          potentialNextTabIndex = (potentialNextTabIndex + increment + childrenArray.length) % childrenArray.length
          // Avoid infinite loop if all other tabs are disabled
          if (potentialNextTabIndex === activeTabIndex) break
        }
        if (childrenArray[potentialNextTabIndex] && !childrenArray[potentialNextTabIndex].props.disabled) {
          onChange(event, {numTab: potentialNextTabIndex + 1})
          focusTab(potentialNextTabIndex)
        }
      }
    }
  }

  const extendedChildren = childrenArray
    .filter(child => isValidElement(child))
    .map((child, index) => {
      const numTab = index + 1
      return cloneElement(child, {
        autoScrollIntoView,
        isIntersecting,
        numTab,
        id,
        onChange,
        ref: el => (tabRefs.current[index] = el) // Assign ref to each MoleculeTab
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
        onKeyDown={handleKeyDown} // Add keydown handler
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
