import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import cx from 'classnames'

class LinkBasic extends Component {
  _renderContent () {
    const { icon, literal } = this.props
    return icon && literal ? <span>{icon}{literal}</span> : literal || icon
  }

  render () {
    const className = cx('sui-LinkBasic', this.props.className)

    const {
      disabled,
      handleClick,
      rel,
      target,
      title,
      useReactRouterLinks,
      url
    } = this.props

    if (disabled) {
      return (
        <span
          className={className}
          onClick={handleClick}
          title={title}
        >
          {this._renderContent()}
        </span>
      )
    }

    if (useReactRouterLinks) {
      return (
        <Link
          className={className}
          onClick={handleClick}
          rel={rel}
          target={target}
          title={title}
          to={url}
        >
          {this._renderContent()}
        </Link>
      )
    }

    return (
      <a
        className={className}
        href={url}
        onClick={handleClick}
        rel={rel}
        target={target}
        title={title}
      >
        {this._renderContent()}
      </a>
    )
  }
}

LinkBasic.displayName = 'LinkBasic'

LinkBasic.defaultProps = {
  url: '#'
}

LinkBasic.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  icon: PropTypes.element,
  literal: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  useReactRouterLinks: PropTypes.bool
}

export default LinkBasic
