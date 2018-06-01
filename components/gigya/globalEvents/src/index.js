import {Component} from 'react'
import PropTypes from 'prop-types'
import {
  initListener,
  addOnLoginSubscriber,
  removeOnLoginSubscriber,
  addOnLogoutSubscriber,
  removeOnLogoutSubscriber
} from './helper'

class GigyaGlobalEvents extends Component {
  _registerEvents = ({onLogin, onLogout}) => {
    onLogin && addOnLoginSubscriber(onLogin)
    onLogout && addOnLogoutSubscriber(onLogout)
  }

  _unregisterEvents = ({onLogin, onLogout}) => {
    onLogin && removeOnLoginSubscriber(onLogin)
    onLogout && removeOnLogoutSubscriber(onLogout)
  }

  componentWillReceiveProps(nextProps) {
    this._unregisterEvents(this.props)
    this._registerEvents(nextProps)
  }

  componentWillMount() {
    initListener()
    this._registerEvents(this.props)
  }

  componentWillUnmount() {
    this._unregisterEvents(this.props)
  }

  render() {
    return null
  }
}

GigyaGlobalEvents.displayName = 'GigyaGlobalEvents'

GigyaGlobalEvents.propTypes = {
  /**
   * A listener to be executed onLogin gigya event
   */
  onLogin: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /**
   * A listener to be executed onLogout gigya event
   */
  onLogout: PropTypes.func // eslint-disable-line react/no-unused-prop-types
}

GigyaGlobalEvents.defaultProps = {
  onLogin: null,
  onLogout: null
}

export default GigyaGlobalEvents
