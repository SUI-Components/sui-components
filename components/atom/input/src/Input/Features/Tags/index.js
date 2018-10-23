import React from 'react'
import PropTypes from 'prop-types'
import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_TAGS = `${BASE_CLASS}--withTags`
const CLASS_TAGS_CONTAINER = `${CLASS_TAGS}-container`

const TagsHoC = WrappedInput =>
  class Tags extends React.Component {
    refTagsContainer = React.createRef()
    state = {
      widthContainerTags: 0
    }
    static propTypes = {
      /* tags */
      tags: PropTypes.any,

      /* tagsCloseIcon */
      tagsCloseIcon: PropTypes.node,

      /* onRemoveTag */
      onRemoveTag: PropTypes.func
    }

    componentDidMount() {
      const {tags} = this.props
      if (tags) {
        const widthContainerTags = this.refTagsContainer.current.clientWidth
        this.setState({widthContainerTags})
      }
    }

    render() {
      const {tags, tagsCloseIcon, onRemoveTag, ...props} = this.props

      return tags && tags.length ? (
        <div className={CLASS_TAGS}>
          <div className={CLASS_TAGS_CONTAINER} ref={this.refTagsContainer}>
            {tags.map((label, index) => (
              <AtomTag
                key={index}
                closeIcon={tagsCloseIcon}
                onClose={() => onRemoveTag(index)}
                label={label}
                size={atomTagSizes.SMALL}
              />
            ))}
          </div>
          <WrappedInput {...props} />
        </div>
      ) : (
        <WrappedInput {...props} />
      )
    }
  }

export default TagsHoC
