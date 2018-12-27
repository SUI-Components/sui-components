import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

const MoleculeSelectFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    children,
    isOpen,
    onToggle,
    onChange,
    closeOnSelect,
    iconCloseTag,
    value: values
  } = props

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const newValues = values.includes(valueOptionSelected)
      ? values.filter(value => value !== valueOptionSelected)
      : [...values, valueOptionSelected]

    onChange(ev, {value: newValues})
    closeOnSelect && onToggle(ev, {open: false})
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChange(ev, {value})
    closeOnSelect && onToggle(ev, {open: false})
  }

  return (
    <Fragment>
      <MoleculeInputTags
        tags={values}
        onClick={onToggle}
        tagsCloseIcon={iconCloseTag}
        onChangeTags={handleChangeTags}
        isOpen={isOpen}
        noBorder
      />
      <MoleculeDropdownList
        checkbox
        visible={isOpen}
        onSelect={handleMultiSelection}
        value={values}
      >
        {children}
      </MoleculeDropdownList>
    </Fragment>
  )
}

MoleculeSelectFieldMultiSelection.displayName =
  'MoleculeSelectFieldMultiSelection'

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: []
}

export default MoleculeSelectFieldMultiSelection
