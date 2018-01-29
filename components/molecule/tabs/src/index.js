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

/**
 * Return classes for general object
 * @param  {string} options.className
 * @param  {string} options.size
 * @param  {string} options.type
 * @return {string}
 */
const getClassNames = function ({className, variant, type}) {
  return cx(
    'sui-MoleculeTabs',
    `sui-MoleculeTabs--${variant}`,
    `sui-MoleculeTabs--${type}`,
    className
  )
}

/**
 * Return a boolean to render or not the icon
 * @param  {object} options.icon
 * @return {boolean}
 */
const shouldRenderIcon = function (icon) {
  return icon
}

class MoleculeTabs extends Component {
  state = {
    activeTab: this.props.activeTab
  }

  _createHandleClick (index) {
    return (event) => {
      event.preventDefault()
      if (this.props.items[index].enabled !== false) {
        this.setState({ activeTab: index })
        this.props.handleClick(index, this.props.items[index])
      }
    }
  }

  _renderTabs () {
    const { items } = this.props
    const { activeTab } = this.state

    return items.map((item, index) => {
      const tabLinkClassName = cx('sui-MoleculeTabs-button', {
        'is-active': activeTab === index,
        'is-disabled': item.enabled === false
      })

      return (
        <li className='sui-MoleculeTabs-item' key={index}>
          <button
            className={tabLinkClassName}
            onClick={this._createHandleClick(index)}
            role='tab'
          >
            {
              shouldRenderIcon(item.icon) &&
              <span className='sui-MoleculeTabs-icon'>
                { item.icon }
              </span>
            }
            <span>{item.label}</span>
          </button>
        </li>
      )
    })
  }

  render () {
    const classNames = getClassNames({...this.props})

    return (
      <nav className={classNames}>
        <ul className='sui-MoleculeTabs-scroller'>
          {this._renderTabs()}
        </ul>
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
   * CSS Classes to be added to the component
   */
  className: PropTypes.string,
  /**
   * List of items for generate tabs
   */
  items: PropTypes.arrayOf(PropTypes.shape({
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

  })).isRequired,
  /**
   * Point at the selected tab
   */
  activeTab: PropTypes.number,
  /**
   * By clicking on every single tab, `handleClick` is triggered and sends an
   * object with the item information and position in the array.
   */
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  type: PropTypes.oneOf(Object.values(TYPES))
}

MoleculeTabs.defaultProps = {
  variant: VARIANTS.CLASSIC,
  type: TYPES.HORIZONTAL
}

export default MoleculeTabs
export {
  TYPES as moleculeTabsTypes,
  VARIANTS as moleculeTabsVariants
}
