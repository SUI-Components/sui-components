/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React, {Component} from 'react'
import cx from 'classnames'

class DropdownUser extends Component {
  state = {
    expanded: false,
    collapseByTouch: false
  }

  _doNothing = () => {}

  _toggleMenu = () => {
    const {expanded} = this.state

    this.setState({expanded: !expanded})
  }

  _onMouseOver = () => {
    this.setState({
      expanded: true,
      collapseByTouch: true
    })
  }

  _onMouseOut = () => {
    this.setState({
      expanded: false,
      collapseByTouch: false
    })
  }

  _renderLink = ({text, url, icon: Icon, notifications}, index) => {
    const Link = this.props.linkFactory
    return (
      <li key={`${text}-${index}`} className="sui-DropdownUserMenu-listItem">
        <Link href={url} className="sui-DropdownUserMenu-listLink" title={text}>
          <Icon svgClass="sui-DropdownUserMenu-listIcon" />
          <span className="sui-DropdownUserMenu-listText">{text}</span>
          {!!notifications && (
            <span className="sui-DropdownUserMenu-listNotification">
              {notifications}
            </span>
          )}
        </Link>
      </li>
    )
  }

  render() {
    const {expanded, collapseByTouch} = this.state
    const {
      user,
      menu,
      expandOnMouseOver,
      hasNotifications = this.props.menu.some(({notifications}) =>
        Boolean(notifications)
      )
    } = this.props
    const {name, avatar} = user
    const wrapperClassName = cx('sui-DropdownUser', {
      'is-expanded': expanded,
      'has-notifications': hasNotifications
    })
    return (
      <div
        className={wrapperClassName}
        onMouseOver={expandOnMouseOver ? this._onMouseOver : this._doNothing}
        onMouseOut={expandOnMouseOver ? this._onMouseOut : this._doNothing}
      >
        <div
          className="sui-DropdownUser-button"
          onClick={expandOnMouseOver ? this._doNothing : this._toggleMenu}
          onTouchStart={
            expandOnMouseOver && collapseByTouch
              ? this._toggleMenu
              : this._doNothing
          }
        >
          <div className="sui-DropdownUser-buttonAvatarWrap">
            <img
              className="sui-DropdownUser-buttonAvatar"
              src={avatar}
              alt={`${name}-avatar`}
            />
          </div>
          <span className="sui-DropdownUser-buttonText">{name}</span>
        </div>
        <div className="sui-DropdownUserMenu-wrap">
          <div className="sui-DropdownUserMenu">
            <ul className={'sui-DropdownUserMenu-list'}>
              {menu.map(this._renderLink)}
            </ul>
          </div>
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
  menu: PropTypes.arrayOf(
    PropTypes.shape({
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
      icon: PropTypes.func.isRequired,
      /**
       * Menu links notification.
       */
      notifications: PropTypes.number
    })
  ).isRequired,
  /**
   * Flag to expand on mouse over event.
   */
  expandOnMouseOver: PropTypes.bool,
  /**
   * Factory for the component that will hold the menu links.
   */
  linkFactory: PropTypes.func,
  /**
   * Hasnotifications to show a badge notification.
   */
  hasNotifications: PropTypes.bool
}

DropdownUser.defaultProps = {
  expandOnMouseOver: false,
  linkFactory: ({href, className, children, title}) => (
    <a href={href} className={className} title={title}>
      {children}
    </a>
  )
}

export default DropdownUser
