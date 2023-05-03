import {useState} from 'react'

import {inputTypes} from '@s-ui/react-atom-input'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import {useDropdown} from '../config.js'
import MoleculeInputSelect from './MoleculeInputSelect.js'
import Search from './Search.js'

const MoleculeSelectFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    children,
    isOpen,
    onToggle,
    onChange,
    iconArrowDown,
    iconCloseTag,
    refMoleculeSelect,
    value: values,
    placeholder,
    keysSelection,
    id,
    size,
    required,
    optionsData = {},
    selectSize,
    tabIndex,
    maxTags
  } = props

  const tags = values.map(value => optionsData[value])

  const [focusedFirstOption, setFocusedFirstOption] = useState(false)
  const {hasSearch, isFirstOptionFocused, inputSearch} = useDropdown()

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const handleToggle = ev => {
      const {key} = ev
      const isKeySelection = keysSelection.includes(key)
      if (ev.key !== undefined && !isKeySelection) onToggle(ev, {isOpen: false})
    }

    const isValueSelectedAlreadySelected = () =>
      values.includes(valueOptionSelected)

    const removeFromValues = () =>
      values.filter(value => value !== valueOptionSelected)

    const addToValues = () => [...values, valueOptionSelected]

    const isFull = () => maxTags && tags?.length >= maxTags

    if (isValueSelectedAlreadySelected()) {
      onChange(ev, {value: removeFromValues()})
    } else if (!isFull()) {
      onChange(ev, {value: addToValues()})
    }
    handleToggle(ev)
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChange(ev, {value})
    refMoleculeSelect.current.focus()
  }

  const handleKeyDown = ev => {
    if (isFirstOptionFocused()) {
      setFocusedFirstOption(true)
    } else {
      setFocusedFirstOption(false)
    }

    if (ev?.key === 'Escape') {
      onToggle(ev, {isOpen: false})
    } else if (ev?.key === 'ArrowUp') {
      focusedFirstOption && setTimeout(() => inputSearch?.focus())
    }
  }

  return (
    <>
      <MoleculeInputSelect
        id={id}
        tags={tags}
        onClick={ev => onToggle(ev, {isOpen: !isOpen})}
        tagsCloseIcon={iconCloseTag}
        iconArrowDown={iconArrowDown}
        onChangeTags={handleChangeTags}
        isOpen={isOpen}
        placeholder={!values.length ? placeholder : ''}
        optionsData={optionsData}
        autoComplete="off"
        noBorder
        required={required}
        size={selectSize}
        tabIndex={tabIndex}
        maxTags={maxTags}
        value=""
      >
        <MoleculeInputTags inputMode={inputTypes.NONE} />
      </MoleculeInputSelect>
      {hasSearch && <Search />}
      <MoleculeDropdownList
        checkbox="true"
        size={size}
        visible={isOpen}
        onSelect={handleMultiSelection}
        onKeyDown={handleKeyDown}
        value={values}
      >
        {children}
      </MoleculeDropdownList>
    </>
  )
}

MoleculeSelectFieldMultiSelection.displayName =
  'MoleculeSelectFieldMultiSelection'

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: []
}

export default MoleculeSelectFieldMultiSelection
