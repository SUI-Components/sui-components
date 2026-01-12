/* eslint-disable react/prop-types */
import {Children, useRef} from 'react'

import isEqual from 'lodash.isequal'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import InputWithClearUI from '../InputWithClearUI/index.js'

const MoleculeAutosuggestFieldMultiSelection = ({
  allowDuplicates,
  autoFocus,
  autoComplete = 'nope',
  children,
  design,
  disabled = false,
  iconClear,
  iconCloseTag = <span />,
  id,
  innerRefInput: refInput = {},
  inputMode,
  isOpen,
  maxLength,
  minLength,
  onChange,
  onChangeTags,
  onClear,
  onClickRightIcon,
  onInputKeyDown,
  onSelect,
  onKeyDown,
  onToggle,
  placeholder,
  required,
  rightIcon,
  shape,
  size,
  tabIndex,
  tags = [],
  type,
  value = ''
}) => {
  const innerRefInput = useRef()
  const moleculeInputRef = useMergeRefs(innerRefInput, refInput)

  const handleMultiSelection = (ev, args = {}) => {
    const {value} = args
    let newTags = [...tags]
    const existsTag = tags.some(tagValue => isEqual(tagValue, value))

    if (existsTag) {
      // delete
      newTags = tags.filter(tagValue => !isEqual(tagValue, value))
    } else {
      // add
      newTags.push(value)
    }

    typeof onChangeTags === 'function' &&
      onChangeTags(ev, {
        ...args,
        value: '',
        tags: newTags
      })
    typeof onSelect === 'function' &&
      onSelect(ev, {
        ...args,
        value: '',
        tags: newTags
      })

    typeof onToggle === 'function' && onToggle(ev, {isOpen: false})
    innerRefInput.current && innerRefInput.current.focus()
  }

  const handleChangeTags = (ev, {tags, value, ...args}) => {
    const isOpen = Boolean(value)
    typeof onChangeTags === 'function' && onChangeTags(ev, {tags, value, ...args})
    typeof onToggle === 'function' && onToggle(ev, {isOpen})
    innerRefInput.current && innerRefInput.current.focus()
  }

  const handleChange = (ev, {value, ...args}) => {
    const isOpen = Boolean(value)
    typeof onChange === 'function' && onChange(ev, {value, ...args})
    typeof onToggle === 'function' && onToggle(ev, {isOpen})
  }

  const handleClear = ev => {
    if (!disabled) {
      typeof onChange === 'function' && onChange(null, {value: ''})
      typeof onChangeTags === 'function' && onChangeTags(null, {tags: []})
      typeof onClear === 'function' && onClear(ev)
    }
  }

  const handleRightClick = (ev, args = {}) => {
    typeof onClickRightIcon === 'function' && onClickRightIcon(ev, {...args, value})
  }

  return (
    <>
      <InputWithClearUI
        allowDuplicates={allowDuplicates}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        iconClear={iconClear}
        id={id}
        innerRefInput={moleculeInputRef}
        inputMode={inputMode}
        isOpen={isOpen}
        isVisibleClear={!disabled && tags.length}
        maxLength={maxLength}
        minLength={minLength}
        noBorder
        onChange={handleChange}
        onChangeTags={handleChangeTags}
        onClick={onToggle}
        onClickClear={handleClear}
        onClickRightIcon={handleRightClick}
        onKeyDown={onInputKeyDown}
        placeholder={!tags.length ? placeholder : ''}
        required={required}
        rightIcon={rightIcon}
        shape={shape}
        tabIndex={tabIndex}
        tags={tags}
        tagsCloseIcon={iconCloseTag}
        type={type}
        value={value}
      >
        <MoleculeInputTags />
      </InputWithClearUI>
      {isOpen && (
        <MoleculeDropdownList
          checkbox
          highlightQuery={value}
          onSelect={handleMultiSelection}
          onKeyDown={onKeyDown}
          size={size}
          value={tags}
          visible={isOpen && Children.count(children) > 0}
          design={design}
        >
          {children}
        </MoleculeDropdownList>
      )}
    </>
  )
}

MoleculeAutosuggestFieldMultiSelection.displayName = 'MoleculeAutosuggestFieldMultiSelection'

export default MoleculeAutosuggestFieldMultiSelection
