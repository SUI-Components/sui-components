import React, {PropTypes} from 'react'

const ListTagcloud = ({tags, title} = {}) =>
  <div className='sui-ListTagcloud'>
    {tags.map(({link, label}, index) =>
      <a key={index} href={link} className='sui-ListTagcloud-link'>
        {label}
      </a>
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
    link: PropTypes.string.isRequired
  })).isRequired
}

export default ListTagcloud
