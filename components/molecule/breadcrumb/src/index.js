/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React, {useState} from 'react'
import Chevronright from '@s-ui/react-icons/lib/Chevronright'
import cx from 'classnames'

const breadcrumbClassName = ({isExpanded, isScrollable}) =>
  cx('sui-BreadcrumbBasic', {
    'is-expanded': isExpanded,
    'is-scrollable': isScrollable
  })

export default function BreadcrumbBasic({
  items,
  icon,
  linkFactory: Link,
  isScrollable = false
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandBreadcrumb = () => setIsExpanded(true)

  const IconAngle = icon || Chevronright
  const numItems = items.length - 1

  return (
    <nav aria-label="breadcrumb" role="navigation">
      <div className={breadcrumbClassName({isExpanded, isScrollable})}>
        <button onClick={expandBreadcrumb} className="sui-BreadcrumbBasic-btn">
          ...
        </button>
        <ul className="sui-BreadcrumbBasic-list">
          {items.map(({url, label}, index) => (
            <li className="sui-BreadcrumbBasic-listItem" key={index}>
              {index !== 0 && index <= numItems && (
                <IconAngle svgClass="sui-BreadcrumbBasic-icon" />
              )}
              {url ? (
                <Link to={url} href={url} className="sui-BreadcrumbBasic-link">
                  {label}
                </Link>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

BreadcrumbBasic.displayName = 'BreadcrumbBasic'

BreadcrumbBasic.propTypes = {
  /**
   * List of link objects
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * link text
       */
      label: PropTypes.string.isRequired,
      /**
       * URL for the link
       */
      url: PropTypes.string
    })
  ).isRequired,
  /**
   * Comments custom icon (React component).
   */
  icon: PropTypes.func,
  /**
   * Function for creating links so it allows to customize it
   */
  linkFactory: PropTypes.func,
  /**
   * Boolean that allows us to show the items with a horizontal scroll
   */
  isScrollable: PropTypes.bool
}

BreadcrumbBasic.defaultProps = {
  linkFactory: ({to, href, className, children}) => (
    <a href={to || href} className={className}>
      {children}
    </a>
  )
}
