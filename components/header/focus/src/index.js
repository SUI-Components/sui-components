import React, {Component} from 'react'
import PropTypes from 'prop-types'

class HeaderFocus extends Component {
  render() {
    const {href, logo} = this.props
    return (
      <header className="sui-HeaderFocus">
        <a className="sui-HeaderFocus-logo" href={href}>
          {logo}
        </a>
      </header>
    )
  }
}

HeaderFocus.displayName = 'HeaderFocus'

HeaderFocus.propTypes = {
  logo: PropTypes.node.isRequired,
  href: PropTypes.string
}

HeaderFocus.defaultProps = {
  href: '/'
}

export default HeaderFocus
