import {Children, cloneElement} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import MoleculeTab from './components/MoleculeTab.js'
import MoleculeTabs from './components/MoleculeTabs.js'
import {TYPES, VARIANTS, TABS_JUSTIFY_CONTENT} from './config.js'

const MoleculeTabsWithStateActive = ({
  children,
  activeTabIndex: activeTabIndexProp,
  defaultActiveTabIndex: defaultActiveTabIndexProp = 1,
  tabsJustifyContent,
  onChange,
  ...props
}) => {
  const [activeTab, setActiveTab] = useControlledState(activeTabIndexProp, defaultActiveTabIndexProp)

  const handleChange = (e, {numTab: tabIndex}) => {
    setActiveTab(tabIndex)
    typeof onChange === 'function' && onChange(e, {numTab: tabIndex})
  }

  return (
    <MoleculeTabs {...props} tabsJustifyContent={tabsJustifyContent} onChange={handleChange}>
      {Children.toArray(children)
        .filter(Boolean)
        .map((child, index) => cloneElement(child, {active: activeTab === index + 1}))}
    </MoleculeTabs>
  )
}

MoleculeTabsWithStateActive.displayName = 'MoleculeTabsWithStateActive'
MoleculeTabsWithStateActive.propTypes = {
  /** defines the active tab */
  activeTabIndex: PropTypes.number,

  /** defines the initial active tab */
  defaultActiveTabIndex: PropTypes.number,

  /** children of the component */
  children: PropTypes.element,

  /** onChange callback  */
  onChange: PropTypes.func,

  tabsJustifyContent: PropTypes.oneOfType(Object.values(TABS_JUSTIFY_CONTENT))
}

export {
  MoleculeTab,
  MoleculeTabs,
  MoleculeTabsWithStateActive,
  TYPES as moleculeTabsTypes,
  VARIANTS as moleculeTabsVariants,
  TABS_JUSTIFY_CONTENT as moleculeTabsJustifyContent
}

export default MoleculeTabsWithStateActive
