/* eslint-disable react/prop-types */
import {useRef} from 'react'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '../../../inputTags/src'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import isEqual from 'lodash.isequal'
import {InputWithClearUI as MoleculeInputTagsWithClearUI} from './InputWithClearUI'

const MoleculeAutosuggestFieldMultiSelection = ({
  autoClose,
  autoComplete = 'nope',
  children,
  disabled = false,
  iconClear,
  iconCloseTag = <span />,
  id,
  allowDuplicates,
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

    onChangeTags(ev, {
      value: '',
      tags: newTags
    })
    onSelect(ev, {
      value: '',
      tags: newTags
    })
    autoClose && onToggle(ev, {isOpen: false})
    innerRefInput.current && innerRefInput.current.focus()
  }

  const handleChangeTags = (ev, {tags, value}) => {
    const isOpen = Boolean(value)
    onChangeTags(ev, {tags})
    autoClose && onToggle(ev, {isOpen})
    innerRefInput.current && innerRefInput.current.focus()
  }

  const handleChange = (ev, {value}) => {
    const isOpen = Boolean(value)
    onChange(ev, {value})
    autoClose && onToggle(ev, {isOpen})
  }

  const handleClear = ev => {
    if (!disabled) {
      onChange(null, {value: ''})
      onChangeTags(null, {tags: []})
      onClear(ev)
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
      >
        {children}
      </MoleculeDropdownList>
    </>
  )
}

MoleculeAutosuggestFieldMultiSelection.displayName =
  'MoleculeAutosuggestFieldMultiSelection'

export default MoleculeAutosuggestFieldMultiSelection
