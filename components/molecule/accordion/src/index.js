import {useEffect, useState, Children} from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab/index.js'
import {BASE_CLASS} from './settings.js'

const MoleculeAccordion = ({
  children,
  defaultOpenedTabs = [],
  onToggleTab = () => {},
  openedTabs,
  withAutoClose,
  ...tabProps
}) => {
  const [openedTabsState, setOpenedTabsState] = useState(
    openedTabs || defaultOpenedTabs
  )

  useEffect(() => {
    if (openedTabs !== undefined) {
      if (openedTabsState.length !== openedTabs?.length) {
        setOpenedTabsState(openedTabs)
      } else if (
        openedTabs?.sort().join('') !== openedTabsState.sort().join('')
      ) {
        setOpenedTabsState(openedTabs)
      }
    }
  }, [openedTabs, openedTabsState])

  const _handleOnToggle = index => event => {
    let newOpenedTabsState = []
    if (withAutoClose) {
      newOpenedTabsState = openedTabsState.includes(index) ? [] : [index]
    } else {
      newOpenedTabsState = openedTabsState.includes(index)
        ? openedTabsState.filter(tabIndex => tabIndex !== index)
        : [...openedTabsState, index].sort()
    }
    onToggleTab(event, {index, openedTabs: [...newOpenedTabsState]})
    if (openedTabs === undefined) {
      setOpenedTabsState([...newOpenedTabsState])
    }
  }

  return (
    <div className={BASE_CLASS} role="tablist">
      {Children.map(children, (child, index) => (
        <Tab
          isOpen={openedTabsState.includes(index)}
          key={index}
          onToggle={_handleOnToggle(index)}
          title={child.props.label}
          {...tabProps}
        >
          {child.props.children}
        </Tab>
      ))}
    </div>
  )
}

MoleculeAccordion.displayName = 'MoleculeAccordion'

MoleculeAccordion.propTypes = {
  /**
   * Children to put into Accordion Tabs
   */
  children: PropTypes.instanceOf(Object).isRequired,
  /**
   * Array with tab indexes to be opened by default
   */
  defaultOpenedTabs: PropTypes.arrayOf(PropTypes.Number),
  /**
   * Icon for the button
   */
  icon: PropTypes.node.isRequired,
  /**
   * Define the max height visible
   */
  maxHeight: PropTypes.number,
  /**
   * Define the auto height
   */
  autoHeight: PropTypes.bool,
  /**
   * On toggle tab callback
   */
  onToggleTab: PropTypes.func,
  /**
   * Array with tab indexes to be opened
   */
  openedTabs: PropTypes.arrayOf(PropTypes.Number),
  /**
   * Activate/deactivate autoclose
   */
  withAutoClose: PropTypes.bool,
  /**
   * Force scroll visible
   */
  withScrollVisible: PropTypes.bool,
  /**
   * Activate/deactivate transition
   */
  withTransition: PropTypes.bool,
  /**
   * Activate/deactivate gap between tabs
   */
  withGap: PropTypes.bool,
  /**
   * Activate/deactivate multiline label
   */
  withMultilineLabel: PropTypes.bool
}
MoleculeAccordion.defaultProps = {
  withAutoClose: true
}

export default MoleculeAccordion
