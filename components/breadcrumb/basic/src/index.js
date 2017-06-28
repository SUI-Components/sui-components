/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'
import cx from 'classnames'

export default class BreadcrumbBasic extends Component {
  constructor (...args) {
    super(...args)
    this.state = {isExpanded: false}
  }

  _expandBreadcrumb = () => {
    this.setState({isExpanded: true})
  }

  _inputClassName = () => cx('sui-BreadcrumbBasic', {
    'is-expanded': this.state.isExpanded
  })

  render () {
    const {
      items,
      icon,
      linkFactory: Link
    } = this.props
    const IconAngle = icon || Chevronright
    const numItems = items.length - 1
    return (
      <div className={this._inputClassName()}>
        <button
          onClick={this._expandBreadcrumb}
          className='sui-BreadcrumbBasic-btn'>...
        </button>
        <ul className='sui-BreadcrumbBasic-list'>
          {items.map(({url, label}, index) =>
            <li className='sui-BreadcrumbBasic-listItem' key={index}>
              { index !== 0 && index <= numItems && <IconAngle svgClass='sui-BreadcrumbBasic-icon' /> }
              { url ? <Link href={url} className='sui-BreadcrumbBasic-link'>{label}</Link> : label}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
BreadcrumbBasic.displayName = 'BreadcrumbBasic'

BreadcrumbBasic.propTypes = {
  /**
   * List of link objects
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * link text
     */
    label: PropTypes.string.isRequired,
    /**
     * URL for the link
     */
    url: PropTypes.string
  })).isRequired,
  /**
   * Comments custom icon (React component).
   */
  icon: PropTypes.func
}

BreadcrumbBasic.defaultProps = {
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}
