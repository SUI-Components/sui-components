import {Children, cloneElement, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {TYPES, VARIANTS} from './config.js'

import MoleculeTab from './components/MoleculeTab.js'
import MoleculeTabs from './components/MoleculeTabs.js'

const MoleculeTabsWithStateActive = ({children, onChange, ...props}) => {
  const [activeTab, setActiveTab] = useState(null)

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
    typeof onChange === 'function' && onChange(e, {numTab})
  }

  return (
    <MoleculeTabs {...props} onChange={handleChange}>
      {extendedChildren()}
    </MoleculeTabs>
  )
}

MoleculeTabsWithStateActive.displayName = 'MoleculeTabsWithStateActive'
MoleculeTabsWithStateActive.propTypes = {
  /** children of the component */
  children: PropTypes.element,

  /** onChange callback  */
  onChange: PropTypes.func
}

export {
  MoleculeTab,
  MoleculeTabs,
  MoleculeTabsWithStateActive,
  TYPES as moleculeTabsTypes,
  VARIANTS as moleculeTabsVariants
}

export default MoleculeTabsWithStateActive
