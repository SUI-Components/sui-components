import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CollapsibleBasic from '@schibstedspain/sui-collapsible-basic'

class CollapsibleAccordion extends Component {
  constructor (props) {
    super(props)
    this.state = {items: props.items}
    this._handleClick = this._handleClick.bind(this)
    this._collapseItems = this._collapseItems.bind(this)
  }

  _handleClick (id) {
    return collapsed => this._collapseItems(collapsed, id)
  }

  _collapseItems (collapsed, id) {
    this.setState({ openIndex: id === this.state.openIndex ? null : id })
    this.props.onItemChange(collapsed, id)
  }

  render () {
    const { items } = this.props
    const { openIndex } = this.state
    return (
      <div>
        {
          items.map((item, index) => (
            <CollapsibleBasic key={index} {...item} collapsed={openIndex !== index} handleClick={this._handleClick(index)}>
              {item.content}
            </CollapsibleBasic>
          ))
        }
      </div>
    )
  }
}

CollapsibleAccordion.displayName = 'CollapsibleAccordion'

CollapsibleAccordion.propTypes = {
  /**
   * Event that will send when select an item
   */
  onItemChange: PropTypes.func,
  /**
   * Items array
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * label to be displayed.
     */
    label: PropTypes.node.isRequired,
    /**
     * children to be displayed when expanding component.
     */
    content: PropTypes.node.isRequired,
    /**
     * first state.
     */
    collapsed: PropTypes.bool
  })).isRequired
}

CollapsibleAccordion.defaultProps = {
  onItemChange: () => {}
}

export default CollapsibleAccordion
