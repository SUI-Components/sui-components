import {
  Children,
  createRef,
  cloneElement,
  useRef,
  useState,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import {inputTypes} from '@s-ui/react-atom-input'

import MoleculeAutosuggestSingleSelection from './components/SingleSelection'
import MoleculeAutosuggestMultipleSelection from './components/MultipleSelection'

import {getTarget} from '@s-ui/js/lib/react'
import {getCurrentElementFocused} from '@s-ui/js/lib/dom'

import {
  BASE_CLASS,
  CLASS_DISABLED,
  AUTOSUGGEST_STATES,
  CLOSE_KEYS_LIST,
  SELECT_KEYS_LIST,
  getIsTypeableKey
} from './config'

const MoleculeAutosuggest = ({
  autoClose = true,
  children,
  disabled,
  errorState,
  id = '',
  isOpen,
  keysCloseList = CLOSE_KEYS_LIST,
  keysSelection = SELECT_KEYS_LIST,
  multiselection,
  onBlur,
  onChange,
  onClear,
  onEnter,
  onFocus,
  onSelect,
  onToggle,
  refMoleculeAutosuggest: refMoleculeAutosuggestFromProps = {},
  refMoleculeAutosuggestInput: refMoleculeAutosuggestInputFromProps = {},
  state,
  ...restProps
}) => {
  const innerRefMoleculeAutosuggest = useRef()
  const refMoleculeAutosuggest = useMergeRefs(
    innerRefMoleculeAutosuggest,
    refMoleculeAutosuggestFromProps
  )

  const [isOpenState, setOpenState] = useState(isOpen)
  useEffect(() => {
    setOpenState(isOpen)
  }, [isOpen, setOpenState])

  const refsMoleculeAutosuggestOptions = useRef([])
  const innerRefMoleculeAutosuggestInput = useRef()
  const refMoleculeAutosuggestInput = useMergeRefs(
    innerRefMoleculeAutosuggestInput,
    refMoleculeAutosuggestInputFromProps
  )

  const [focus, setFocus] = useState(false)

  const handleToggle = (event, {isOpen}) => {
    setOpenState(isOpen === undefined ? !isOpenState : !!isOpen)
    typeof onToggle === 'function' && onToggle(event, {isOpen})
  }

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
      [CLASS_DISABLED]: disabled
    }
  )

  const closeList = ev => {
    const {current: domMoleculeAutosuggest} = innerRefMoleculeAutosuggest
    handleToggle(ev, {isOpen: false})
    if (multiselection && typeof onChange === 'function') {
      onChange(ev, {value: ''})
    }
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
    const {current: optionsFromRef} = refsMoleculeAutosuggestOptions
    const {current: innerRefInput} = innerRefMoleculeAutosuggestInput
    const {key} = ev
    const options = optionsFromRef.map(getTarget)

    const isTypeableKey = getIsTypeableKey(key)
    const isSelectionKey = keysSelection.includes(key)

    if (isTypeableKey) {
      if (!isSelectionKey) domInnerInput.focus()
    }

    if (isOpenState) {
      const currentElementFocused = getCurrentElementFocused()
      const isSomeOptionFocused = [...options].includes(currentElementFocused)
      if (keysCloseList.includes(key)) closeList(ev)
      else if (key === 'ArrowDown' && !isSomeOptionFocused)
        focusFirstOption(ev, {options})
      else if (isSomeOptionFocused) handleFocusIn(ev)
      if (key === 'Enter') {
        typeof onEnter === 'function' && onEnter(ev)
        innerRefInput && innerRefInput.focus()
      }
    }
  }

  const handleFocusIn = ev => {
    typeof onFocus === 'function' && onFocus(ev)
    setFocus(true)
  }

  const handleFocusOut = ev => {
    ev.persist()
    const {current: domContainer} = innerRefMoleculeAutosuggest
    const {current: domInnerInput} = innerRefMoleculeAutosuggestInput
    const {current: optionsFromRef} = refsMoleculeAutosuggestOptions
    const options = optionsFromRef.map(getTarget)

    setTimeout(() => {
      const currentElementFocused = getCurrentElementFocused()
      const focusOutFromOutside =
        ![domInnerInput, ...options].includes(currentElementFocused) &&
        !domContainer.contains(currentElementFocused)
      if (focusOutFromOutside) {
        if (autoClose && isOpenState) {
          closeList(ev)
        } else {
          setFocus(false)
          typeof onBlur === 'function' && onBlur()
        }
      }
    }, 1)
    setFocus(true)
  }

  const handleInputKeyDown = ev => {
    const {key} = ev
    if (key !== 'ArrowDown') ev.stopPropagation()
    if (key === 'Enter') {
      typeof onEnter === 'function' && onEnter(ev)
      onEnter && typeof onEnter === 'function' && autoClose && closeList(ev)
    }
  }

  const handleClick = () => {
    const {current: innerRefInput} = innerRefMoleculeAutosuggestInput
    innerRefInput && innerRefInput.focus()
  }

  const autosuggestSelectionProps = {
    autoClose,
    children: extendedChildren,
    disabled,
    errorState,
    id,
    innerRefInput: refMoleculeAutosuggestInput,
    isOpen: isOpenState,
    keysCloseList,
    keysSelection,
    onBlur,
    onChange,
    onClear,
    onEnter,
    onFocus,
    onInputKeyDown: handleInputKeyDown,
    onKeyDown: handleKeyDown,
    onSelect,
    onToggle: handleToggle,
    state,
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
      aria-expanded={isOpenState}
    >
      <AutosuggestSelection {...autosuggestSelectionProps} />
    </div>
  )
}

