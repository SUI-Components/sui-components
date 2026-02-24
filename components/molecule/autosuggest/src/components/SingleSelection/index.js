/* eslint-disable react/prop-types */
import {Children} from 'react'

import AtomInput from '@s-ui/react-atom-input'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'

import InputWithClearUI from '../InputWithClearUI/index.js'

const MoleculeAutosuggestSingleSelection = ({
  autoFocus,
  'aria-expanded': ariaExpanded,
  ariaLabel,
  autoComplete = 'nope',
  children,
  design,
  disabled,
  iconClear,
  id,
  dropdownListId,
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
  readOnly,
  required,
  rightButton,
  rightIcon,
  shape,
  size,
  tabIndex,
  type,
  value = '',
  noBorder,
  ...rest
}) => {
  const handleSelection = (ev, {value, ...args}) => {
    typeof onChange === 'function' && onChange(ev, {value, ...args})
    typeof onSelect === 'function' && onSelect(ev, {value, ...args})
    typeof onToggle === 'function' && onToggle(ev, {isOpen: false})
  }

  const handleChange = (ev, {value, ...args}) => {
    typeof onChange === 'function' && onChange(ev, {value, ...args})
    typeof onToggle === 'function' && onToggle(ev, {isOpen: true})
  }

  const handleClear = (ev, args = {}) => {
    if (!disabled && !readOnly) {
      typeof onChange === 'function' && onChange(null, {...args, value: ''})
      typeof onClear === 'function' && onClear(ev)
    }
  }

  const handleRightClick = (ev, args = {}) => {
    typeof onClickRightIcon === 'function' && onClickRightIcon(ev, {...args, value})
  }

  return (
    <>
      <InputWithClearUI
        role="combobox"
        aria-haspopup="true"
        aria-autocomplete="list"
        aria-controls={dropdownListId}
        aria-expanded={ariaExpanded}
        ariaLabel={ariaLabel}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        button={rightButton}
        disabled={disabled}
        iconClear={!disabled && !readOnly && iconClear}
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
        readOnly={readOnly}
        required={required}
        rightIcon={rightIcon}
        shape={shape}
        tabIndex={tabIndex}
        type={type}
        value={value}
        noBorder={noBorder}
        {...rest}
      >
        <AtomInput />
      </InputWithClearUI>
      {(value || isOpen) && (
        <MoleculeDropdownList
          id={dropdownListId}
          aria-labelledby={id}
          size={size}
          onSelect={handleSelection}
          visible={isOpen && Children.count(children) > 0}
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

MoleculeAutosuggestSingleSelection.displayName = 'MoleculeAutosuggestSingleSelection'

export default MoleculeAutosuggestSingleSelection
