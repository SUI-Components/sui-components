import {Component} from 'react'
import PropTypes from 'prop-types'
import { loadScript } from './helper.js'

class ScriptLoader extends Component {
  state = {readyToRender: false}

  componentDidMount () {
    const { src, verifier, isAsync } = this.props
    loadScript({ src, verifier, isAsync }).then(() => this.setState({'readyToRender': true}))
  }

  render () {
    return this.state.readyToRender && this.props.render()
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
   * If the script should be marked as async or not
   */
  isAsync: PropTypes.bool
}

ScriptLoader.defaultProps = {
  isAsync: true
}

export default ScriptLoader
