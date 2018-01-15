import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class CollapsibleComposed extends Component {
  state = { collapsed: this.props.collapsed }

  _toggle () {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
    this.props.onToggle(!collapsed)
  }

  render () {
    const { hiddenItems, inline, items, label } = this.props
    const { collapsed } = this.state
    const collapseIcon = collapsed ? '+' : '-'

    const itemClass = cx('sui-CollapsibleComposed-item', { 'sui-CollapsibleComposed-item--inline': inline })
    const togglerClass = cx('sui-CollapsibleComposed-toggler', { 'sui-CollapsibleComposed-item--inline': inline })

    const displayItems = (items || []).concat((!collapsed && hiddenItems) || []).map(item => {
      return <div className={itemClass}>{item}</div>
    })

    return (
      <div className='sui-CollapsibleComposed'>
        <div className='sui-CollapsibleComposed-label'>{label}</div>
        <div className='sui-CollapsibleComposed-content'>
          {displayItems}
          {hiddenItems.length > 0 && <div className={togglerClass} onClick={() => this._toggle()}>{collapseIcon}</div>}
        </div>
      </div>
    )
  }
}

CollapsibleComposed.displayName = 'CollapsibleComposed'

CollapsibleComposed.propTypes = {
  collapsed: PropTypes.bool,
  hiddenItems: PropTypes.array,
  inline: PropTypes.bool,
  items: PropTypes.array,
  label: PropTypes.node.isRequired,
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
