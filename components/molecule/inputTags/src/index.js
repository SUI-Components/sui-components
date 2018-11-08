import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
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

class MoleculeInputTags extends Component {
  state = {
    tags: this.props.tags,
    value: this.props.value,
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

  removeTag = indexTag => {
    const {onChangeTags} = this.props
    this.setState(
      {
        tags: this.state.tags.filter((_, i) => i !== indexTag)
      },
      () => {
        onChangeTags && onChangeTags(this.state.tags)
      }
    )
  }

  addTag = ev => {
    const {onChangeTags} = this.props
    const {
      target: {value}
    } = ev
    ev.preventDefault()
    if (value) {
      this.setState(
        {
          tags: [...this.state.tags, value],
          value: ''
        },
        () => {
          onChangeTags && onChangeTags(this.state.tags)
        }
      )
    }
  }

  onChange = ({value}) => {
    this.setState({value})
  }

  handleFocusIn = () => {
    this.setState({focus: true})
  }

  handleFocusOut = () => {
    this.setState({focus: false})
  }

  render() {
    const {tagsCloseIcon, ...props} = this.props
    const {focus, value, tags} = this.state
    return (
      <div className={this.getClassNames(focus, props.size, props.errorState)}>
        {tags.map((label, index) => (
          <AtomTagItem
            key={index}
            id={index}
            closeIcon={tagsCloseIcon}
            onClose={this.removeTag}
            label={label}
            size={atomTagSizes.SMALL}
          />
        ))}
        <AtomInput
          {...props}
          value={value}
          onChange={this.onChange}
          onEnter={this.addTag}
          onFocus={this.handleFocusIn}
          onBlur={this.handleFocusOut}
          noBorder
        />
      </div>
    )
  }
}

MoleculeInputTags.displayName = 'MoleculeInputTags'

MoleculeInputTags.propTypes = {
  /* close icon to be displayed on tags */
  tagsCloseIcon: PropTypes.node.isRequired,

  /* list of values displayed as tags */
  tags: PropTypes.array,

  /* value of the input */
  value: PropTypes.string,

  /* callback to be called with every update of the list of tags */
  onChangeTags: PropTypes.func
}

MoleculeInputTags.defaultProps = {
  size: inputSizes.MEDIUM,
  value: '',
  tags: []
}

export default MoleculeInputTags
export {inputSizes}
