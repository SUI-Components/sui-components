/* eslint-disable react/prop-types */
import {Children} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import {InputWithClearUI} from '../InputWithClearUI/index.js'

const MoleculeAutosuggestSingleSelection = ({
  autoClose,
  autoFocus,
  ariaLabel,
  autoComplete = 'nope',
  children,
  design,
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
    typeof onChange === 'function' && onChange(ev, {value})
    typeof onSelect === 'function' && onSelect(ev, {value})
    autoClose && typeof onToggle === 'function' && onToggle(ev, {isOpen: false})
  }

  const handleChange = (ev, {value}) => {
    typeof onChange === 'function' && onChange(ev, {value})
    autoClose && typeof onToggle === 'function' && onToggle(ev, {isOpen: true})
  }

  const handleClear = ev => {
    if (!disabled) {
      typeof onChange === 'function' && onChange(null, {value: ''})
      typeof onClear === 'function' && onClear(ev)
    }
  }

  const handleRightClick = ev => {
    typeof onClickRightIcon === 'function' && onClickRightIcon(ev, {value})
  }

  return (
    <>
      <InputWithClearUI
        ariaLabel={ariaLabel}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        button={rightButton}
        disabled={disabled}
        iconClear={!disabled && iconClear}
        id={id}
        reference={refInput}
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
        required={required}
        rightIcon={rightIcon}
        tabIndex={tabIndex}
        type={type}
        value={value}
      >
        <AtomInput />
      </InputWithClearUI>
      {value && (
        <MoleculeDropdownList
          size={size}
          visible={isOpen && Children.count(children) > 0}
          onSelect={handleSelection}
          value={value}
          highlightQuery={value}
          onKeyDown={onKeyDown}
          design={design}
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
