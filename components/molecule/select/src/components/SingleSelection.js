import {useState} from 'react'

import PropTypes from 'prop-types'

import AtomInput, {inputTypes} from '@s-ui/react-atom-input'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'

import {
  useDropdown,
  SELECT_INPUT_SIZES as inputSizes,
  SELECT_DROPDOWN_LIST_SIZES as dropdownListSizes
} from '../config.js'
import MoleculeInputSelect from './MoleculeInputSelect.js'
import Search from './Search.js'

const MoleculeSelectSingleSelection = ({
  value = '',
  children,
  isOpen,
  onToggle,
  onChange,
  leftIcon,
  iconArrowDown,
  refMoleculeSelect,
  selectSize,
  placeholder,
  id,
  disabled,
  optionsData = {},
  required,
  tabIndex,
  size,
  ...props
}) => {
  const {hasSearch, isFirstOptionFocused, inputSearch} = useDropdown()
  const [focusedFirstOption, setFocusedFirstOption] = useState(false)

  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    onToggle(ev, {isOpen: false})
    refMoleculeSelect && refMoleculeSelect.current && refMoleculeSelect.current.focus()
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
        disabled={disabled}
        id={id}
        isOpen={isOpen}
        value={optionsData[value] || ''}
        onClick={ev => onToggle(ev, {isOpen: !isOpen})}
        leftIcon={leftIcon}
        iconArrowDown={iconArrowDown}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
        size={selectSize}
        tabIndex={tabIndex}
      >
        <AtomInput inputMode={inputTypes.NONE} />
      </MoleculeInputSelect>
      {hasSearch && <Search />}
      <MoleculeDropdownList
        size={size}
        visible={isOpen}
        onSelect={handleSelection}
        value={value}
        onKeyDown={handleKeyDown}
      >
        {children}
      </MoleculeDropdownList>
    </>
  )
}

MoleculeSelectSingleSelection.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  onChange: PropTypes.func,
  leftIcon: PropTypes.node,
  iconArrowDown: PropTypes.node,
  refMoleculeSelect: PropTypes.object,
  selectSize: PropTypes.oneOf(Object.values(inputSizes)),
  size: PropTypes.oneOf(Object.values(dropdownListSizes)),
  placeholder: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  optionsData: PropTypes.object,
  required: PropTypes.bool,
  tabIndex: PropTypes.number
}

MoleculeSelectSingleSelection.displayName = 'MoleculeSelectSingleSelection'

export default MoleculeSelectSingleSelection
