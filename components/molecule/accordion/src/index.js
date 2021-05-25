import {useState} from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

const BASE_CLASS = 'sui-MoleculeAccordion'

const MoleculeAccordion = ({
  children,
  defaultOpenedTabs = [],
  onToggleTab = () => {},
  withAutoClose,
  ...tabProps
}) => {
  const initialOpenTabs = children.map((_, index) =>
    defaultOpenedTabs.includes(index)
  )

  const [openTabs, setOpenTabs] = useState(initialOpenTabs)

  const _handleOnToggle = index => event => {
    let newOpenTabs = []
    if (withAutoClose) {
      newOpenTabs[index] = openTabs[index] ? undefined : true
    } else {
      newOpenTabs = [...openTabs]
      newOpenTabs[index] = newOpenTabs[index] ? undefined : true
    }
    onToggleTab(event, {index, openTabs: [...newOpenTabs]})
    setOpenTabs([...newOpenTabs])
  }

  return (
    <div className={BASE_CLASS}>
      {children.map((child, index) => (
        <Tab
          isOpen={!!openTabs[index]}
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
