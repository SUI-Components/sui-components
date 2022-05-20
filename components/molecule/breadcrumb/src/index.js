/* eslint-disable react/prop-types */
import {useState} from 'react'
import PropTypes from 'prop-types'
import Chevronright from '@s-ui/react-icons/lib/Chevronright'

import {breadcrumbClassName, BASE_CLASS} from './settings.js'

const BreadcrumbBasic = ({
  items,
  icon,
  linkFactory: Link,
  isScrollable = false,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandBreadcrumb = () => setIsExpanded(true)

  const IconAngle = icon || Chevronright
  const numItems = items.length - 1

  return (
    <nav aria-label="breadcrumb" role="navigation">
      <div className={breadcrumbClassName({isExpanded, isScrollable})}>
        {children && <div className={`${BASE_CLASS}-children`}>{children}</div>}
        <button onClick={expandBreadcrumb} className={`${BASE_CLASS}-btn`}>
          ...
        </button>
        <ul className={`${BASE_CLASS}-list`}>
          {items.map(({url, label}, index) => (
            <li className={`${BASE_CLASS}-listItem`} key={index}>
              {index !== 0 && index <= numItems && (
                <IconAngle svgClass={`${BASE_CLASS}-icon`} />
              )}
              {url ? (
                <Link to={url} href={url} className={`${BASE_CLASS}-link`}>
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
  isScrollable: PropTypes.bool,
  /**
   * Children to render before breadcrumb
   */
  children: PropTypes.node
}

BreadcrumbBasic.defaultProps = {
  linkFactory: ({to, href, className, children}) => (
    <a href={to || href} className={className}>
      {children}
    </a>
  )
}

export default BreadcrumbBasic
