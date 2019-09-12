/* eslint-disable react/prop-types */
import React, {Fragment, useRef} from 'react'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import withClearUI from '../hoc/withClearUI'

const MoleculeInputTagsWithClearUI = withClearUI(MoleculeInputTags)

const MoleculeAutosuggestFieldMultiSelection = ({
  refMoleculeAutosuggest,
  tags,
  value,
  onToggle,
  iconCloseTag,
  isOpen,
  iconClear,
  innerRefInput,
  placeholder,
  children,
  onInputKeyDown,
  onChange,
  onChangeTags,
  disabled
}) => {
  const MoleculeInputTagsRef = useRef()

  const handleMultiSelection = (ev, {value}) => {
    const newTags = tags.includes(value)
      ? tags.filter(tag => tag !== value)
      : [...tags, value]

    onChangeTags(ev, {
      value: '',
      tags: newTags
    })
    onToggle(ev, {isOpen: false})
    refMoleculeAutosuggest.current.focus()
  }

  const handleChangeTags = (ev, {tags, value}) => {
    const isOpen = Boolean(value)
    onChangeTags(ev, {tags})
    onToggle(ev, {isOpen})
    refMoleculeAutosuggest.current.focus()
  }

  const handleChange = (ev, {value}) => {
    const isOpen = Boolean(value)
    onChange(ev, {value})
    onToggle(ev, {isOpen})
  }

  const handleClear = () => {
    onChange(null, {value: ''})
    onChangeTags(null, {tags: []})
  }

  return (
    <Fragment>
      <MoleculeInputTagsWithClearUI
        onKeyDown={onInputKeyDown}
        ref={MoleculeInputTagsRef}
        tags={tags}
        value={value}
        onClick={onToggle}
        tagsCloseIcon={iconCloseTag}
        onChangeTags={handleChangeTags}
        onChange={handleChange}
        isOpen={isOpen}
        isVisibleClear={tags.length}
        iconClear={iconClear}
        onClickClear={handleClear}
        innerRefInput={innerRefInput}
        placeholder={!tags.length ? placeholder : ''}
        noBorder
        disabled={disabled}
      />
      <MoleculeDropdownList
        checkbox
        visible={isOpen}
        onSelect={handleMultiSelection}
        value={tags}
        highlightQuery={value}
      >
        {children}
      </MoleculeDropdownList>
    </Fragment>
  )
}

MoleculeAutosuggestFieldMultiSelection.displayName =
  'MoleculeAutosuggestFieldMultiSelection'

MoleculeAutosuggestFieldMultiSelection.defaultProps = {
  disabled: false,
  value: '',
  tags: [],
  iconCloseTag: <span />
}

export default MoleculeAutosuggestFieldMultiSelection
