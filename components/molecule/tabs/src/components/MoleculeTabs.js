import {Children, cloneElement, isValidElement} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import useOnScreen from '@s-ui/react-hooks/lib/useOnScreen'

import {
  BASE_CLASS,
  CLASS_CONTENT,
  CLASS_SCROLLER,
  TYPES,
  VARIANTS
} from '../config.js'

const MoleculeTabs = ({variant, type, children, onChange}) => {
  const className = cx(BASE_CLASS, {
    [`${BASE_CLASS}--${variant}`]: variant,
    [`${BASE_CLASS}--${type}`]: type
  })
  const childrenArray = Children.toArray(children)

  const [isIntersecting, outerRef] = useOnScreen()

  const extendedChildren = childrenArray
    .filter(child => isValidElement(child))
    .map((child, index) => {
      const numTab = index + 1
      return cloneElement(child, {
        onChange,
        numTab,
        isIntersecting
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
      <ul ref={outerRef} className={CLASS_SCROLLER}>
        {extendedChildren}
      </ul>
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
  type: PropTypes.oneOf(Object.values(TYPES))
}

MoleculeTabs.defaultProps = {
  variant: VARIANTS.CLASSIC,
  type: TYPES.HORIZONTAL,
  onChange: () => {}
}

export default MoleculeTabs
