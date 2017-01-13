import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Menu from '@schibstedspain/sui-svgiconset/lib/Menu'
import DropdownBasic from '@schibstedspain/sui-dropdown-basic'

const DEFAULT_NAV_WRAP_STYLE = {
  top: 'inherit',
  left: 'inherit',
  height: 'inherit',
  width: 'inherit'
}

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

  _setToggleDisplayState = () => {
    const { display } = window.getComputedStyle(this._topbarUserToggleNode)
    const isToggleHidden = display === 'none'

    if (!isToggleHidden) { this._setNavWrapStyles() }
    if (isToggleHidden !== this.state.isToggleHidden) {
      this.setState({ isToggleHidden })
    }
  }

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

  _renderNavMain = ({ icon, label: text, menu }, index) => {
    return (
      <DropdownBasic
        key={index}
        button={{ icon, text }}
        menu={menu}
        expandOnMouseOver
      />
    )
  }

  render () {
    const { menuExpanded, isToggleHidden, navWrapStyle } = this.state
    const { toggleIcon: ToggleIcon, brandName, navMain } = this.props
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
        <button className='sui-TopbarUser-brand'>{brandName}</button>
        <div
          className={navWrapClassName}
          style={isToggleHidden ? DEFAULT_NAV_WRAP_STYLE : navWrapStyle}
        >
          <div className='sui-TopbarUser-nav'>
            <div className='sui-TopbarUser-navMain'>
              {navMain.map(this._renderNavMain)}
            </div>
            <div className='sui-TopbarUser-user' />
            <div className='sui-TopbarUser-navSecondary' />
          </div>
        </div>
      </div>
    )
  }
}

TopbarUser.displayName = 'TopbarUser'

TopbarUser.propTypes = {
  toggleIcon: PropTypes.func,
  brandName: PropTypes.string.isRequired,
  navMain: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.func,
    label: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.shape({
      /**
       * Main nav menu section title.
       */
      title: PropTypes.string,
      /**
       * Main nav menu section links.
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
  }))
}

TopbarUser.defaultProps = {
  toggleIcon: Menu
}

export default TopbarUser
