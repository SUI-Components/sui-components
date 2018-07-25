import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'
class TrackingView extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <ScriptLoader
        src={this.props.src}
        isAsync={false}
        verifier={this.props.verifier}
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
   * It must be a function with the operation to validate that our library has being loaded.. Used in order to ensure that our tracking API exist.
   */
  verifier: PropTypes.func.isRequired,
  /**
   * A function that will be called once a time our trackingView will be rendered for the first time.
   * It will be executed just one time.
   */
  track: PropTypes.func.isRequired
}

export default TrackingView
