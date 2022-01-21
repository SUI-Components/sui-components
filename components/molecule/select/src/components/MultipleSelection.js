import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import MoleculeInputSelect from './MoleculeInputSelect.js'

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
    size,
    required,
    optionsData = {},
    selectSize,
    tabIndex,
    maxTags
  } = props

  const tags = values.map(value => optionsData[value])

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const handleToggle = ev => {
      const {key} = ev
      const isKeySelection = keysSelection.includes(key)
      if (ev.key !== undefined && !isKeySelection) onToggle(ev, {isOpen: false})
    }

    const isValueSelectedAlreadySelected = () =>
      values.includes(valueOptionSelected)

    const removeFromValues = () =>
      values.filter(value => value !== valueOptionSelected)

    const addToValues = () => [...values, valueOptionSelected]

    const isFull = () => maxTags && tags?.length >= maxTags

    if (isValueSelectedAlreadySelected()) {
      onChange(ev, {value: removeFromValues()})
    } else if (!isFull()) {
      onChange(ev, {value: addToValues()})
    }
    handleToggle(ev)
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChange(ev, {value})
    refMoleculeSelect.current.focus()
  }

  return (
    <>
      <MoleculeInputSelect
        id={id}
        tags={tags}
        onClick={onToggle}
        tagsCloseIcon={iconCloseTag}
        iconArrowDown={iconArrowDown}
        onChangeTags={handleChangeTags}
        isOpen={isOpen}
        placeholder={!values.length ? placeholder : ''}
        optionsData={optionsData}
        autoComplete="off"
        readOnly
        noBorder
        required={required}
        size={selectSize}
        tabIndex={tabIndex}
        maxTags={maxTags}
      >
        <MoleculeInputTags />
      </MoleculeInputSelect>
      <MoleculeDropdownList
        checkbox
        size={size}
        visible={isOpen}
        onSelect={handleMultiSelection}
        value={values}
      >
        {children}
      </MoleculeDropdownList>
    </>
  )
}

MoleculeSelectFieldMultiSelection.displayName =
  'MoleculeSelectFieldMultiSelection'

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: []
}

export default MoleculeSelectFieldMultiSelection
