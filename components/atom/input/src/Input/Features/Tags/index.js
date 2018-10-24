/* eslint-disable react/prop-types, no-unused-vars, no-console, no-debugger */
import React from 'react'
import PropTypes from 'prop-types'
import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_TAGS = `${BASE_CLASS}--withTags`
const CLASS_TAGS_CONTAINER = `${CLASS_TAGS}-container`

const TagsHoC = WrappedInput =>
  class Tags extends React.Component {
    static propTypes = {
      /* tags */
      tags: PropTypes.any,

      /* tagsCloseIcon */
      tagsCloseIcon: PropTypes.node,

      /* onRemoveTag */
      onRemoveTag: PropTypes.func
    }

    render() {
      const {tags, tagsCloseIcon, onRemoveTag, ...props} = this.props
      return tags && tags.length ? (
        <div className={cx(CLASS_TAGS)}>
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
