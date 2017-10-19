import React, {Component, PropTypes} from 'react'
import CollapsibleBasic from '@schibstedspain/sui-collapsible-basic'

class CollapsibleAccordion extends Component {
  constructor (props) {
    super(props)
    this.state = {items: props.items}
    this._handleClick = this._handleClick.bind(this)
    this._collapseItems = this._collapseItems.bind(this)
  }

  _handleClick (id) {
    return (collapsed) =>
      this._collapseItems(collapsed, id)
  }

  _collapseItems (collapsed, id) {
    const items = this.state.items
    this.setState({items: items.map((item, index) => {
      item.collapsed = (index === id) ? collapsed : true
      return item
    })})
  }

  _renderCollapsible () {
    const { items } = this.state
    return items.map((item, index) => {
      return (
        <CollapsibleBasic key={index} handleClick={this._handleClick(index)} collapsed={item.collapsed} label={<div style={{padding: '8px'}}>{item.label}</div>} >
          {item.content}
        </CollapsibleBasic>
      )
    })
  }

  render () {
    return (
      <div>
        {this._renderCollapsible()}
      </div>
    )
  }
}

CollapsibleAccordion.displayName = 'CollapsibleAccordion'

CollapsibleAccordion.propTypes = {
  /**
   * Items array
   */
  items: PropTypes.array.isRequired
}

export default CollapsibleAccordion
