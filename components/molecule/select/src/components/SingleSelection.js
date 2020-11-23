import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import withSelectUI from '../hoc/withSelectUI'

const MoleculeInputSelect = withSelectUI(AtomInput)

const MoleculeSelectSingleSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    value = '',
    children,
    isOpen,
    onToggle,
    onChange,
    leftIcon,
    iconArrowDown,
    refMoleculeSelect,
    size,
    placeholder,
    id,
    disabled,
    optionsData = {},
    required,
    selectSize,
    tabIndex
  } = props

  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    onToggle(ev, {isOpen: false})
    refMoleculeSelect &&
      refMoleculeSelect.current &&
      refMoleculeSelect.current.focus()
  }

  return (
    <>
      <MoleculeInputSelect
        disabled={disabled}
        id={id}
        isOpen={isOpen}
        value={optionsData[value] || ''}
        onClick={onToggle}
        leftIcon={leftIcon}
        iconArrowDown={iconArrowDown}
        placeholder={placeholder}
        autoComplete="off"
        readOnly
        required={required}
        size={selectSize}
        tabIndex={tabIndex}
      />
      <MoleculeDropdownList
        size={size}
        visible={isOpen}
        onSelect={handleSelection}
        value={value}
      >
        {children}
      </MoleculeDropdownList>
    </>
  )
}

MoleculeSelectSingleSelection.displayName = 'MoleculeSelectSingleSelection'

MoleculeSelectSingleSelection.defaultProps = {
  value: ''
}

export default MoleculeSelectSingleSelection
