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
    onClose && onClose(e, {id})
  }
  return <AtomTag onClose={_onClose} {...props} />
}

class MoleculeInputTags extends Component {
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

  removeTag = (e, {id: indexTag}) => {
    const {onChangeTags, value} = this.props
    const tags = this.props.tags.filter((_, i) => i !== indexTag)
    onChangeTags(e, {tags, value})
  }

  addTag = ev => {
    ev.preventDefault()
    const {onChangeTags, value} = this.props
    if (value) {
      const tags = [...this.props.tags, value]
      onChangeTags(ev, {tags, value: ''})
    }
  }

  onChange = (ev, {value}) => {
    const {onChange} = this.props
    onChange(ev, {value})
  }

  handleFocusIn = () => {
    this.setState({focus: true})
  }

  handleFocusOut = () => {
    this.setState({focus: false})
  }

  render() {
    const {onChange, addTag, removeTag, handleFocusIn, handleFocusOut} = this
    const {tagsCloseIcon, tags, value, innerRefInput, ...props} = this.props
    const {focus} = this.state

    return (
      <div className={this.getClassNames(focus, props.size, props.errorState)}>
        {tags.map((label, index) => (
          <AtomTagItem
            key={index}
            id={index}
            closeIcon={tagsCloseIcon}
            onClose={removeTag}
            label={label}
            size={atomTagSizes.SMALL}
            responsive
          />
        ))}
        <AtomInput
          {...props}
          value={value}
          onChange={onChange}
          onEnter={addTag}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          reference={innerRefInput}
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
  onChangeTags: PropTypes.func,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* object generated w/ Reacte.createRef method to get a DOM reference of internal input */
  innerRefInput: PropTypes.object
}

MoleculeInputTags.defaultProps = {
  size: inputSizes.MEDIUM,
  value: '',
  tags: [],
  onChangeTags: () => {},
  onChange: () => {}
}

export default MoleculeInputTags
export {inputSizes}
