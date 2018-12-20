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
    iconArrowDown,
    iconArrowUp,
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
        iconArrowDown={iconArrowDown}
        iconArrowUp={iconArrowUp}
        onChangeTags={handleChangeTags}
        isOpen={isOpen}
        noBorder
      />
      <MoleculeDropdownList
        innerRef={innerRef}
        checkbox
        visible={isOpen}
        onSelect={handleMultiSelection}
        value={values}
      >
        {options.map((option, index) => (
          <MoleculeDropdownListOption value={option} key={index}>
            {option}
          </MoleculeDropdownListOption>
        ))}
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
