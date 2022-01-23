import {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {atomTagSizes} from '@s-ui/react-atom-tag'
import AtomInput, {inputSizes} from '@s-ui/react-atom-input'

import {
  CLASS_TAGS,
  CLASS_TAGS_FOCUS,
  CLASS_TAGS_ERROR,
  CLASS_TAGS_SUCCESS,
  CLASS_TAGS_DISABLED,
  isDuplicate,
  AtomTagItem
} from './config.js'

const MoleculeInputTags = ({
  errorState,
  innerRefInput,
  onChange: onInputChange,
  onChangeTags,
  optionsData,
  size,
  tags: tagsFromProps,
  tagsCloseIcon,
  value,
  maxTags,
  placeholder,
  disabled,
  allowDuplicates,
  name,
  ...restProps
}) => {
  const [focus, setFocus] = useState(false)

  const isFull = maxTags && tagsFromProps?.length >= maxTags

  const isEmpty = tagsFromProps.length === 0

  const shouldRenderInput = !isFull && !disabled

  const className = cx(CLASS_TAGS, {
    [CLASS_TAGS_FOCUS]: focus === true,
    [CLASS_TAGS_ERROR]: errorState === true,
    [CLASS_TAGS_SUCCESS]: errorState === false,
    [CLASS_TAGS_DISABLED]: disabled === true || isFull === true,
    [`${CLASS_TAGS}-${size}`]: size
  })

  const removeTag = (ev, {id: indexTag}) => {
    let tags = tagsFromProps.filter((_, i) => i !== indexTag)
    if (optionsData) {
      const keys = Object.keys(optionsData)
      tags = keys.filter(key => tags.includes(optionsData[key]))
    }
    onChangeTags(ev, {name, tags})
  }

  const addTag = ev => {
    ev.preventDefault()
    if (value) {
      const tags = [...tagsFromProps]
      if (allowDuplicates || !isDuplicate(tags, value)) {
        tags.push(value)
      }
      onChangeTags(ev, {tags, name, value: ''})
    }
  }

  const handleInputChange = (ev, valuesToPropagate) => {
    onInputChange(ev, valuesToPropagate)
  }

  const handleFocusIn = () => setFocus(true)

  const handleFocusOut = () => setFocus(false)

  return (
    <div className={className}>
      {tagsFromProps.map((value, index) => {
        const label = typeof value === 'object' ? value.label : value
        const key = typeof value === 'object' ? value.key : index
        return (
          <AtomTagItem
            key={key}
            id={index}
            closeIcon={tagsCloseIcon}
            onClose={removeTag}
            label={label}
            size={atomTagSizes.SMALL}
            responsive
            disabled={disabled}
          />
        )
      })}
      {shouldRenderInput && (
        <AtomInput
          {...restProps}
          name={name}
          value={value}
          onChange={handleInputChange}
          onEnter={addTag}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          reference={innerRefInput}
          noBorder
          placeholder={isEmpty ? placeholder : undefined}
        />
      )}
    </div>
  )
}

MoleculeInputTags.displayName = 'MoleculeInputTags'

MoleculeInputTags.propTypes = {
  /* errorState */
  errorState: PropTypes.bool,

  /** Tag size */
  size: PropTypes.oneOf(Object.values(atomTagSizes)),

  /* close icon to be displayed on tags */
  tagsCloseIcon: PropTypes.node.isRequired,

  /* list of pairs value/text to be handled */
  optionsData: PropTypes.object,

  /* list of values displayed as tags */
  tags: PropTypes.array,

  /* value of the input */
  value: PropTypes.string,

  /* callback to be called with every update of the list of tags */
  onChangeTags: PropTypes.func,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* object generated w/ Reacte.createRef method to get a DOM reference of internal input */
  innerRefInput: PropTypes.object,

  /* text to be displayed if there is no tags and the input is empty */
  placeholder: PropTypes.string,

  /* number of maximum tags that can be added, after reaching this number the component will be disabled */
  maxTags: PropTypes.number,

  /* prop to indicate that the field is disable (will not render the input) */
  disabled: PropTypes.bool,

  /* prop to determinate if the field allows to introduce duplicate values for the tags (case insensitive) */
  allowDuplicates: PropTypes.bool,

  /* input name */
  name: PropTypes.string
}

MoleculeInputTags.defaultProps = {
  size: inputSizes.MEDIUM,
  value: '',
  tags: [],
  onChangeTags: () => {},
  onChange: () => {},
  placeholder: '',
  disabled: false,
  allowDuplicates: true
}

export default MoleculeInputTags
export {inputSizes}
