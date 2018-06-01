/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React, {Component} from 'react'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

/**
 * Dropdown menu containing sections of links, triggered from a simple button
 * with an optional icon.
 */
class DropdownBasic extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      expanded: false,
      collapseByTouch: false
    }
  }

  /**
   * Empty function.
   */
  _doNothing = () => {}

  /**
   * Toggle menu state: expanded/collapsed.
   */
  _toggleMenu = () => {
    const {expanded} = this.state

    this.setState({expanded: !expanded})
  }

  /**
   * Mouser over event handler.
   */
  _onMouseOver = () => {
    this.setState({
      expanded: true,
      collapseByTouch: true
    })
  }

  /**
   * Mouser out event handler.
   */
  _onMouseOut = () => {
    this.setState({
      expanded: false,
      collapseByTouch: false
    })
  }

  /**
   * Function rendering menu element.
   */
  _renderMenuItem = ({title, links}, index) => (
    <div key={index} className={'sui-DropdownBasicMenu-item'}>
      {title && (
        <header className={'sui-DropdownBasicMenu-title'}>{title}</header>
      )}
      <ul className={'sui-DropdownBasicMenu-list'}>
        {links.map(this._renderLink)}
      </ul>
    </div>
  )

  /**
   * Function rendering a simple list item link.
   */
  _renderLink = ({text, url, target}, index) => {
    const Link = this.props.linkFactory

    return (
      <li key={index} className="sui-DropdownBasicMenu-listItem">
        <Link
          href={url}
          className="sui-DropdownBasicMenu-listLink"
          target={target}
          title={text}
        >
          {text}
        </Link>
      </li>
    )
  }

  render() {
    const {expanded, collapseByTouch} = this.state
    const {button, menu, expandOnMouseOver} = this.props
    const {text, icon: Icon} = button
    const ArrowButtonIcon = button.arrowButtonIcon || Chevronbottom
    const wrapperClassName = cx('sui-DropdownBasic', {
      'is-expanded': expanded
    })
    return (
      <div
        className={wrapperClassName}
        onMouseOver={expandOnMouseOver ? this._onMouseOver : this._doNothing}
        onMouseOut={expandOnMouseOver ? this._onMouseOut : this._doNothing}
      >
        <div className="sui-DropdownBasic-buttonWrap">
          <button
            className="sui-DropdownBasic-button"
            onClick={expandOnMouseOver ? this._doNothing : this._toggleMenu}
            onTouchStart={
              expandOnMouseOver && collapseByTouch
                ? this._toggleMenu
                : this._doNothing
            }
          >
            <div className="sui-DropdownBasic-buttonContent">
              {Icon && <Icon svgClass="sui-DropdownBasic-buttonIcon" />}
              <span>{text}</span>
            </div>
            <ArrowButtonIcon svgClass="sui-DropdownBasic-buttonIcon" />
          </button>
        </div>
        <div className="sui-DropdownBasicMenu">
          {menu.map(this._renderMenuItem)}
        </div>
      </div>
    )
  }
}

DropdownBasic.displayName = 'DropdownBasic'

DropdownBasic.propTypes = {
  /**
   * Dropdown button object.
   */
  button: PropTypes.shape({
    /**
     * Optional button icon.
     */
    icon: PropTypes.func,
    /**
     * Button text.
     */
    text: PropTypes.string.isRequired,
    /**
     * Optional arrow button icon.
     */
    arrowButtonIcon: PropTypes.func
  }),
  /**
   * Menu array of sections.
   */
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Menu section title.
       */
      title: PropTypes.string,
      /**
       * Menu section links.
       */
      links: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Link text.
           */
          text: PropTypes.string.isRequired,
          /**
           * Link url.
           */
          url: PropTypes.string.isRequired,
          /**
           * Link target.
           */
          target: PropTypes.string
        })
      )
    })
  ).isRequired,
  /**
   * Flag to expand on mouse over event.
   */
  expandOnMouseOver: PropTypes.bool,
  /**
   * Factory for the component that will hold the menu links.
   */
  linkFactory: PropTypes.func
}

DropdownBasic.defaultProps = {
  expandOnMouseOver: false,
  linkFactory: ({href, className, children, title, target}) => (
    <a href={href} className={className} target={target} title={title}>
      {children}
    </a>
  )
}

export default DropdownBasic
