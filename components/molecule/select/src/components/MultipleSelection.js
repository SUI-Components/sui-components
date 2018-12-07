import React from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeDropdownListOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

const BASE_CLASS = `MoleculeSelectField`
const MoleculeInputSelect = WithSelectUi(MoleculeInputTags)

const closeTagIcon = (
  <svg viewBox="0 0 24 24">
    <path
      id="a"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const MoleculeSelectFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    options,
    isOpen,
    onToggle,
    onChange,
    closeOnSelect,
    closeTagIcon,
    value: values
  } = props

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const newValues = values.includes(valueOptionSelected)
      ? values.filter(value => value !== valueOptionSelected)
      : [...values, valueOptionSelected]

    onChange(ev, {value: newValues})
    closeOnSelect && onToggle(ev, {open: false})
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChange(ev, {value})
    closeOnSelect && onToggle(ev, {open: false})
  }

  return (
    <div className={BASE_CLASS}>
      <MoleculeInputSelect
        tags={values}
        onClick={onToggle}
        tagsCloseIcon={closeTagIcon}
        onChangeTags={handleChangeTags}
      />
      <MoleculeDropdownList checkbox visible={isOpen}>
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            onSelect={handleMultiSelection}
            selected={values && values.includes(option)}
          />
        ))}
      </MoleculeDropdownList>
    </div>
  )
}

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: [],
  onChange: () => {},
  onToggle: () => {},
  closeTagIcon: closeTagIcon
}

export default WithOpenToggle(MoleculeSelectFieldMultiSelection)
