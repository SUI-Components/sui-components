/* eslint-disable */

import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

const MoleculeSelectFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    children,
    isOpen,
    onToggle,
    onChange,
    onSelect,
    onChangeTags,
    onChange,
    closeOnSelect,
    iconCloseTag,
    tags, 
    value
  } = props

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const newValues = values.includes(valueOptionSelected)
      ? values.filter(value => value !== valueOptionSelected)
      : [...values, valueOptionSelected]

    onChange(ev, {value: newValues})
    closeOnSelect && onToggle(ev, {open: false})
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onSelect(ev, {value})
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
        value={values}
        highlightQuery={valueInput}
      >
        {children}
      </MoleculeDropdownList>
    </Fragment>
  )
}

MoleculeSelectFieldMultiSelection.displayName =
  'MoleculeSelectFieldMultiSelection'

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: []
}

export default MoleculeSelectFieldMultiSelection
