import React from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeDropdownListOption from '@s-ui/react-molecule-dropdown-option'
import AtomInput from '@s-ui/react-atom-input'

import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

const BASE_CLASS = `sui-MoleculeSelect`
const MoleculeInputSelect = WithSelectUi(AtomInput)

const MoleculeSelectSingleSelection = props => {
  const {value, options, isOpen, onToggle, onChange, closeOnSelect} = props // eslint-disable-line react/prop-types

  const handleSelection = (ev, {value}) => {
    console.log(ev, {value}) // eslint-disable-line
    onChange(ev, {value})
    closeOnSelect && onToggle(ev, {open: false})
  }

  return (
    <div className={BASE_CLASS}>
      <MoleculeInputSelect value={value} onClick={onToggle} />
      <MoleculeDropdownList visible={isOpen}>
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            onClick={handleSelection}
            selected={value === option}
          >
            {option}
          </MoleculeDropdownListOption>
        ))}
      </MoleculeDropdownList>
    </div>
  )
}

MoleculeSelectSingleSelection.defaultProps = {
  value: '',
  onChange: () => {},
  onToggle: () => {}
}

export default WithOpenToggle(MoleculeSelectSingleSelection)
