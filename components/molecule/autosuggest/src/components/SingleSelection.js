import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import AtomInput from '@s-ui/react-atom-input'

import withClearUI from '../hoc/withClearUI'

const AtomInputWithClearUI = withClearUI(AtomInput)

const MoleculeAutosuggestSingleSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    value = '',
    children,
    isOpen,
    onToggle,
    onChange,
    closeOnSelect,
    size,
    innerRefInput,
    refMoleculeAutosuggest,
    iconClear
  } = props

  const handleSelection = (ev, {value}) => {
    onChange(ev, {value})
    closeOnSelect && onToggle(ev, {isOpen: false})
    refMoleculeAutosuggest.current.focus()
  }

  const handleChange = (ev, {value}) => {
    onChange(ev, {value})
    onToggle(ev, {isOpen: true})
  }

  const handleClear = () => {
    onChange(null, {value: ''})
  }

  return (
    <Fragment>
      <AtomInputWithClearUI
        value={value}
        onClickClear={handleClear}
        onChange={handleChange}
        iconClear={iconClear}
        reference={innerRefInput}
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
