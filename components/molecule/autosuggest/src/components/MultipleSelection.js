/* eslint-disable */
import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

const MoleculeAutosuggestFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    children,
    isOpen,
    onToggle,
    onChange,
    onChangeTags,
    closeOnSelect,
    iconCloseTag,
    tags, 
    value
  } = props

  // console.log({
  //   children,
  //   isOpen,
  //   onToggle,
  //   onChange,
  //   onChangeTags,
  //   closeOnSelect,
  //   iconCloseTag,
  //   tags, 
  //   value
  // })

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const newValues = tags.includes(valueOptionSelected)
      ? tags.filter(value => value !== valueOptionSelected)
      : [...tags, valueOptionSelected]

    onChangeTags(ev, {value: newValues})
    closeOnSelect && onToggle(ev, {open: false})
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChangeTags(ev, {value})
    closeOnSelect && onToggle(ev, {open: false})
  }

  const handleChange = (ev, {value}) => {
    console.log({value})
    onChange(ev, {value})
    onToggle(ev, {open: true})
  }

  return (
    <Fragment>
      <MoleculeInputTags
        tags={tags}
        value={value}
        onClick={onToggle}
        tagsCloseIcon={iconCloseTag}
        onChangeTags={handleChangeTags}
        onChange={handleChange}
        isOpen={isOpen}
        noBorder
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
  value: []
}

export default MoleculeAutosuggestFieldMultiSelection
