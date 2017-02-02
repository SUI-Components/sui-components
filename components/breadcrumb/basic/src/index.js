import React, {PropTypes} from 'react'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'

export default function BreadcrumbBasic (props) {
  const {
    links,
    icon
  } = props
  const IconAngle = icon || Chevronright
  const numLinks = links.length - 1
  return (
    <ul className='sui-BreadcrumbBasic'>
      {links.map(({link, label}, index) =>
        <li className='sui-BreadcrumbBasic-listItem'>
          <a key={index} href={link} className='sui-BreadcrumbBasic-link'>
            {label}
          </a>
          { index < numLinks && <IconAngle svgClass='sui-CardArticle-commentsIcon' /> }
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
    link: PropTypes.string.isRequired
  })).isRequired,
  /**
   * Comments custom icon (React component).
   */
  icon: PropTypes.func
}
