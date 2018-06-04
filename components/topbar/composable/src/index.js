import PropTypes from 'prop-types'
import React, {Component} from 'react'
import DropdownMenu from './sui-topbar-composable-dropdown'
import DropdownMenuItem from './sui-topbar-composable-dropdown-item'

class TopbarComposable extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <header className="sui-Topbarmenu">
        <div className="sui-Topbarmenu-left">{this.props.left}</div>
        <div className="sui-Topbarmenu-right">{this.props.right}</div>
      </header>
    )
  }
}

TopbarComposable.displayName = 'TopbarComposable'
TopbarComposable.propTypes = {
  left: PropTypes.array,
  right: PropTypes.array
}

export {DropdownMenu, DropdownMenuItem}
export default TopbarComposable
