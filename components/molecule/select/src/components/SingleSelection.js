import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import AtomInput, {inputTypes} from '@s-ui/react-atom-input'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'

import {
  SELECT_DROPDOWN_LIST_SIZES as dropdownListSizes,
  SELECT_INPUT_SIZES as inputSizes,
  useDropdown
} from '../config.js'
import {CLASS_SEARCH_CONTAINER} from './config.js'
import MoleculeInputSelect from './MoleculeInputSelect.js'
import Search from './Search.js'

const MoleculeSelectSingleSelection = forwardRef(
  (
    {
      value = '',
      children,
      isOpen,
      onToggle,
      onTriggerClick,
      onChange,
      leftIcon,
      iconArrowDown,
      refMoleculeSelect,
      refSearch,
      selectSize,
      placeholder,
      id,
      disabled,
      optionsData = {},
      required,
      tabIndex,
      size,
      ...props
    },
    forwardedRef
  ) => {
    const {hasSearch, isFirstOptionFocused, inputSearch, focusedFirstOption, setFocusedFirstOption} = useDropdown()

    const handleSelection = (ev, {value}) => {
      onChange(ev, {value})
      onToggle(ev, {isOpen: false})
      forwardedRef?.current?.focus()
    }

    const handleKeyDown = ev => {
      if (isFirstOptionFocused()) {
        setFocusedFirstOption(true)
      } else {
        setFocusedFirstOption(false)
      }

      switch (ev?.key) {
        case 'Escape':
          onToggle(ev, {isOpen: false})
          forwardedRef?.current?.focus()
          break
        case 'Tab':
          onToggle(ev, {isOpen: false})
          forwardedRef?.current?.focus()
          break
        case 'ArrowUp':
          focusedFirstOption && setTimeout(() => inputSearch?.focus())
          break
        default:
          break
      }
    }

    return (
      <>
        <MoleculeInputSelect
          disabled={disabled}
          id={id}
          isOpen={isOpen}
          value={optionsData[value] || ''}
          onClick={onTriggerClick}
          leftIcon={leftIcon}
          iconArrowDown={iconArrowDown}
          placeholder={placeholder}
          autoComplete="off"
          required={required}
          size={selectSize}
          tabIndex={tabIndex}
          {...props}
        >
          <AtomInput ref={forwardedRef} inputMode={inputTypes.NONE} noBorder {...props} />
        </MoleculeInputSelect>
        <div className={CLASS_SEARCH_CONTAINER}>
          {hasSearch && <Search ref={refSearch} />}
          <MoleculeDropdownList
            size={size}
            visible={isOpen}
            onSelect={handleSelection}
            value={value}
            onKeyDown={handleKeyDown}
          >
            {children}
          </MoleculeDropdownList>
        </div>
      </>
    )
  }
)

MoleculeSelectSingleSelection.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  onChange: PropTypes.func,
  onTriggerClick: PropTypes.func,
  leftIcon: PropTypes.node,
  iconArrowDown: PropTypes.node,
  refSearch: PropTypes.object,
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
