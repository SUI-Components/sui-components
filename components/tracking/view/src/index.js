import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'
class TrackingView extends Component {
  constructor(props) {
    super(props)
    this.overrideTrackingBaseCfg()
  }

  shouldComponentUpdate() {
    return false
  }

  overrideTrackingBaseCfg() {
    const {overridePropName, configOverridesObject} = this.props
    if (typeof window !== 'undefined') {
      window[overridePropName] = {
        ...window[overridePropName],
        ...configOverridesObject
      }
    }
  }

  render() {
    return (
      <ScriptLoader
        isAsync={false}
        render={() => !this.props.track() && null}
        src={this.props.src}
        verifier={this.props.verifier}
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
  track: PropTypes.func.isRequired,
  /**
   * Config overrides is an object that will override the base config of our tracking library if it uses a global object to set base library config.
   */
  configOverridesObject: PropTypes.object,
  /**
   * Is the name of the property that does the config tracking overrides
   */
  overridePropName: PropTypes.string
}

TrackingView.defaultProps = {
  overridePropName: 'utag_cfg_ovrd',
  configOverridesObject: {noview: true}
}

export default TrackingView
