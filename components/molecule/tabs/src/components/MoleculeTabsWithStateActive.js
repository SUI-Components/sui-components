import {Children, cloneElement, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import MoleculeTabs from './MoleculeTabs'

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
