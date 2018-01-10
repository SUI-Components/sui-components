import PropTypes from 'prop-types'
import React from 'react'
import TagChip from '@schibstedspain/sui-tag-chip'

const TagDeletableList = ({tags, onDelete} = {}) =>
  <div className='sui-TagDeletableList'>
    {tags.map(({...props}, index) =>
      <TagChip key={index} onRequestDelete={onDelete(index)} {...props} />
    )}
  </div>

TagDeletableList.displayName = 'TagDeletableList'

TagDeletableList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  /**
   * List of tag objects
   */
  tags: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired
  })).isRequired
}

TagDeletableList.displayName = 'TagDeletableList'

export default TagDeletableList
