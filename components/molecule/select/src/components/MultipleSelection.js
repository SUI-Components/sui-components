import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeDropdownListOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import WithSelectUi from '../hoc/withSelectUi'

const MoleculeInputSelect = WithSelectUi(MoleculeInputTags)

const MoleculeSelectFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    options,
    isOpen,
    onToggle,
    onChange,
    closeOnSelect,
    iconCloseTag,
    value: values,
    innerRef
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
      <MoleculeInputSelect
        tags={values}
        onClick={onToggle}
        tagsCloseIcon={iconCloseTag}
        onChangeTags={handleChangeTags}
      />
      <MoleculeDropdownList innerRef={innerRef} checkbox visible={isOpen}>
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            onSelect={handleMultiSelection}
            selected={values && values.includes(option)}
          />
        ))}
      </MoleculeDropdownList>
    </Fragment>
  )
}

MoleculeSelectFieldMultiSelection.displayName =
  'MoleculeSelectFieldMultiSelection'

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: [],
  iconCloseTag: () => <span>X</span>
}

export default MoleculeSelectFieldMultiSelection
