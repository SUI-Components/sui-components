import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TrackingView extends Component {
  componentDidMount() {}

  shouldComponentUpdate() {
    return false
  }
  render() {
    return null
  }
}

TrackingView.displayName = 'TrackingView'

// Remove these comments if you need
// TrackingView.contextTypes = {i18n: PropTypes.object}
// TrackingView.propTypes = {}
// TrackingView.defaultProps = {}

export default TrackingView
