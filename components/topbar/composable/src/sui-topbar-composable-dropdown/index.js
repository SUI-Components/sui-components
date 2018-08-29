import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'

const EVENTS_TO_HANDLE = ['click', 'touchstart']

export default class DropdownMenu extends Component {
  state = {displayMenu: false}

  headerDOMEl = null

  componentDidMount() {
    EVENTS_TO_HANDLE.forEach(event =>
      document.body.addEventListener(event, this.closeMenu, false)
    )
  }

  componentWillUnmount() {
    EVENTS_TO_HANDLE.forEach(event =>
      document.body.removeEventListener(event, this.closeMenu, false)
    )
  }

  closeMenu = e => {
    if (e.target === this.headerDOMEl) {
      return
    }

    if (this.state.displayMenu === true) {
      this.setState({displayMenu: false})
    }
  }

  toggle = e => {
    e.stopPropagation()

    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.displayMenu !== this.state.displayMenu
  }

  render() {
    const activeMenu = cx('sui-DropdownMenu-wrapper', this.props.classname, {
      'sui-DropdownMenu-wrapper--active': this.state.displayMenu
    })

    const visibleDropdown = cx('sui-DropdownMenu-body', {
      'sui-DropdownMenu-body--visible': this.state.displayMenu
    })

    return (
      <div className={activeMenu}>
        <div className="sui-DropdownMenu">
          <div
            className="sui-DropdownMenu-header"
            ref={node => {
              this.headerDOMEl = node
            }}
            onClick={this.toggle}
          >
            {this.props.icon}
            {this.props.label && (
              <span className="sui-DropdownMenu-headerMainLabel">
                {this.props.label}
              </span>
            )}
            {this.props.caret}
          </div>
          <ul className={visibleDropdown}>{this.props.entries}</ul>
        </div>
      </div>
    )
  }
}

DropdownMenu.propTypes = {
  caret: PropTypes.element,
  classname: PropTypes.string,
  displayMenu: PropTypes.bool,
  entries: PropTypes.array,
  icon: PropTypes.element,
  label: PropTypes.string
}
