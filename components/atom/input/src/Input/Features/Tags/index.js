/* eslint-disable react/prop-types, no-unused-vars, no-console, no-debugger */
import React from 'react'
import PropTypes from 'prop-types'
import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_TAGS = `${BASE_CLASS}--withTags`
const CLASS_TAGS_CONTAINER = `${CLASS_TAGS}-container`
const CLASS_TAGS_FOCUS = `${CLASS_TAGS}--focus`

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
      onRemoveTag: PropTypes.func,

      /* onAddTag */
      onAddTag: PropTypes.func
    }

    state = {
      focus: false
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

    handleFocusIn = () => {
      this.setState({focus: true})
    }

    handleFocusOut = () => {
      this.setState({focus: false})
    }

    render() {
      const {tags, tagsCloseIcon, onRemoveTag, onAddTag, ...props} = this.props
      const {focus} = this.state
      return (tags && tags.length) || onAddTag ? (
        <div
          className={cx(
            CLASS_TAGS,
            focus && CLASS_TAGS_FOCUS,
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
          <WrappedInput
            {...props}
            onEnter={this.handleAddTag}
            onFocus={this.handleFocusIn}
            onBlur={this.handleFocusOut}
          />
        </div>
      ) : (
        <WrappedInput {...props} />
      )
    }
  }

export default TagsHoC
