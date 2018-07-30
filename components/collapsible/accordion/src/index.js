import PropTypes from 'prop-types'
import React, {Component} from 'react'
import CollapsibleBasic from '@schibstedspain/sui-collapsible-basic'

class CollapsibleAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {items: props.items}
    this._handleClick = this._handleClick.bind(this)
    this._collapseItems = this._collapseItems.bind(this)
  }

  componentWillMount() {
    this._collapseItems(
      false,
      this.props.items.findIndex(item => !item.collapsed)
    )
  }

  componentWillReceiveProps(nextProps) {
    const nextOpenIndex = nextProps.items.findIndex(function(item) {
      return !item.collapsed
    })
    this.setState({openIndex: nextOpenIndex})
  }

  _handleClick(id) {
    const {preserveState} = this.props
    return collapsed => !preserveState && this._collapseItems(collapsed, id)
  }

  _collapseItems(collapsed, id) {
    this._setOpenIndex(id)
    this.props.onItemChange(collapsed, id)
  }

  _setOpenIndex(id) {
    this.setState({openIndex: id === this.state.openIndex ? null : id})
  }

  render() {
    const {items} = this.props
    const {openIndex} = this.state
    return (
      <div>
        {items.map((item, index) => (
          <CollapsibleBasic
            key={index}
            {...item}
            collapsed={openIndex !== index}
            handleClick={this._handleClick(index)}
            icon={this.props.icon}
          >
            {item.content}
          </CollapsibleBasic>
        ))}
      </div>
    )
  }
}

CollapsibleAccordion.displayName = 'CollapsibleAccordion'

CollapsibleAccordion.propTypes = {
  /**
   * Close the prev row open if other row has been opened (false)
   * Keep the prev row open if other row has been opened (true)
   */
  preserveState: PropTypes.bool,
  /**
   * Event that will send when select an item
   */
  onItemChange: PropTypes.func,
  /**
   * icon to be displayed.
   */
  icon: PropTypes.func,
  /**
   * Items array
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
}

CollapsibleAccordion.defaultProps = {
  preserveState: false,
  onItemChange: () => {}
}

export default CollapsibleAccordion
