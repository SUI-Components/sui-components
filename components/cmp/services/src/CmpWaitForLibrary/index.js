import {Component} from 'react'
import PropTypes from 'prop-types'

export class CmpWaitForLibrary extends Component {
  state = {cmpReady: this.props.cmpReady}

  componentDidMount() {
    // check if the cmp is already ready in order to
    // avoid adding listeneres and check its availability
    if (this.props.cmpReady === true) return

    // if the cmp global object is undefined, add listeners to prepare when is available
    if (typeof window.__cmp === 'undefined') {
      this._addCmpReadyListener()
    } else {
      // if we have a stub cmp global object, then check if it's ready
      // if it's not ready, then wait for the listener
      window.__cmp('ping', null, ({cmpLoaded}) => {
        cmpLoaded === true ? this._activateCmp() : this._addCmpReadyListener()
      })
    }
  }

  _activateCmp = () => {
    this.setState({cmpReady: true})
    document.removeEventListener('cmpReady', this._activateCmp)
  }
  _addCmpReadyListener = () => {
    document.addEventListener('cmpReady', this._activateCmp)
  }

  componentWillUnmount() {
    document.removeEventListener('cmpReady', this._activateCmp)
  }

  render() {
    if (this.state.cmpReady === false) return null
    return this.props.children
  }
}

CmpWaitForLibrary.defaultProps = {
  cmpReady: false
}

CmpWaitForLibrary.propTypes = {
  children: PropTypes.any,
  cmpReady: PropTypes.bool
}
