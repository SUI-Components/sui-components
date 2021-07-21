/* eslint-disable react/prop-types */
import {Children} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import withClearUI from '../hoc/withClearUI'

const AtomInputWithClearUI = withClearUI(AtomInput)

const MoleculeAutosuggestSingleSelection = ({
  autoClose,
  ariaLabel,
  autoComplete = 'nope',
  children,
  disabled,
  iconClear,
  id,
  innerRefInput: refInput = {},
  inputMode,
  isOpen,
  leftIcon,
  maxLength,
  minLength,
  onChange,
  onClear,
  onClickRightIcon,
  onInputKeyDown,
  onKeyDown,
  onSelect,
  onToggle,
  placeholder,
  required,
  rightButton,
  rightIcon,
  size,
  tabIndex,
  type,
  value = ''
}) => {
  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    onSelect(ev, {value})
    autoClose && onToggle(ev, {isOpen: false})
  }

  const handleChange = (ev, {value}) => {
    onChange(ev, {value})
    autoClose && onToggle(ev, {isOpen: true})
  }

  const handleClear = ev => {
    onChange(null, {value: ''})
    onClear(ev)
  }

  const handleRightClick = ev => {
    onClickRightIcon(ev, {value})
  }

  return (
    <>
      <AtomInputWithClearUI
        ariaLabel={ariaLabel}
        autoComplete={autoComplete}
        button={rightButton}
        disabled={disabled}
        iconClear={!disabled && iconClear}
        id={id}
        inputMode={inputMode}
        isVisibleClear={value}
        leftIcon={leftIcon}
        maxLength={maxLength}
        minLength={minLength}
        onChange={handleChange}
        onClickClear={handleClear}
        onClickRightIcon={handleRightClick}
        onKeyDown={onInputKeyDown}
        placeholder={placeholder}
        reference={refInput}
        required={required}
        rightIcon={rightIcon}
        tabIndex={tabIndex}
        type={type}
        value={value}
      />
      {value && (
        <MoleculeDropdownList
          size={size}
          visible={isOpen && Children.count(children) > 0}
          onSelect={handleSelection}
          value={value}
          highlightQuery={value}
          onKeyDown={onKeyDown}
        >
          {children}
        </MoleculeDropdownList>
      )}
    </>
  )
}

MoleculeAutosuggestSingleSelection.displayName =
  'MoleculeAutosuggestSingleSelection'

export default MoleculeAutosuggestSingleSelection
