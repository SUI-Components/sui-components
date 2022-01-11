/* eslint-disable react/prop-types */
import {useRef} from 'react'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import isEqual from 'lodash.isequal'
import {InputWithClearUI as MoleculeInputTagsWithClearUI} from './InputWithClearUI'

const MoleculeAutosuggestFieldMultiSelection = ({
  allowDuplicates,
  autoClose,
  autoComplete = 'nope',
  children,
  design,
  disabled = false,
  iconClear,
  iconCloseTag = <span />,
  id,
  innerRefInput: refInput = {},
  inputMode,
  isOpen,
  onChange,
  onChangeTags,
  onClear,
  onInputKeyDown,
  onSelect,
  onKeyDown,
  onToggle,
  placeholder,
  required,
  size,
  tabIndex,
  tags = [],
  type,
  value = ''
}) => {
  const innerRefInput = useRef()
  const moleculeInputRef = useMergeRefs(innerRefInput, refInput)

  const handleMultiSelection = (ev, args) => {
    const {value} = args
    let newTags = [...tags]
    const existsTag = tags.some(tagValue => isEqual(tagValue, value))

    if (existsTag) {
      // delete
      newTags = tags.filter(tagValue => !isEqual(tagValue, value))
    } else {
      // add
      newTags.push(value)
    }

    typeof onChangeTags === 'function' &&
      onChangeTags(ev, {
        value: '',
        tags: newTags
      })
    typeof onSelect === 'function' &&
      onSelect(ev, {
        value: '',
        tags: newTags
      })
    autoClose && typeof onToggle === 'function' && onToggle(ev, {isOpen: false})
    innerRefInput.current && innerRefInput.current.focus()
  }

  const handleChangeTags = (ev, {tags, value}) => {
    const isOpen = Boolean(value)
    typeof onChangeTags === 'function' && onChangeTags(ev, {tags})
    autoClose && typeof onToggle === 'function' && onToggle(ev, {isOpen})
    innerRefInput.current && innerRefInput.current.focus()
  }

  const handleChange = (ev, {value}) => {
    const isOpen = Boolean(value)
    typeof onChange === 'function' && onChange(ev, {value})
    autoClose && typeof onToggle === 'function' && onToggle(ev, {isOpen})
  }

  const handleClear = ev => {
    if (!disabled) {
      typeof onChange === 'function' && onChange(null, {value: ''})
      typeof onChangeTags === 'function' && onChangeTags(null, {tags: []})
      typeof onClear === 'function' && onClear(ev)
    }
  }

  return (
    <>
      <MoleculeInputTagsWithClearUI
        allowDuplicates={allowDuplicates}
        autoComplete={autoComplete}
        disabled={disabled}
        iconClear={iconClear}
        id={id}
        innerRefInput={moleculeInputRef}
        inputMode={inputMode}
        isOpen={isOpen}
        isVisibleClear={!disabled && tags.length}
        noBorder
        onChange={handleChange}
        onChangeTags={handleChangeTags}
        onClick={onToggle}
        onClickClear={handleClear}
        onKeyDown={onInputKeyDown}
        placeholder={!tags.length ? placeholder : ''}
        required={required}
        tabIndex={tabIndex}
        tags={tags}
        tagsCloseIcon={iconCloseTag}
        type={type}
        value={value}
      >
        <MoleculeInputTags />
      </MoleculeInputTagsWithClearUI>
      <MoleculeDropdownList
        checkbox
        highlightQuery={value}
        onSelect={handleMultiSelection}
        onKeyDown={onKeyDown}
        size={size}
        value={tags}
        visible={isOpen}
        design={design}
      >
        {children}
      </MoleculeDropdownList>
    </>
  )
}

MoleculeAutosuggestFieldMultiSelection.displayName =
  'MoleculeAutosuggestFieldMultiSelection'

export default MoleculeAutosuggestFieldMultiSelection
