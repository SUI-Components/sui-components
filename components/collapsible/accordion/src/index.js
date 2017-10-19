import React, {Component, PropTypes} from 'react'
import CollapsibleBasic from '@schibstedspain/sui-collapsible-basic'

class CollapsibleAccordion extends Component {
  constructor (props) {
    super(props)
    this.state = {vehicles: props.vehicles}
    this._handleClick = this._handleClick.bind(this)
    this._collapseItems = this._collapseItems.bind(this)
  }

  _handleClick (collapsed, id) {
    this._collapseItems(collapsed, id)
  }

  _collapseItems (collapsed, id) {
    const vehicles = this.state.vehicles
    this.setState({vehicles: vehicles.map((vehicle, index) => {
      vehicle.collapsed = (index === id) ? collapsed : true
      return vehicle
    })})
  }

  _renderCollapsible () {
    const { vehicles } = this.state
    return vehicles.map((vehicle, index) => {
      return (
        <CollapsibleBasic key={index} handleClick={this._handleClick} id={index} collapsed={vehicle.collapsed} label={<div style={{padding: '8px'}}>{vehicle.label}</div>} >
          {vehicle.content}
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
   * Array vehicles
   */
  vehicles: PropTypes.array.isRequired
}

export default CollapsibleAccordion
