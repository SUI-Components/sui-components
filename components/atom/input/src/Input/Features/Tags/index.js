import React from 'react'
import PropTypes from 'prop-types'
import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'
import {inputSizes} from '../../Component'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_TAGS = `${BASE_CLASS}--withTags`
const CLASS_TAGS_FOCUS = `${CLASS_TAGS}--focus`
const CLASS_TAGS_ERROR = `${CLASS_TAGS}--error`
const CLASS_TAGS_SUCCESS = `${CLASS_TAGS}--success`

// eslint-disable-next-line react/prop-types
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

    static defaultProps = {
      size: inputSizes.MEDIUM
    }

    state = {
      focus: false
    }

    getClassNames = (focus, size, errorState) => {
      return cx(CLASS_TAGS, {
        [CLASS_TAGS_FOCUS]: focus === true,
        [CLASS_TAGS_ERROR]: errorState === true,
        [CLASS_TAGS_SUCCESS]: errorState === false,
        [`${CLASS_TAGS}-${size}`]: size
      })
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
      if (value && onAddTag) onAddTag(value)
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
          className={this.getClassNames(focus, props.size, props.errorState)}
        >
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
