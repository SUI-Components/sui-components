import {
  Children,
  useState,
  useEffect,
  cloneElement,
  isValidElement
} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeTab from './components/MoleculeTab'

const BASE_CLASS = `sui-MoleculeTabs`

const CLASS_SCROLLER = `${BASE_CLASS}-scroller`
const CLASS_CONTENT = `${BASE_CLASS}-content`

const TYPES = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  FULLWIDTH: 'fullWidth'
}

const VARIANTS = {
  HIGHLIGHTED: 'highlighted',
  CLASSIC: 'classic'
}

const MoleculeTabs = ({variant, type, children, onChange}) => {
  const CLASS_VARIANT = `${BASE_CLASS}--${variant}`
  const CLASS_TYPE = `${BASE_CLASS}--${type}`

  const className = cx(BASE_CLASS, CLASS_VARIANT, CLASS_TYPE)
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
      <ul className={CLASS_SCROLLER}>{extendedChildren}</ul>
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

const MoleculeTabsWithStateActive = props => {
  const [activeTab, setActiveTab] = useState(null)
  const {children, onChange = () => {}} = props

  useEffect(() => {
    Children.forEach(children, (child, index) => {
      if (child) {
        const {active} = child.props
        if (active) setActiveTab(index + 1)
      }
    })
  }, []) // eslint-disable-line

  const extendedChildren = () => {
    return Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        const numTab = index + 1
        const active = activeTab === numTab
        return cloneElement(child, {active})
      })
  }

  const handleChange = (e, {numTab}) => {
    setActiveTab(numTab)
    onChange(e, {numTab})
  }

  return (
    <MoleculeTabs {...props} onChange={handleChange}>
      {extendedChildren()}
    </MoleculeTabs>
  )
}

MoleculeTabsWithStateActive.displayName = 'MoleculeTabsWithStateActive'
MoleculeTabsWithStateActive.propTypes = {
  /** value */
  activeTab: PropTypes.any,

  /** children of the component */
  children: PropTypes.element,

  /** onChange callback  */
  onChange: PropTypes.func
}

export default MoleculeTabsWithStateActive
export {
  MoleculeTabs,
  MoleculeTab,
  TYPES as moleculeTabsTypes,
  VARIANTS as moleculeTabsVariants
}
