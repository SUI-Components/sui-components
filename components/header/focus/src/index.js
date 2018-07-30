import React, {Component} from 'react'
import PropTypes from 'prop-types'

class HeaderFocus extends Component {
  render() {
    return (
      <header className="sui-HeaderFocus">
        <a className="sui-HeaderFocus-logo" href="/">
          {this.props.logo}
        </a>
      </header>
    )
  }
}

HeaderFocus.displayName = 'HeaderFocus'

HeaderFocus.propTypes = {
  logo: PropTypes.node
}

export default HeaderFocus
