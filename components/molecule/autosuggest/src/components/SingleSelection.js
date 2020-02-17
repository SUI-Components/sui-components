/* eslint-disable react/prop-types */
import React from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import withClearUI from '../hoc/withClearUI'

const AtomInputWithClearUI = withClearUI(AtomInput)

const MoleculeAutosuggestSingleSelection = ({
  id,
  value = '',
  children,
  isOpen,
  onToggle,
  onChange,
  onBlur,
  onClickRightIcon,
  onInputKeyDown,
  onSelect,
  size,
  innerRefInput,
  refMoleculeAutosuggest,
  rightIcon,
  iconClear,
  placeholder,
  disabled,
  required,
  tabIndex,
  autoComplete,
  rightButton
}) => {
  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    onSelect(ev, {value})
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

  const handleRightClick = ev => {
    onClickRightIcon(ev, {value})
  }

  return (
    <>
      <AtomInputWithClearUI
        id={id}
        value={value}
        isVisibleClear={value}
        onClickClear={handleClear}
        onChange={handleChange}
        onBlur={onBlur}
        iconClear={!disabled && iconClear}
        rightIcon={rightIcon}
        onClickRightIcon={handleRightClick}
        reference={innerRefInput}
        placeholder={placeholder}
        onKeyDown={onInputKeyDown}
        disabled={disabled}
        required={required}
        tabIndex={tabIndex}
        autoComplete={autoComplete}
        button={rightButton}
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
  value: '',
  autoComplete: 'nope'
}

export default MoleculeAutosuggestSingleSelection
