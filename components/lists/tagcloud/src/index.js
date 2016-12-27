import React, {PropTypes} from 'react'

const ListTagcloud = ({tags, title} = {}) =>
  <div className='sui-ListTagcloud'>
    {!!title && <h4>{title}</h4>}
    <div className='sui-ListTagcloud-title'>
      {tags.map(({link, label}, index) =>
        <a key={index} href={link} className='sui-ListTagcloud-link'>
          {label}
        </a>
      )}
    </div>
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
  })).isRequired,

  /**
   * Optional string tagcloud title
   */
  title: PropTypes.string
}

export default ListTagcloud
