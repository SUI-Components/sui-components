/* eslint-disable react/prop-types, no-unused-vars, no-console, no-debugger */
import React from 'react'
import PropTypes from 'prop-types'
import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_TAGS = `${BASE_CLASS}--withTags`
const CLASS_TAGS_CONTAINER = `${CLASS_TAGS}-container`

// As suggested here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#lists-of-items
const AtomTagItem = ({onClose, id, ...props}) => {
  const _onClose = e => {
    onClose && onClose(id)
  }
  return <AtomTag onClose={_onClose} {...props} />
}

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

    handleRemoveTag = index => {
      const {onRemoveTag} = this.props
      onRemoveTag && onRemoveTag(index)
    }

    handleAddTag = ev => {
      const {onAddTag} = this.props
      const {
        target: {value}
      } = ev
      onAddTag && onAddTag(value)
    }

    render() {
      const {tags, tagsCloseIcon, onRemoveTag, onAddTag, ...props} = this.props

      return (tags && tags.length) || onAddTag ? (
        <div
          className={cx(
            CLASS_TAGS,
            props.size && `${CLASS_TAGS}-${props.size}`,
            props.errorState &&
              `${CLASS_TAGS}--${props.errorState ? 'error' : 'success'}`
          )}
        >
          <div className={CLASS_TAGS_CONTAINER} ref={this.refTagsContainer}>
            {tags.map((label, index) => (
              <AtomTagItem
                key={index}
                id={index}
                closeIcon={tagsCloseIcon}
                onClose={this.handleRemoveTag}
                label={label}
                size={atomTagSizes.SMALL}
              />
            ))}
          </div>
          <WrappedInput {...props} onEnter={this.handleAddTag} />
        </div>
      ) : (
        <WrappedInput {...props} />
      )
    }
  }

export default TagsHoC
