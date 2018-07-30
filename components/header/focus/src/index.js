import React, {Component} from 'react'
import PropTypes from 'prop-types'

const TYPES = {
  SIMPLE: 'simple',
  MOBILE: 'mobile'
}

class HeaderFocus extends Component {
  render() {
    return <header className="sui-HeaderFocus">HeaderFocus</header>
  }
}

HeaderFocus.displayName = 'HeaderFocus'

HeaderFocus.propTypes = {
  type: PropTypes.string
}
HeaderFocus.defaultProps = {
  type: TYPES.SIMPLE
}

export default HeaderFocus
