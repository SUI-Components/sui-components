import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'
class TrackingView extends Component {
  shouldComponentUpdate() {
    return false
  }

  proofOfLife(verifier) {
    return window && window[verifier]
  }

  render() {
    return (
      <ScriptLoader
        src={this.props.src}
        isAsync={false}
        verifier={() => this.proofOfLife(this.props.verifier)}
        render={() => !this.props.track() && null}
      />
    )
  }
}

TrackingView.displayName = 'TrackingView'

TrackingView.propTypes = {
  /**
   * It must be a string with a src to the library with the API that our track function is going to use.
   */
  src: PropTypes.string.isRequired,
  /**
   * It must be a string with the object or even the function that our tracker is going to use. Used in order to ensure that our tracking API exist.
   */
  verifier: PropTypes.string.isRequired,
  /**
   * A function that will be called once a time our trackingView will be rendered for the first time.
   * It will be executed just one time.
   */
  track: PropTypes.func.isRequired
}

export default TrackingView
