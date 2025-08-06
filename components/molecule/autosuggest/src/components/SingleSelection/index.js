/* eslint-disable react/prop-types */
import {Children} from 'react'

import AtomInput from '@s-ui/react-atom-input'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'

import InputWithClearUI from '../InputWithClearUI/index.js'

const MoleculeAutosuggestSingleSelection = ({
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
  shape,
  size,
  tabIndex,
  type,
  value = '',
  noBorder,
  ...restProps
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
    if (!disabled) {
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
        shape={shape}
        tabIndex={tabIndex}
        type={type}
        value={value}
        noBorder={noBorder}
      >
        <AtomInput />
      </InputWithClearUI>
      {(value || isOpen) && (
        <MoleculeDropdownList
          size={size}
          onSelect={handleSelection}
          visible={isOpen && Children.count(children) > 0}
          value={value}
          highlightQuery={value}
          onKeyDown={onKeyDown}
          design={design}
          {...restProps}
        >
          {children}
        </MoleculeDropdownList>
      )}
    </>
  )
}

MoleculeAutosuggestSingleSelection.displayName = 'MoleculeAutosuggestSingleSelection'

export default MoleculeAutosuggestSingleSelection
