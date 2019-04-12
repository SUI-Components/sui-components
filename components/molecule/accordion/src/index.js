import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

const BASE_CLASS = 'sui-MoleculeAccordion'

class MoleculeAccordion extends Component {
  state = {
    openTabs: []
  }

  onToggle = id => {
    const {openTabs} = this.state
    const {withAutoClose} = this.props
    let newOpenTabs = []
    if (withAutoClose) {
      newOpenTabs[id] = openTabs[id] ? undefined : true
    } else {
      newOpenTabs = [...openTabs]
      newOpenTabs[id] = newOpenTabs[id] ? undefined : true
    }
    this.setState({
      openTabs: [...newOpenTabs]
    })
  }

  render() {
    const {openTabs} = this.state
    const {children, ...tabProps} = this.props
    return (
      <div className={BASE_CLASS}>
        {children.map((child, index) => (
          <Tab
            key={index}
            isOpen={!!openTabs[index]}
            title={child.props.label}
            onToggle={() => this.onToggle(index)}
            {...tabProps}
          >
            {child.props.children}
          </Tab>
        ))}
      </div>
    )
  }
}

MoleculeAccordion.displayName = 'MoleculeAccordion'

MoleculeAccordion.propTypes = {
  /**
   * Children to put into Accordion Tabs
   */
  children: PropTypes.instanceOf(Object).isRequired,
  /**
   * Icon for the button
   */
  icon: PropTypes.node.isRequired,
  /**
   * Define the max height visible
   */
  maxHeight: PropTypes.number,
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
  withTransition: PropTypes.bool
}
MoleculeAccordion.defaultProps = {
  withAutoClose: true
}

export default MoleculeAccordion
