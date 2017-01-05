/* eslint-disable react/prop-types */
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class DropdownBasic extends Component {
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

  _renderMenuItem = ({ title, links }, index) => (
    <div key={index} className={'sui-DropdownBasicMenu-item'}>
      {title &&
        <header className={'sui-DropdownBasicMenu-title'}>{title}</header>
      }
      <ul className={'sui-DropdownBasicMenu-list'}>
        {links.map(this._renderLink)}
      </ul>
    </div>
  )

  _renderLink = ({ text, url }, index) => {
    const Link = this.props.linkFactory

    return (
      <li key={index} className='sui-DropdownBasicMenu-listItem'>
        <Link href={url} className='sui-DropdownBasicMenu-listLink'>
          {text}
        </Link>
      </li>
    )
  }

  render () {
    const { expanded, collapseByTouch } = this.state
    const { button, menu, expandOnMouseOver } = this.props
    const { text } = button
    const Icon = button.icon
    const wrapperClassName = cx('sui-DropdownBasic', {
      'is-expanded': expanded
    })

    return (
      <div
        className={wrapperClassName}
        onMouseOver={expandOnMouseOver ? this._onMouseOver : this._doNothing}
        onMouseOut={expandOnMouseOver ? this._onMouseOut : this._doNothing}
      >
        <button
          className='sui-DropdownBasic-button'
          onClick={expandOnMouseOver ? this._doNothing : this._toggleMenu}
          onTouchStart={expandOnMouseOver && collapseByTouch
            ? this._toggleMenu
            : this._doNothing
          }
        >
          {Icon && <Icon svgClass='sui-DropdownBasic-buttonIcon' />}
          {text}
        </button>
        <div className='sui-DropdownBasicMenu'>
          {menu.map(this._renderMenuItem)}
        </div>
      </div>
    )
  }
}

DropdownBasic.displayName = 'DropdownBasic'

DropdownBasic.propTypes = {
  button: PropTypes.shape({
    icon: PropTypes.func,
    text: PropTypes.string.isRequired
  }),
  menu: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }))
  })).isRequired,
  expandOnMouseOver: PropTypes.bool,
  linkFactory: PropTypes.func
}

DropdownBasic.defaultProps = {
  expandOnMouseOver: false,
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}

export default DropdownBasic
