import React, {Component, PropTypes} from 'react'
import DropdownMenu from './sui-topbar-composable-dropdown'
import DropdownMenuItem from './sui-topbar-composable-dropdown-item'

class TopbarComposable extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <header className='sui-Topbar'>
        <div className='sui-Topbar-left'>
          {this.props.left}
        </div>
        <div className='sui-Topbar-right'>
          {this.props.right}
        </div>
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
