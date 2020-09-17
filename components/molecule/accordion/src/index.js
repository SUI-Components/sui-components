import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

const BASE_CLASS = 'sui-MoleculeAccordion'

function MoleculeAccordion(props) {
  const {children, defaultOpenedTabs = [], ...tabProps} = props

  const initialOpenTabs = children.map((_, index) =>
    defaultOpenedTabs.includes(index)
  )

  const [openTabs, setOpenTabs] = useState(initialOpenTabs)

  function onToggle(id) {
    const {withAutoClose} = props
    let newOpenTabs = []
    if (withAutoClose) {
      newOpenTabs[id] = openTabs[id] ? undefined : true
    } else {
      newOpenTabs = [...openTabs]
      newOpenTabs[id] = newOpenTabs[id] ? undefined : true
    }
    setOpenTabs([...newOpenTabs])
  }

  return (
    <div className={BASE_CLASS}>
      {children.map((child, index) => (
        <Tab
          key={index}
          isOpen={!!openTabs[index]}
          title={child.props.label}
          onToggle={() => onToggle(index)}
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
