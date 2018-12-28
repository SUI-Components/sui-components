import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

const MoleculeAutosuggestSingleSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    value = '',
    children,
    isOpen,
    onToggle,
    onSelect,
    onChange,
    closeOnSelect,
    onClickClearIcon,
    size
  } = props

  const handleSelection = (ev, {value}) => {
    onSelect(ev, {value})
    closeOnSelect && onToggle(ev, {open: false})
  }

  const handleChange = (ev, {value}) => {
    onChange(ev, {value})
    onToggle(ev, {open: true})
  }

  return (
    <Fragment>
      <AtomInput
        value={value}
        onClick={onToggle}
        onClickRightIcon={onClickClearIcon}
        onChange={handleChange}
      />
      <MoleculeDropdownList
        isOpen={isOpen}
        size={size}
        visible={isOpen}
        onSelect={handleSelection}
        value={value}
        highlightQuery={value}
      >
        {children}
      </MoleculeDropdownList>
    </Fragment>
  )
}

MoleculeAutosuggestSingleSelection.displayName =
  'MoleculeAutosuggestSingleSelection'

MoleculeAutosuggestSingleSelection.defaultProps = {
  value: '',
  closeOnSelect: true
}

export default MoleculeAutosuggestSingleSelection
