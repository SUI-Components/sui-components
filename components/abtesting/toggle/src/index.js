/* eslint eqeqeq: "off" */

import PropTypes from 'prop-types'

import React, {Component} from 'react'

class AbTestToggle extends Component {
  render() {
    let {variation, children} = this.props
    const filterFunc = variation
      ? child => child.props.variationId == variation
      : child => child.props.defaultVariation

    let child = children.filter(filterFunc)[0] || null

    if (child) {
      let newProps = {...child.props}
      delete newProps.variationId
      delete newProps.defaultVariation
      child = React.createElement(child.type, newProps)
    }

    return child
  }
}

AbTestToggle.displayName = 'AbTestToggle'

AbTestToggle.propTypes = {
  /**
   * Id of the contained variation to show. Has to match with `variationId` of a child.
   */
  variation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set of variations identified by `variationId` prop.
   * `defaultVariation` defines the fallback variation to show in case none is defined.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default AbTestToggle
