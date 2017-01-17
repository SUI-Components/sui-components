/* eslint-disable react/prop-types */
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class DropdownUser extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      expanded: false,
      collapseByTouch: false
    }
  }

  _doNothing = () => {}

  _toggleMenu = () => {
    const { expanded } = this.state

    this.setState({ expanded: !expanded })
  }

  _onMouseOver = () => {
    this._toggleMenu()
    this.setState({ collapseByTouch: true })
  }

  _onMouseOut = () => {
    this._toggleMenu()
    this.setState({ collapseByTouch: false })
  }

  _renderLink = ({ text, url, icon: Icon }, index) => {
    const Link = this.props.linkFactory

    return (
      <li key={index} className='sui-DropdownUserMenu-listItem'>
        <Link href={url} className='sui-DropdownUserMenu-listLink'>
          <Icon svgClass='sui-DropdownUserMenu-listIcon' />
          <span>{text}</span>
        </Link>
      </li>
    )
  }

  render () {
    const { expanded, collapseByTouch } = this.state
    const { user, menu, expandOnMouseOver } = this.props
    const { name, avatar } = user
    const wrapperClassName = cx('sui-DropdownUser', {
      'is-expanded': expanded
    })

    return (
      <div
        className={wrapperClassName}
        onMouseOver={expandOnMouseOver ? this._onMouseOver : this._doNothing}
        onMouseOut={expandOnMouseOver ? this._onMouseOut : this._doNothing}
      >
        <div className='sui-DropdownUser-buttonWrap'>
          <div
            className='sui-DropdownUser-button'
            onClick={expandOnMouseOver ? this._doNothing : this._toggleMenu}
            onTouchStart={expandOnMouseOver && collapseByTouch
              ? this._toggleMenu
              : this._doNothing
            }
          >
            <img className='sui-DropdownUser-buttonAvatar' src={avatar} />
            <span className='sui-DropdownUser-buttonText'>{name}</span>
          </div>
        </div>
        <div className='sui-DropdownUserMenu'>
          <ul className={'sui-DropdownUserMenu-list'}>
            {menu.map(this._renderLink)}
          </ul>
        </div>
      </div>
    )
  }
}

DropdownUser.displayName = 'DropdownUser'

DropdownUser.propTypes = {
  /**
   * Dropdown user object.
   */
  user: PropTypes.shape({
    /**
     * User name.
     */
    name: PropTypes.string.isRequired,
    /**
     * User avatar.
     */
    avatar: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Dropdown user menu.
   */
  menu: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Menu links text.
     */
    text: PropTypes.string.isRequired,
    /**
     * Menu links url.
     */
    url: PropTypes.string.isRequired,
    /**
     * Menu links icon.
     */
    icon: PropTypes.func.isRequired
  })).isRequired,
  /**
   * Flag to expand on mouse over event.
   */
  expandOnMouseOver: PropTypes.bool,
  /**
   * Factory for the component that will hold the menu links.
   */
  linkFactory: PropTypes.func
}

DropdownUser.defaultProps = {
  expandOnMouseOver: false,
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}

export default DropdownUser
