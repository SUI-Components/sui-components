import {Children, createRef, cloneElement, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'
import {inputTypes} from '@s-ui/react-atom-input'

import MoleculeAutosuggestSingleSelection from './components/SingleSelection'
import MoleculeAutosuggestMultipleSelection from './components/MultipleSelection'

import {withOpenToggle} from '@s-ui/hoc'
import {getTarget} from '@s-ui/js/lib/react'
import {getCurrentElementFocused} from '@s-ui/js/lib/dom'

const BASE_CLASS = `sui-MoleculeAutosuggest`
const CLASS_FOCUS = `${BASE_CLASS}--focus`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

const AUTOSUGGEST_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

const getIsTypeableKey = key => {
  const keysEdit = [
    'Backspace',
    'Enter',
    'Meta',
    'Shift',
    'ArrowLeft',
    'ArrowRight'
  ]
  return key.length === 1 || keysEdit.includes(key)
}

const MoleculeAutosuggest = ({
  children,
  disabled,
  errorState,
  id = '',
  isOpen,
  keysCloseList,
  keysSelection,
  multiselection,
  onBlur,
  onChange,
  onEnter,
  onFocus,
  onToggle,
  refMoleculeAutosuggest: refMoleculeAutosuggestFromProps,
  state,
  ...restProps
}) => {
  const refMoleculeAutosuggest = useRef(
    refMoleculeAutosuggestFromProps?.current
  )
  const refsMoleculeAutosuggestOptions = useRef([])
  const refMoleculeAutosuggestInput = useRef()

  const [focus, setFocus] = useState(false)

  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      refsMoleculeAutosuggestOptions.current[index] = createRef()
      return cloneElement(child, {
        innerRef: refsMoleculeAutosuggestOptions.current[index],
        onSelectKey: keysSelection
      })
    })

  const className = cx(
    BASE_CLASS,
    errorState && `${BASE_CLASS}--${AUTOSUGGEST_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${AUTOSUGGEST_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--${state}`,
    {
      [CLASS_FOCUS]: focus,
      [CLASS_DISABLED]: disabled
    }
  )

  const closeList = ev => {
    const {current: domMoleculeAutosuggest} = refMoleculeAutosuggest
    onToggle(ev, {isOpen: false})
    if (multiselection) onChange(ev, {value: ''})
    domMoleculeAutosuggest && !focus && domMoleculeAutosuggest.focus()
    setFocus(false)
    ev.preventDefault()
    ev.stopPropagation()
  }

  const focusFirstOption = (ev, {options}) => {
    if (options[0]) options[0].focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

  const handleKeyDown = ev => {
    ev.persist()
    const {current: domInnerInput} = refMoleculeAutosuggestInput
    const {current: domMoleculeAutosuggest} = refMoleculeAutosuggest
    const {current: optionsFromRef} = refsMoleculeAutosuggestOptions
    const {key} = ev
    const options = optionsFromRef.map(getTarget)

    const isTypeableKey = getIsTypeableKey(key)
    const isSelectionKey = keysSelection.includes(key)

    if (isTypeableKey) {
      if (!isSelectionKey) domInnerInput.focus()
    } else domMoleculeAutosuggest.focus()

    if (isOpen) {
      const currentElementFocused = getCurrentElementFocused()
      const isSomeOptionFocused = [...options].includes(currentElementFocused)
      if (keysCloseList.includes(key)) closeList(ev)
      else if (key === 'ArrowDown' && !isSomeOptionFocused)
        focusFirstOption(ev, {options})
      else if (isSomeOptionFocused) handleFocusIn(ev)
    } else {
      if (key === 'Enter') {
        onEnter(ev)
      }
    }
  }

  const handleFocusIn = ev => {
    onFocus(ev)
    setFocus(true)
  }

  const handleFocusOut = ev => {
    ev.persist()
    const {current: domContainer} = refMoleculeAutosuggest
    const {current: domInnerInput} = refMoleculeAutosuggestInput
    const {current: optionsFromRef} = refsMoleculeAutosuggestOptions
    const options = optionsFromRef.map(getTarget)

    setTimeout(() => {
      const currentElementFocused = getCurrentElementFocused()
      const focusOutFromOutside =
        ![domInnerInput, ...options].includes(currentElementFocused) &&
        !domContainer.contains(currentElementFocused)
      if (focusOutFromOutside) {
        if (isOpen) {
          closeList(ev)
        } else {
          setFocus(false)
          onBlur()
        }
      }
    }, 1)
    setFocus(true)
  }

  const handleInputKeyDown = ev => {
    const {key} = ev
    if (key !== 'ArrowDown') ev.stopPropagation()
    if (key === 'Enter') {
      onEnter(ev)
      closeList(ev)
    }
  }

  const handleClick = () => {
    refMoleculeAutosuggestInput?.current &&
      refMoleculeAutosuggestInput.current.focus()
  }

  const autosuggestSelectionProps = {
    refMoleculeAutosuggestFromProps,
    onToggle,
    onChange,
    onBlur,
    onEnter,
    onFocus,
    isOpen,
    keysCloseList,
    keysSelection,
    disabled,
    errorState,
    state,
    id,
    onInputKeyDown: handleInputKeyDown,
    refMoleculeAutosuggest: refMoleculeAutosuggest,
    innerRefInput: refMoleculeAutosuggestInput,
    children: extendedChildren,
    ...restProps
  }

  const AutosuggestSelection = multiselection
    ? MoleculeAutosuggestMultipleSelection
    : MoleculeAutosuggestSingleSelection

  return (
    <div
      ref={refMoleculeAutosuggest}
      tabIndex="0"
      className={className}
      onKeyDown={handleKeyDown}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
      onClick={handleClick}
      role="combobox"
      aria-controls={id}
      aria-expanded={isOpen}
    >
      <AutosuggestSelection {...autosuggestSelectionProps} />
    </div>
  )
}

