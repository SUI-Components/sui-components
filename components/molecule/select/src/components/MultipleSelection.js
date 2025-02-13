import {Children, cloneElement, forwardRef, useMemo} from 'react'

import PropTypes from 'prop-types'

import {inputTypes} from '@s-ui/react-atom-input'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import {SELECT_DROPDOWN_LIST_SIZES, SELECT_INPUT_SIZES, SELECT_TAG_SIZES, useDropdown} from '../config.js'
import {CLASS_SEARCH_CONTAINER} from './config.js'
import MoleculeInputSelect from './MoleculeInputSelect.js'
import Search from './Search.js'

const MoleculeSelectFieldMultiSelection = forwardRef((props, forwardedRef) => {
  /* eslint-disable react/prop-types */
  const {
    children,
    disabled,
    isOpen,
    onToggle,
    onChange,
    iconArrowDown,
    iconCloseTag,
    refSearch,
    value: values = [],
    placeholder,
    keysSelection,
    id,
    size,
    tagSize,
    required,
    optionsData = {},
    selectSize,
    tabIndex,
    maxTags,
    responsive,
    onTriggerClick
  } = props

  const tags = values.map(value => optionsData[value])

  const {hasSearch, isFirstOptionFocused, inputSearch, focusedFirstOption, setFocusedFirstOption} = useDropdown()

  const isFull = maxTags && tags?.length >= maxTags

  const handleMultiSelection = (ev, {value: valueOptionSelected}) => {
    const handleToggle = ev => {
      const {key} = ev
      const isKeySelection = keysSelection.includes(key)
      if (ev.key !== undefined && !isKeySelection) onToggle(ev, {isOpen: false})
    }

    const isValueSelectedAlreadySelected = () => values.includes(valueOptionSelected)

    const removeFromValues = () => values.filter(value => value !== valueOptionSelected)

    const addToValues = () => [...values, valueOptionSelected]

    if (isValueSelectedAlreadySelected()) {
      onChange(ev, {value: removeFromValues()})
    } else if (!isFull) {
      onChange(ev, {value: addToValues()})
    }
    handleToggle(ev)
  }

  const handleChangeTags = (ev, {tags: value}) => {
    onChange(ev, {value})
    // refMoleculeSelect.current.focus()
  }

  const handleKeyDown = ev => {
    if (isFirstOptionFocused()) {
      setFocusedFirstOption(true)
    } else {
      setFocusedFirstOption(false)
    }

    switch (ev.key) {
      case 'Escape':
        onToggle(ev, {isOpen: false})
        forwardedRef.current.focus()
        break
      case 'Tab':
        onToggle(ev, {isOpen: false})
        isOpen && forwardedRef.current.focus()
        break
      case 'ArrowUp':
        focusedFirstOption && setTimeout(() => inputSearch?.focus())
        break
    }
  }

  const extendedChildren = useMemo(
    () =>
      Children.toArray(children)
        .filter(Boolean)
        .map(child => {
          return cloneElement(child, {
            disabled: !values.includes(child.props.value) && isFull
          })
        }),
    [children, isFull, values]
  )

  return (
    <>
      <MoleculeInputSelect
        disabled={disabled}
        id={id}
        tags={tags}
        onClick={onTriggerClick}
        tagsCloseIcon={iconCloseTag}
        iconArrowDown={iconArrowDown}
        onChangeTags={handleChangeTags}
        isOpen={isOpen}
        placeholder={!values.length ? placeholder : ''}
        optionsData={optionsData}
        autoComplete="off"
        isBorderless
        required={required}
        size={selectSize}
        tabIndex={tabIndex}
        maxTags={maxTags}
        value=""
      >
        <MoleculeInputTags
          innerRefInput={forwardedRef}
          responsive={responsive}
          inputMode={inputTypes.NONE}
          tagSize={tagSize}
        />
      </MoleculeInputSelect>
      <div className={CLASS_SEARCH_CONTAINER}>
        {hasSearch && <Search ref={refSearch} />}
        <MoleculeDropdownList
          checkbox="true"
          size={size}
          visible={isOpen}
          alwaysRender
          onSelect={handleMultiSelection}
          onKeyDown={handleKeyDown}
          value={values}
        >
          {extendedChildren}
        </MoleculeDropdownList>
      </div>
    </>
  )
})

MoleculeSelectFieldMultiSelection.displayName = 'MoleculeSelectFieldMultiSelection'

MoleculeSelectFieldMultiSelection.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  onChange: PropTypes.func,
  onTriggerClick: PropTypes.func,
  /** Icon for arrow */
  iconArrowDown: PropTypes.node,
  iconCloseTag: PropTypes.node,
  refMoleculeSelect: PropTypes.object,
  refSearch: PropTypes.object,
  /** value selected */
  value: PropTypes.any,
  placeholder: PropTypes.string,
  keysSelection: PropTypes.array,
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SELECT_DROPDOWN_LIST_SIZES)),
  tagSize: PropTypes.oneOf(Object.values(SELECT_TAG_SIZES)),
  /** Size of the select(input) */
  selectSize: PropTypes.oneOf(Object.values(SELECT_INPUT_SIZES)),
  required: PropTypes.bool,
  optionsData: PropTypes.object,
  tabIndex: PropTypes.number,
  maxTags: PropTypes.number,
  responsive: PropTypes.bool
}

export default MoleculeSelectFieldMultiSelection
