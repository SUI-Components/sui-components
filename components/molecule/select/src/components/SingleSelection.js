import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import WithSelectUi from '../hoc/withSelectUi'

const MoleculeInputSelect = WithSelectUi(AtomInput)

const MoleculeSelectSingleSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    value = '',
    children,
    isOpen,
    onToggle,
    onChange,
    iconArrowDown,
    closeOnSelect,
    size
  } = props

  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    closeOnSelect && onToggle(ev, {isOpen: false})
  }

  return (
    <Fragment>
      <MoleculeInputSelect
        isOpen={isOpen}
        value={value}
        onClick={onToggle}
        iconArrowDown={iconArrowDown}
      />
      <MoleculeDropdownList
        size={size}
        visible={isOpen}
        onSelect={handleSelection}
        value={value}
      >
        {children}
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