MoleculeAutosuggest.propTypes = {
  /** The DOM id global attribute. */
  id: PropTypes.string,

  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

  /** children */
  children: PropTypes.any,

  /** if the component is disabled or not */
  disabled: PropTypes.bool,

  /** value selected */
  value: PropTypes.any,

  /* list of values displayed as tags */
  tags: PropTypes.array,

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** callback when arrow up/down is clicked → to show/hide list of options */
  onToggle: PropTypes.func,

  /* callback to be called with every update of the list of tags */
  onChangeTags: PropTypes.func,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* callback to be called when input losses focus */
  onBlur: PropTypes.func,

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.node,

  /** Icon for clearing values */
  iconClear: PropTypes.node,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** callback triggered when the user press enter when the suggestion is closed */
  onEnter: PropTypes.func,

  /** callback triggered when the user clicks on right icon */
  onClickRightIcon: PropTypes.func,

  /** callback triggered when the user selects the suggested item */
  onSelect: PropTypes.func,

  /** Right UI Icon */
  rightIcon: PropTypes.node,

  /** list of key identifiers that will trigger a selection */
  keysSelection: PropTypes.array,

  /** list of key identifiers that will close the list */
  keysCloseList: PropTypes.array,

  /* object generated w/ Reacte.createRef method to get a DOM reference of internal input */
  refMoleculeAutosuggest: PropTypes.object,

  /* native required html attribute */
  required: PropTypes.bool,

  /* native tabIndex html attribute */
  tabIndex: PropTypes.number,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(AUTOSUGGEST_STATES)),

  /* Button prop to be passe down to the input field */
  rightButton: PropTypes.node,

  /** Left UI Icon */
  leftIcon: PropTypes.node,

  /** callback triggered when the user focuses on the input */
  onFocus: PropTypes.func,

  /** To select input keyboard mode on mobile. It can be 'numeric', 'decimal', 'email', etc */
  inputMode: PropTypes.string,

  /** native input types (text, date, ...), 'sui-password' */
  type: PropTypes.oneOf(Object.values(inputTypes))
}

MoleculeAutosuggest.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onToggle: () => {},
  onEnter: () => {},
  onSelect: () => {},
  onFocus: () => {},
  keysSelection: [' ', 'Enter'],
  keysCloseList: ['Escape']
}

const MoleculeAutoSuggestWithOpenToggle = withOpenToggle(MoleculeAutosuggest)
MoleculeAutoSuggestWithOpenToggle.displayName = 'MoleculeAutosuggest'

export default MoleculeAutoSuggestWithOpenToggle
export {SIZES as MoleculeAutosuggestDropdownListSizes}
export {AUTOSUGGEST_STATES as MoleculeAutosuggestStates}
