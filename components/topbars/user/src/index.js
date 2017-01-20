/* eslint-disable react/prop-types */
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Menu from '@schibstedspain/sui-svgiconset/lib/Menu'
import DropdownBasic from '@schibstedspain/sui-dropdown-basic'
import DropdownUser from '@schibstedspain/sui-dropdown-user'

const DEFAULT_NAV_WRAP_STYLE = {
  top: 'inherit',
  left: 'inherit',
  height: 'inherit',
  width: 'inherit'
}

/**
 * Topbar containing a dropdown with user data (login, logout, secured links...).
 */
class TopbarUser extends Component {
  constructor (...args) {
    super(...args)

    this._topbarUserNode = null
    this._topbarUserToggleNode = null

    this.state = {
      menuExpanded: false,
      isToggleHidden: false,
      navWrapStyle: DEFAULT_NAV_WRAP_STYLE
    }
  }

  componentDidMount () {
    this._setToggleDisplayState()
    window.addEventListener('resize', this._setToggleDisplayState)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._setToggleDisplayState)
  }

  componentWillUpdate (nextProps, { menuExpanded, isToggleHidden }) {
    if (menuExpanded && !isToggleHidden) {
      this._lockBodyScroll()
    } else {
      this._unlockBodyScroll()
    }
  }

  /**
   * Lock body element scroll.
   */
  _lockBodyScroll () {
    window.document.body.style.overflowY = 'hidden'
  }

  /**
   * Unlock body element scroll.
   */
  _unlockBodyScroll () {
    window.document.body.style.overflowY = ''
  }

  /**
   * Set the display state for toggle button.
   */
  _setToggleDisplayState = () => {
    const { display } = window.getComputedStyle(this._topbarUserToggleNode)
    const isToggleHidden = display === 'none'

    if (!isToggleHidden) { this._setNavWrapStyles() }
    if (isToggleHidden !== this.state.isToggleHidden) {
      this.setState({ isToggleHidden })
    }
  }

  /**
   * Set navigation wrap inline styles.
   */
  _setNavWrapStyles = () => {
    const { top, left, height, width } = this._topbarUserNode.getBoundingClientRect()
    const navWrapTop = top + height

    this.setState({
      navWrapStyle: {
        top: navWrapTop,
        left,
        height: window.innerHeight - navWrapTop,
        width
      }
    })
  }

  /**
   * Toggle menu state: expanded/collapsed.
   */
  _toggleMenu = () => {
    const { menuExpanded } = this.state

    this.setState({ menuExpanded: !menuExpanded })
  }

  /**
   * Render main navigation function.
   */
  _renderNavMain = ({
    icon,
    label: text,
    menu,
    arrowButtonIcon
  }, index) => {
    return (
      <DropdownBasic
        key={index}
        button={{ icon, text, arrowButtonIcon }}
        menu={menu}
        expandOnMouseOver
      />
    )
  }

  /**
   * Handle click on navigation wrap.
   */
  _handleNavWrapClick = ({ target, currentTarget }) => {
    const { menuExpanded } = this.state

    if (menuExpanded && target === currentTarget) {
      this._toggleMenu()
    }
  }

  render () {
    const { menuExpanded, isToggleHidden, navWrapStyle } = this.state
    const {
      toggleIcon: ToggleIcon,
      brand,
      navMain,
      navUser,
      navCTA,
      linkFactory: Link
    } = this.props
    const { name: brandName, url: brandUrl } = brand
    const { avatar, name, menu } = navUser
    const navWrapClassName = cx('sui-TopbarUser-navWrap', {
      'is-expanded': menuExpanded
    })

    return (
      <div
        ref={node => { this._topbarUserNode = node }}
        className='sui-TopbarUser'
      >
        <button
          ref={node => { this._topbarUserToggleNode = node }}
          className='sui-TopbarUser-toggle'
          onClick={this._toggleMenu}
        >
          <ToggleIcon svgClass='sui-TopbarUser-toggleIcon' />
        </button>
        <Link href={brandUrl} className='sui-TopbarUser-brand'>
          {brandName}
        </Link>
        <div
          className={navWrapClassName}
          style={isToggleHidden ? DEFAULT_NAV_WRAP_STYLE : navWrapStyle}
          onClick={this._handleNavWrapClick}
        >
          <div className='sui-TopbarUser-nav'>
            <div className='sui-TopbarUser-navMain'>
              {navMain.map(this._renderNavMain)}
            </div>
            <div className='sui-TopbarUser-navUser'>
              <DropdownUser
                user={{ avatar, name }}
                menu={menu}
                expandOnMouseOver
              />
            </div>
            {navCTA &&
              <div className='sui-TopbarUser-navCTA'>
                <Link href={navCTA.url} className='sui-TopbarUser-navCTALink'>
                  {navCTA.icon &&
                    <navCTA.icon svgClass='sui-TopbarUser-navCTAIcon' />
                  }
                  <span>{navCTA.text}</span>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

TopbarUser.displayName = 'TopbarUser'

TopbarUser.propTypes = {
  /**
   * Optional toggle icon.
   */
  toggleIcon: PropTypes.func,
  /**
   * Brand object.
   */
  brand: PropTypes.shape({
    /**
     * Brand url.
     */
    url: PropTypes.string.isRequired,
    /**
     * Brand name.
     */
    name: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Main navigation containing an array of dropdown menus.
   */
  navMain: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Nav optional icon.
     */
    icon: PropTypes.func,
    /**
     * Nav label.
     */
    label: PropTypes.string,
    /**
     * Nav menu.
     */
    menu: PropTypes.arrayOf(PropTypes.shape({
      /**
       * Nav menu section title.
       */
      title: PropTypes.string,
      /**
       * Nav menu section links.
       */
      links: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Menu link text.
         */
        text: PropTypes.string.isRequired,
        /**
         * Menu link url.
         */
        url: PropTypes.string.isRequired
      }))
    }))
  })),
  /**
   * Dropdown user object.
   */
  navUser: PropTypes.shape({
    /**
     * User name.
     */
    name: PropTypes.string.isRequired,
    /**
     * User avatar.
     */
    avatar: PropTypes.string.isRequired,
    /**
     * User menu.
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
    }))
  }).isRequired,
  /**
   * CTA data.
   */
  navCTA: PropTypes.shape({
    /**
     * Call to action url.
     */
    url: PropTypes.string.isRequired,
    /**
     * Call to action optional icon.
     */
    icon: PropTypes.func,
    /**
     * Call to action text.
     */
    text: PropTypes.string.isRequired
  }),
  /**
   * Factory for the component that will hold any link.
   */
  linkFactory: PropTypes.func
}

TopbarUser.defaultProps = {
  toggleIcon: Menu,
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}

export default TopbarUser
