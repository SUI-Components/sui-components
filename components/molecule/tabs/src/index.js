import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const TYPES = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  FULLWIDTH: 'fullWidth'
}

const VARIANTS = {
  HIGHLIGHTED: 'highlighted',
  CLASSIC: 'classic'
}

class MoleculeTabs extends Component {
  state = {
    activeTab: this.props.activeTab
  }

  get extendedChildren() {
    const {children} = this.props // eslint-disable-line
    const {activeTab} = this.state
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index, children) => {
        const {children: childrenChild} = child.props

        const numTab = index + 1
        const isActive = activeTab === numTab
        if (isActive) this.activeStepContent = childrenChild

        return React.cloneElement(child, {
          numTab,
          isActive
        })
      })
  }

  handleChange = (ev, {numTab}) => {
    ev.preventDefault()
    this.setState({activeTab: numTab})
  }
  
  // _createHandleChange(index) {
  //   return event => {
  //     event.preventDefault()
  //     const {items, handleClickInDisabledTabs} = this.props
  //     const {enabled} = items[index]
  //     if (enabled !== false) {
  //       this.setState({activeTab: index})
  //     }
  //     if (handleClickInDisabledTabs || enabled !== false) {
  //       this.props.handleChange(index, this.props.items[index])
  //     }
  //   }
  // }

  render() {
    return (
      <nav
        className={cx(
          'sui-MoleculeTabs',
          `sui-MoleculeTabs--${this.props.variant}`,
          `sui-MoleculeTabs--${this.props.type}`
        )}
      >
        <ul className="sui-MoleculeTabs-scroller">{this._renderTabs()}</ul>
      </nav>
    )
  }
}

MoleculeTabs.displayName = 'MoleculeTabs'

MoleculeTabs.defaultProps = {
  activeTab: 0,
  handleClickInDisabledTabs: false
}

MoleculeTabs.propTypes = {
  /**
   * List of items for generate tabs
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * label to be displayed.
       */
      label: PropTypes.node.isRequired,
      /**
       * Icon of the tab item
       */
      icon: PropTypes.node,
      /**
       * first state.
       */
      active: PropTypes.bool,
      /**
       * Allows to disable a tab by setting this to false
       */
      enabled: PropTypes.bool
    })
  ).isRequired,
  /**
   * Point at the selected tab
   */
  activeTab: PropTypes.number,
  /**
   * By clicking on every single tab, `handleChange` is triggered and sends an
   * object with the item information and position in the array.
   */
  handleChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  type: PropTypes.oneOf(Object.values(TYPES)),
  /**
   * Allows the handle click in disabled tabs
   */
  handleClickInDisabledTabs: PropTypes.bool
}

MoleculeTabs.defaultProps = {
  variant: VARIANTS.CLASSIC,
  type: TYPES.HORIZONTAL,
  handleClickInDisabledTabs: false
}

export default MoleculeTabs
export {TYPES as moleculeTabsTypes, VARIANTS as moleculeTabsVariants}
