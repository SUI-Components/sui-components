import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeDropdownListOption from '@s-ui/react-molecule-dropdown-option'
import AtomInput from '@s-ui/react-atom-input'

import WithSelectUi from '../hoc/withSelectUi'

const MoleculeInputSelect = WithSelectUi(AtomInput)

const MoleculeSelectSingleSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    value,
    options,
    isOpen,
    onToggle,
    onChange,
    iconArrowDown,
    iconArrowUp,
    closeOnSelect,
    innerRef
  } = props

  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    closeOnSelect && onToggle(ev, {open: false})
  }

  return (
    <Fragment>
      <MoleculeInputSelect
        isOpen={isOpen}
        value={value}
        onClick={onToggle}
        iconArrowDown={iconArrowDown}
        iconArrowUp={iconArrowUp}
      />
      <MoleculeDropdownList
        innerRef={innerRef}
        visible={isOpen}
        onSelect={handleSelection}
      >
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            selected={value === option}
          >
            {option}
          </MoleculeDropdownListOption>
        ))}
      </MoleculeDropdownList>
    </Fragment>
  )
}

MoleculeSelectSingleSelection.displayName = 'MoleculeSelectSingleSelection'

MoleculeSelectSingleSelection.defaultProps = {
  value: '',
  closeOnSelect: true
}

export default MoleculeSelectSingleSelection
