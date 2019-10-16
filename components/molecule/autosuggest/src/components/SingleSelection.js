/* eslint-disable react/prop-types */
import React from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import withClearUI from '../hoc/withClearUI'

const AtomInputWithClearUI = withClearUI(AtomInput)

const MoleculeAutosuggestSingleSelection = ({
  value = '',
  children,
  isOpen,
  onToggle,
  onChange,
  onInputKeyDown,
  size,
  innerRefInput,
  refMoleculeAutosuggest,
  iconClear,
  placeholder,
  disabled
}) => {
  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    onToggle(ev, {isOpen: false})
    refMoleculeAutosuggest.current.focus()
  }

  const handleChange = (ev, {value}) => {
    onChange(ev, {value})
    onToggle(ev, {isOpen: true})
  }

  const handleClear = () => {
    onChange(null, {value: ''})
  }

  return (
    <>
      <AtomInputWithClearUI
        value={value}
        isVisibleClear={value}
        onClickClear={handleClear}
        onChange={handleChange}
        iconClear={!disabled && iconClear}
        reference={innerRefInput}
        placeholder={placeholder}
        onKeyDown={onInputKeyDown}
        disabled={disabled}
      />
      {value && (
        <MoleculeDropdownList
          size={size}
          visible={isOpen && React.Children.count(children) > 0}
          onSelect={handleSelection}
          value={value}
          highlightQuery={value}
        >
          {children}
        </MoleculeDropdownList>
      )}
    </>
  )
}

MoleculeAutosuggestSingleSelection.displayName =
  'MoleculeAutosuggestSingleSelection'

MoleculeAutosuggestSingleSelection.defaultProps = {
  value: ''
}

export default MoleculeAutosuggestSingleSelection
