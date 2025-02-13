import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import AtomTag, {atomTagSizes} from '@s-ui/react-atom-tag'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {
  BASE_CLASS_TAG_CONTAINER,
  CLASS_TAGS,
  CLASS_TAGS_DISABLED,
  CLASS_TAGS_ERROR,
  CLASS_TAGS_SUCCESS,
  handleOnFocusBlur,
  isDuplicate,
  isFunction
} from './config.js'

const MoleculeInputTags = forwardRef(
  (
    {
      errorState,
      innerRefInput, // might be deprecated
      onChange: onInputChange,
      onChangeTags,
      optionsData,
      size = inputSizes.MEDIUM,
      tagSize = atomTagSizes.MEDIUM,
      defaultTags = [],
      tags: tagsFromProps,
      tagsCloseIcon,
      defaultValue = '',
      value: valueFromProps,
      maxTags,
      placeholder = '',
      disabled = false,
      allowDuplicates = true,
      readOnly,
      name,
      isBorderless,
      responsive = true,
      onFocus,
      onBlur,
      ...restProps
    },
    forwardedRef
  ) => {
    const ref = useMergeRefs(...[forwardedRef, innerRefInput].filter(Boolean))

    const [tags, setTags] = useControlledState(tagsFromProps, defaultTags)
    const [value, setValue] = useControlledState(valueFromProps, defaultValue)

    const isFull = maxTags && tags?.length >= maxTags

    const isEmpty = tags.length === 0

    const className = cx(
      CLASS_TAGS,
      {
        // [CLASS_TAGS_FOCUS]: focus === true,
        [CLASS_TAGS_ERROR]: errorState === true,
        [CLASS_TAGS_SUCCESS]: errorState === false,
        [CLASS_TAGS_DISABLED]: disabled === true || isFull === true,
        [`${CLASS_TAGS}-${size}`]: size
      },
      isBorderless && `${CLASS_TAGS}--isBorderless`
    )

    const removeTag =
      ({id: indexTag, label, value: removedValue}) =>
      ev => {
        let nextTags = tags.filter((_, i) => i !== indexTag)
        if (optionsData) {
          const keys = Object.keys(optionsData)
          nextTags = keys.filter(key => nextTags.includes(optionsData[key]))
        }
        setTags(nextTags)
        isFunction(onChangeTags) &&
          onChangeTags(ev, {
            name,
            tags: nextTags,
            value,
            tag: removedValue,
            label
          })
      }

    const addTag = (ev, {...args}) => {
      if (value) {
        const nextTags = [...tags]
        let options
        if (allowDuplicates || !isDuplicate(tags, value)) {
          if (optionsData) {
            options = optionsData.filter(optionData => optionData.label === value)[0]
          }
          nextTags.push(options || value)
        }
        setTags(nextTags)
        setValue('')
        isFunction(onChangeTags) &&
          onChangeTags(ev, {
            name,
            tags: nextTags,
            value: '',
            tag: value,
            label: value
          })
      }
    }

    const handleInputChange = (ev, {value, ...args}) => {
      setValue(value)
      isFunction(onInputChange) && onInputChange(ev, {...args, value, tags})
    }

    return (
      <div
        className={className}
        {...(disabled && {'aria-disabled': disabled})}
        {...(readOnly && !disabled && {'aria-readonly': readOnly})}
      >
        {tags.map((value, index) => {
          const label = typeof value === 'object' ? value.label : value
          const key = typeof value === 'object' ? value.key : index
          return (
            <span
              key={key}
              className={cx(`${BASE_CLASS_TAG_CONTAINER}`, `${BASE_CLASS_TAG_CONTAINER}-size-${tagSize}`)}
            >
              <AtomTag
                id={index}
                closeIcon={tagsCloseIcon}
                value={value}
                onClose={removeTag({
                  id: key === undefined ? index : key,
                  value,
                  label
                })}
                label={label}
                size={tagSize}
                responsive={responsive}
                readOnly={readOnly}
                disabled={disabled}
                isFitted
              />
            </span>
          )
        })}
        {!isFull && (
          <AtomInput
            ref={ref}
            {...restProps}
            name={name}
            value={value}
            onChange={handleInputChange}
            onEnter={addTag}
            onEnterKey={['Enter']}
            onFocus={handleOnFocusBlur(onFocus, {tags})}
            onBlur={handleOnFocusBlur(onBlur, {tags})}
            noBorder
            size={size}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={isEmpty ? placeholder : undefined}
          />
        )}
      </div>
    )
  }
)

MoleculeInputTags.displayName = 'MoleculeInputTags'

MoleculeInputTags.propTypes = {
  /* errorState */
  errorState: PropTypes.bool,

  /** Tag size */
  tagSize: PropTypes.oneOf(Object.values(atomTagSizes)),

  /** Input size */
  size: PropTypes.oneOf(Object.values(inputSizes)),

  /* close icon to be displayed on tags */
  tagsCloseIcon: PropTypes.node.isRequired,

  /* list of value/text tuple to be handled */
  optionsData: PropTypes.object,

  /* list of values displayed as tags on first render */
  defaultTags: PropTypes.array,

  /* list of values displayed as tags */
  tags: PropTypes.array,

  /* value of the input on first render */
  defaultValue: PropTypes.string,

  /* value of the input */
  value: PropTypes.string,

  /* callback to be called with every update of the list of tags */
  onChangeTags: PropTypes.func,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* object generated w/ React.createRef method to get a DOM reference of internal input */
  innerRefInput: PropTypes.object,

  /* text to be displayed if there are no tags and the input is empty */
  placeholder: PropTypes.string,

  /* number of maximum tags that can be added, after reaching this number the component will be disabled */
  maxTags: PropTypes.number,

  /* prop to indicate that the field is disabled (will not render the input) */
  disabled: PropTypes.bool,

  /* This Boolean attribute prevents the user from interacting with the input but without disabled styles */
  readOnly: PropTypes.bool,

  /* prop to determinate if the field allows introducing duplicate values for the tags (case insensitive) */
  allowDuplicates: PropTypes.bool,

  /* input name */
  name: PropTypes.string,

  /* true for make responsive layout (default). Keeps large tag size in mobile */
  responsive: PropTypes.bool,

  /* prop to determinate if the field is borderless */
  isBorderless: PropTypes.bool,

  /** callback triggered when the user focuses on the inputTag */
  onFocus: PropTypes.func,

  /** callback triggered when the user focuses out on the inputTag */
  onBlur: PropTypes.func
}

export default MoleculeInputTags
export {inputSizes, inputSizes as moleculeInputTagsInputSizes, atomTagSizes as moleculeInputTagsSizes}
