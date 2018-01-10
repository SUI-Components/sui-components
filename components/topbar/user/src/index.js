/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React, { Component } from 'react'
import cx from 'classnames'
import Menu from '@schibstedspain/sui-svgiconset/lib/Menu'
import DropdownBasic from '@schibstedspain/sui-dropdown-basic'
import DropdownUser from '@schibstedspain/sui-dropdown-user'
import AtomButton from '@schibstedspain/sui-atom-button'

const DEFAULT_NAV_WRAP_STYLE = {
  top: 'inherit',
  left: 'inherit',
  height: 'inherit',
  width: 'inherit'
}
const HTML_HAS_SCROLL_DISABLED = 'html-has-scroll-disabled'
const BODY_HAS_SCROLL_DISABLED = 'body-has-scroll-disabled'

/**
 * Topbar containing a dropdown with user data (login, logout, secured links...).
 */
class TopbarUser extends Component {
  constructor (...args) {
    super(...args)

    this._topbarUserNode = null
    this._topbarUserToggleNode = null
    this._verticalScrollPosition = null

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
  _lockBodyScroll = () => {
    const { elementsToKeepScrollOnToggleMenu } = this.props
    this._verticalScrollPosition = window.scrollY
    const transformStyleToKeepScroll = `translate3d(0, -${this._verticalScrollPosition}px, 0)`
    window.document.documentElement.classList.add(HTML_HAS_SCROLL_DISABLED)
    window.document.body.classList.add(BODY_HAS_SCROLL_DISABLED)
    elementsToKeepScrollOnToggleMenu.forEach(selector => {
      document.querySelector(selector).style.transform = transformStyleToKeepScroll
    })
  }

  /**
   * Unlock body element scroll.
   */
  _unlockBodyScroll = () => {
    const { elementsToKeepScrollOnToggleMenu } = this.props
    elementsToKeepScrollOnToggleMenu.forEach(selector => {
      document.querySelector(selector).style.transform = ''
    })
    window.document.documentElement.classList.remove(HTML_HAS_SCROLL_DISABLED)
    window.document.body.classList.remove(BODY_HAS_SCROLL_DISABLED)
    elementsToKeepScrollOnToggleMenu.length && window.scrollTo(0, this._verticalScrollPosition)
  }

  /**
   * Set the display state for toggle button.
   */
  _setToggleDisplayState = () => {
    // Only go on if user has been resized the browser window horizontally.
    if (window.innerWidth === this._windowWidth) return
    // Then save the new global value again.
    this._windowWidth = window.innerWidth
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
  _renderNavMain = isToggleHidden => ({
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
        expandOnMouseOver={isToggleHidden}
        linkFactory={this.props.linkFactory}
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
    const hasNotifications = navUser.menu.some(({ notifications }) => Boolean(notifications))
    const toggleMenuClassName = cx('sui-TopbarUser-toggle', {
      'has-notifications': hasNotifications
    })
    const { icon: NavCtaIcon, url: navCtaUrl, text: navCtaText } = navCTA

    return (
      <div
        ref={node => { this._topbarUserNode = node }}
        className='sui-TopbarUser'
      >
        <div className='sui-TopbarUser-wrap'>
          <button
            ref={node => { this._topbarUserToggleNode = node }}
            className={toggleMenuClassName}
            onClick={this._toggleMenu}
          >
            <ToggleIcon svgClass='sui-TopbarUser-toggleIcon' />
          </button>
          <Link href={brandUrl} className='sui-TopbarUser-brand' title={brandName}>
            {brandName}
          </Link>
          <div
            className={navWrapClassName}
            style={isToggleHidden ? DEFAULT_NAV_WRAP_STYLE : navWrapStyle}
            onClick={this._handleNavWrapClick}
          >
            <div className='sui-TopbarUser-nav'>
              <div className='sui-TopbarUser-navMain'>
                {navMain.map(this._renderNavMain(isToggleHidden))}
                <div className='sui-TopbarUser-ctaText'>
                  <Link href={navCtaUrl} className='sui-TopbarUser-ctaTextLink' title={navCtaText}>
                    {NavCtaIcon && <NavCtaIcon svgClass='sui-TopbarUser-ctaTextIcon' />}
                    <span>{navCtaText}</span>
                  </Link>
                </div>
              </div>
              <div className='sui-TopbarUser-navUser'>
                <DropdownUser
                  user={{ avatar, name }}
                  menu={menu}
                  expandOnMouseOver
                  hasNotifications={hasNotifications && !menuExpanded}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='sui-TopbarUser-ctaButton'>
          <AtomButton
            link
            href={navCtaUrl}
            title={navCtaText}
            leftIcon={<navCTA.icon svgClass='sui-TopbarUser-ctaButtonIcon' />}
            size='small'
            type='accent'
          >
            {navCtaText}
          </AtomButton>
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
  linkFactory: PropTypes.func,
  /**
   * Array of elements to keep scroll while side menu is being toggled (since
   * we are fixing the `body` element position due to momentum scrolling on iOS).
   */
  elementsToKeepScrollOnToggleMenu: PropTypes.arrayOf(PropTypes.string)
}

TopbarUser.defaultProps = {
  toggleIcon: Menu,
  linkFactory: ({ href, className, children, title }) =>
    <a href={href} className={className} title={title}>{children}</a>,
  elementsToKeepScrollOnToggleMenu: []
}

export default TopbarUser
