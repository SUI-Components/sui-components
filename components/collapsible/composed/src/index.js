import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class CollapsibleComposed extends Component {
  state = {collapsed: this.props.collapsed}

  _toggle() {
    const {collapsed} = this.state
    this.setState({collapsed: !collapsed})
    this.props.onToggle(!collapsed)
  }

  render() {
    const {hiddenItems, inline, items, label} = this.props
    const {collapsed} = this.state
    const collapseIcon = collapsed ? '+' : '-'

    const itemClass = cx('sui-CollapsibleComposed-item', {
      'sui-CollapsibleComposed-item--inline': inline
    })
    const togglerClass = cx('sui-CollapsibleComposed-toggler', {
      'sui-CollapsibleComposed-item--inline': inline
    })

    const itemsToToggle = (!collapsed && hiddenItems) || []
    const totalItems = items.concat(itemsToToggle)

    const displayItems = totalItems.map((item, index) => {
      return (
        <div className={itemClass} key={index}>
          {item}
        </div>
      )
    })

    return (
      <div className="sui-CollapsibleComposed">
        <div className="sui-CollapsibleComposed-label">{label}</div>
        <div className="sui-CollapsibleComposed-content">
          {displayItems}
          {hiddenItems.length > 0 && (
            <div className={togglerClass} onClick={() => this._toggle()}>
              {collapseIcon}
            </div>
          )}
        </div>
      </div>
    )
  }
}

CollapsibleComposed.displayName = 'CollapsibleComposed'

CollapsibleComposed.propTypes = {
  /**
   * Boolean. Determines if (false) the hidden elements will be initially displayed
   */
  collapsed: PropTypes.bool,

  /**
   * Items that will appear and desappear when the toggle icon is clicked
   */
  hiddenItems: PropTypes.array,

  /**
   * Boolean. Determines if (true) the elements will be displayed inline
   */
  inline: PropTypes.bool,

  /**
   * Items that will always be visible
   */
  items: PropTypes.array,

  /**
   * Title of the section
   */
  label: PropTypes.node.isRequired,

  /**
   * Callback to be called when the toggle icon is clicked.
   */
  onToggle: PropTypes.func
}

CollapsibleComposed.defaultProps = {
  collapsed: true,
  hiddenItems: [],
  inline: false,
  items: [],
  onToggle: () => {}
}

export default CollapsibleComposed
