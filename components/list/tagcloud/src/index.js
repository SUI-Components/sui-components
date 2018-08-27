import PropTypes from 'prop-types'
import React from 'react'
import TagChip from '@schibstedspain/sui-tag-chip'

const ListTagcloud = ({tags, linkFactory}) => (
  <div className="sui-ListTagcloud">
    {tags.map((tagProps, index) => (
      <TagChip key={index} linkFactory={linkFactory} {...tagProps} />
    ))}
  </div>
)

ListTagcloud.displayName = 'ListTagcloud'

ListTagcloud.propTypes = {
  /**
   * List of tag objects
   */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * tag text
       */
      label: PropTypes.node.isRequired,
      /**
       * URL for the tab link
       */
      link: PropTypes.string
    })
  ).isRequired,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func
}

ListTagcloud.defaultProps = {
  linkFactory: ({href, className, children} = {}) => (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default ListTagcloud
