import React, {PropTypes} from 'react'
import TagChip from '@schibstedspain/sui-tag-chip'

const ListTagcloud = ({tags} = {}) =>
  <div className='sui-ListTagcloud'>
    {tags.map(({...props}, index) =>
      <TagChip key={index} {...props} />
    )}
  </div>

ListTagcloud.displayName = 'ListTagcloud'

ListTagcloud.propTypes = {
  /**
   * List of tag objects
   */
  tags: PropTypes.arrayOf(PropTypes.shape({
    /**
     * tag text
     */
    label: PropTypes.string.isRequired,
    /**
     * URL for the tab link
     */
    link: PropTypes.string.isRequired,
    /**
     * Factory used to create navigation links
     */
    linkFactory: PropTypes.func
  })).isRequired
}

ListTagcloud.defaultProps = {
  linkFactory: ({ href, className, children } = {}) =>
    <a href={href} className={className}>{children}</a>
}

export default ListTagcloud
