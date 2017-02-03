/* eslint-disable react/prop-types */
import React, {PropTypes} from 'react'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'

export default function BreadcrumbBasic (props) {
  const {
    links,
    icon
  } = props
  const Link = props.linkFactory
  const IconAngle = icon || Chevronright
  const numLinks = links.length - 1
  return (
    <ul className='sui-BreadcrumbBasic'>
      {links.map(({url, label}, index) =>
        <li className='sui-BreadcrumbBasic-listItem' key={index}>
          <Link href={url} className='sui-BreadcrumbBasic-link'>
            {label}
          </Link>
          { index < numLinks && <IconAngle svgClass='sui-BreadcrumbBasic-icon' /> }
        </li>
      )}
    </ul>
  )
}
BreadcrumbBasic.displayName = 'BreadcrumbBasic'

BreadcrumbBasic.propTypes = {
  /**
   * List of link objects
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    /**
     * link text
     */
    label: PropTypes.string.isRequired,
    /**
     * URL for the link
     */
    url: PropTypes.string.isRequired
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
