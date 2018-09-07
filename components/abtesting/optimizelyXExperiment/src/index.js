/* eslint handle-callback-err: "off" */
import PropTypes from 'prop-types'

import React, {Component} from 'react'
import AbTestToggle from '@s-ui/abtesting-toggle'
import OptimizelyX from './optimizely-x'

class AbTestOptimizelyXExperiment extends Component {
  state = {variation: null}

  componentDidMount() {
    this._activationHandler = variation => this.setState({variation})
    OptimizelyX.addActivationListener(
      this.props.experimentId,
      this._activationHandler
    )
  }

  componentWillUnmount() {
    OptimizelyX.removeActivationListener(
      this.props.experimentId,
      this._activationHandler
    )
  }

  render() {
    return (
      <AbTestToggle variation={this.state.variation}>
        {this.props.children}
      </AbTestToggle>
    )
  }
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  /**
   * Set of variations identified by `variationId` prop.
   * `defaultVariation` defines the fallback variation to show in case none is defined.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Id of the experiment to get variation from.
   */
  experimentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired
}

export default AbTestOptimizelyXExperiment
