import React, {Fragment} from 'react'

import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import withSelectUI from '../hoc/withSelectUI'

const MoleculeInputSelect = withSelectUI(MoleculeInputTags)

const MoleculeSelectFieldMultiSelection = props => {
  /* eslint-disable react/prop-types */
  const {
    children,
    isOpen,
    onToggle,
    onChange,
    iconArrowDown,
    iconCloseTag,
    refMoleculeSelect,
    value: values,
    placeholder,
    keysSelection,
    id,
    size
  } = props

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const newValues = values.includes(valueOptionSelected)
      ? values.filter(value => value !== valueOptionSelected)
      : [...values, valueOptionSelected]
    const {key} = ev
    const isKeySelection = keysSelection.includes(key)
    onChange(ev, {value: newValues})
    if (ev.key !== undefined && !isKeySelection) onToggle(ev, {isOpen: false})
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChange(ev, {value})
    refMoleculeSelect.current.focus()
  }

  return (
    <Fragment>
      <MoleculeInputSelect
        id={id}
        tags={values}
        onClick={onToggle}
        tagsCloseIcon={iconCloseTag}
        iconArrowDown={iconArrowDown}
        onChangeTags={handleChangeTags}
        isOpen={isOpen}
        placeholder={!values.length ? placeholder : ''}
        noBorder
      />
      <MoleculeDropdownList
        checkbox
        size={size}
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
