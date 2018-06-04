import React, {Component} from 'react'
import PropTypes from 'prop-types'

class GigyaScreenset extends Component {
  componentDidMount() {
    window.gigya.accounts.showScreenSet(this.props.screenSetOptions)
  }

  render() {
    return <div id={this.props.screenSetOptions.containerID} />
  }
}

GigyaScreenset.displayName = 'GigyaScreenset'

GigyaScreenset.propTypes = {
  screenSetOptions: PropTypes.object.isRequired
}

export default GigyaScreenset