MoleculeAutosuggest.propTypes = {
  /** Auto close suggestion list. */
  autoClose: PropTypes.bool,

  /** children */
  children: PropTypes.any,

  /** if the component is disabled or not */
  disabled: PropTypes.bool,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /** Icon for clearing values */
  iconClear: PropTypes.node,

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.node,

  /** The DOM id global attribute. */
  id: PropTypes.string,

  /** To select input keyboard mode on mobile. It can be 'numeric', 'decimal', 'email', etc */
  inputMode: PropTypes.string,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** list of key identifiers that will close the list */
  keysCloseList: PropTypes.array,

  /** list of key identifiers that will trigger a selection */
  keysSelection: PropTypes.array,

  /** Left UI Icon */
  leftIcon: PropTypes.node,

  /** Max allowed input value length */
  maxLength: PropTypes.number,

  /** Min required input value length */
  minLength: PropTypes.number,

  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

  /** callback to be called when input losses focus */
  onBlur: PropTypes.func,

  /** callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /** callback to be called when clear icon is clicked */
  onClear: PropTypes.func,

  /** callback to be called with every update of the list of tags */
  onChangeTags: PropTypes.func,

  /** callback triggered when the user clicks on right icon */
  onClickRightIcon: PropTypes.func,

  /** callback triggered when the user press enter when the suggestion is closed */
  onEnter: PropTypes.func,

  /** callback triggered when the user focuses on the input */
  onFocus: PropTypes.func,

  /** callback triggered when the user selects the suggested item */
  onSelect: PropTypes.func,

  /** callback when arrow up/down is clicked → to show/hide list of options */
  onToggle: PropTypes.func,

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** object generated w/ React.createRef method to get a DOM reference of wrapper div */
  refMoleculeAutosuggest: PropTypes.object,

  /** object generated w/ React.createRef method to get a DOM reference of internal input */
  refMoleculeAutosuggestInput: PropTypes.object,

  /** native required html attribute */
  required: PropTypes.bool,

  /** Button prop to be passe down to the input field */
  rightButton: PropTypes.node,

  /** Right UI Icon */
  rightIcon: PropTypes.node,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(AUTOSUGGEST_STATES)),

  /** native tabIndex html attribute */
  tabIndex: PropTypes.number,

  /** list of values displayed as tags */
  tags: PropTypes.array,

  /** native input types (text, date, ...), 'sui-password' */
  type: PropTypes.oneOf(Object.values(inputTypes)),

  /** value selected */
  value: PropTypes.any
}

MoleculeAutosuggest.displayName = 'MoleculeAutosuggest'

export default MoleculeAutosuggest
