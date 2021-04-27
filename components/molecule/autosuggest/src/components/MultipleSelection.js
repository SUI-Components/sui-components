/* eslint-disable react/prop-types */
import {useRef} from 'react'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import withClearUI from '../hoc/withClearUI'

const MoleculeInputTagsWithClearUI = withClearUI(MoleculeInputTags)

const MoleculeAutosuggestFieldMultiSelection = ({
  autoClose,
  autoComplete = 'nope',
  children,
  disabled = false,
  iconClear,
  iconCloseTag = <span />,
  id,
  allowDuplicates,
  innerRefInput,
  inputMode,
  isOpen,
  onChange,
  onChangeTags,
  onClear,
  onInputKeyDown,
  onSelect,
  onToggle,
  placeholder,
  refMoleculeAutosuggest,
  required,
  size,
  tabIndex,
  tags = [],
  type,
  value = ''
}) => {
  const MoleculeInputTagsRef = useRef()

  const handleMultiSelection = (ev, {id, value}) => {
    let newTags = [...tags]
    const existsTag = tags.some(tagValue =>
      typeof tagValue === 'object'
        ? tagValue.label === value
        : tagValue === value
    )

    if (existsTag) {
      // delete
      newTags = tags.filter(tag =>
        typeof tag === 'object' ? tag.label !== value : tag !== value
      )
    } else {
      newTags.push(id === undefined ? value : {key: id, label: value})
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
    refMoleculeAutosuggest.current.focus()
  }

  const handleChangeTags = (ev, {tags, value}) => {
    const isOpen = Boolean(value)
    onChangeTags(ev, {tags})
    autoClose && onToggle(ev, {isOpen})
    refMoleculeAutosuggest.current.focus()
  }

  const handleChange = (ev, {value}) => {
    const isOpen = Boolean(value)
    onChange(ev, {value})
    autoClose && onToggle(ev, {isOpen})
  }

  const handleClear = ev => {
    onChange(null, {value: ''})
    onChangeTags(null, {tags: []})
    onClear(ev)
  }

  return (
    <>
      <MoleculeInputTagsWithClearUI
        autoComplete={autoComplete}
        disabled={disabled}
        iconClear={iconClear}
        id={id}
        innerRefInput={innerRefInput}
        inputMode={inputMode}
        isOpen={isOpen}
        isVisibleClear={tags.length}
        noBorder
        onChange={handleChange}
        onChangeTags={handleChangeTags}
        onClick={onToggle}
        onClickClear={handleClear}
        onKeyDown={onInputKeyDown}
        placeholder={!tags.length ? placeholder : ''}
        ref={MoleculeInputTagsRef}
        required={required}
        tabIndex={tabIndex}
        tags={tags}
        tagsCloseIcon={iconCloseTag}
        type={type}
        value={value}
        allowDuplicates={allowDuplicates}
      />
      <MoleculeDropdownList
        checkbox
        highlightQuery={value}
        onSelect={handleMultiSelection}
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
