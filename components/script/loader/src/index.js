import {Component} from 'react'
import PropTypes from 'prop-types'
import { loadScript } from './helper.js'

class ScriptLoader extends Component {
  state = {
    readyToRender: false,
    timeout: false
  }

  componentDidMount () {
    const { src, verifier, isAsync, detectionDelay } = this.props

    loadScript({ src, verifier, isAsync, detectionDelay })
      .then(() => this.setState({ readyToRender: true }))
      .catch(() => this.setState({ timeout: true }))
  }

  render () {
    const { render, timeoutRender } = this.props
    const { readyToRender, timeout } = this.state

    if (readyToRender) return render()
    if (timeout) return timeoutRender()
    return null
  }
}

ScriptLoader.displayName = 'ScriptLoader'

ScriptLoader.propTypes = {
  /**
   * The script to be injected
   */
  src: PropTypes.string.isRequired,
  /**
   * A function that will return a truthy value when the resource is loaded, false otherwise
   */
  verifier: PropTypes.func.isRequired,
  /**
   * A function that will return what should be rendered when the script is loaded
   */
  render: PropTypes.func.isRequired,
  /**
   * A function that will return what should be rendered when the script is not
   * loaded within the expected time.
   */
  timeoutRender: PropTypes.func,
  /**
   * If the script should be marked as async or not
   */
  isAsync: PropTypes.bool,
  /**
   * Detection delay time (in miliseconds)
   */
  detectionDelay: PropTypes.number
}

ScriptLoader.defaultProps = {
  isAsync: true,
  timeoutRender: () => {},
  detectionDelay: 5000
}

export default ScriptLoader
