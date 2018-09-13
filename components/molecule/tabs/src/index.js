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

  _createHandleChange(index) {
    return event => {
      event.preventDefault()
      if (this.props.items[index].enabled !== false) {
        this.setState({activeTab: index})
        this.props.handleChange(index, this.props.items[index])
      }
    }
  }

  _renderTabs() {
    const {items} = this.props
    const {activeTab} = this.state

    return items.map((item, index) => {
      const tabLinkClassName = cx('sui-MoleculeTabs-button', {
        active: activeTab === index,
        disabled: item.enabled === false
      })

      return (
        <li className="sui-MoleculeTabs-item" key={index}>
          <button
            className={tabLinkClassName}
            onClick={this._createHandleChange(index)}
            role="tab"
          >
            {item.icon && (
              <span className="sui-MoleculeTabs-icon">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </button>
        </li>
      )
    })
  }

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
  activeTab: 0
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
  type: PropTypes.oneOf(Object.values(TYPES))
}

MoleculeTabs.defaultProps = {
  variant: VARIANTS.CLASSIC,
  type: TYPES.HORIZONTAL
}

export default MoleculeTabs
export {TYPES as moleculeTabsTypes, VARIANTS as moleculeTabsVariants}
