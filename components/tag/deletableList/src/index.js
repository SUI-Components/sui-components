import React, {PropTypes} from 'react'
import TagChip from '@schibstedspain/sui-tag-chip'

class TagDeletableList extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      myTags: this.props.tags
    }
  }

  _handleDelete = ({index, onChange}) => () => {
    const myTags = [
        ...this.state.myTags.slice(0, index),
        ...this.state.myTags.slice(index + 1)
      ]

    this.setState({myTags}) 
    onChange(myTags)
  }

  render () {
    const { props: {onChange = () => {}}, state: { myTags }, _handleDelete } = this
    return (
      <div className='sui-TagDeletableList'>
        {myTags.map(({...props}, index) =>
          <TagChip key={index} onRequestDelete={(_handleDelete({index, onChange}))} {...props} />
        )}
      </div>
    )
  }
}

TagDeletableList.displayName = 'TagDeletableList'

TagDeletableList.propTypes = {
  onChange: PropTypes.func.isRequired,
  /**
   * List of tag objects
   */
  tags: PropTypes.arrayOf(PropTypes.shape({
    /**
     * tag text
     */
    label: PropTypes.string.isRequired
  })).isRequired
}

TagDeletableList.displayName = 'TagDeletableList'

export default TagDeletableList
