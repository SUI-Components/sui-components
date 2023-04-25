import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'

import PropTypes from 'prop-types'

import {getTarget} from '@s-ui/js/lib/react'
import {inputSizes as SELECT_SIZES} from '@s-ui/react-atom-input'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'

import MoleculeSelectMultipleSelection from './components/MultipleSelection.js'
import MoleculeSelectSingleSelection from './components/SingleSelection.js'
import {
  DropdownContext,
  ENABLED_KEYS,
  getClassName,
  getOptionData,
  SELECT_STATES,
  SELECTION_KEYS
} from './config.js'

const useFunctionalRef = () => useReducer((_s, node) => node, null)

const MoleculeSelect = forwardRef((props, forwardedRef) => {
  const {
    onBlur,
    isOpen,
    onToggle,
    children,
    errorState,
    state,
    disabled,
    keysSelection,
    multiselection,
    withSearch = false,
    searchPlaceholder,
    filterFn,
    noResults,
    refMoleculeSelect: refMoleculeSelectFromProps,
    'aria-label': ariaLabel
  } = props

  const refMoleculeSelect = useRef(refMoleculeSelectFromProps)
  const refsMoleculeSelectOptions = useRef([])
  const ref = useMergeRefs(forwardedRef, refMoleculeSelect)
  const [inputSearch, setInputRef] = useFunctionalRef()

  const [query, setQuery] = useState('')
  const [isOpenState, setIsOpenState] = useState(isOpen || false)
  useEffect(() => setIsOpenState(isOpen), [isOpen, setIsOpenState])

  const [optionsData, setOptionsData] = useState(getOptionData(children))
  const [focus, setFocus] = useState(false)

  let numOptions = 0
  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .filter(child => {
      if (!filterFn) return true
      return filterFn({option: child.props, query})
    })
    .map((child, index) => {
      numOptions++
      refsMoleculeSelectOptions.current[index] = createRef()
      return cloneElement(child, {
        innerRef: refsMoleculeSelectOptions.current[index],
        selectKey: keysSelection
      })
    })

  const className = getClassName({state, errorState, focus, disabled})

  const onSearch = useCallback(
    ({value}) => {
      setQuery(value)
    },
    [setQuery]
  )

  const closeList = useCallback((ev, {isOutsideEvent = false}) => {
    setIsOpenState(false)
    if (!isOutsideEvent) {
      ev.preventDefault()
      ev.stopPropagation()
    }
  }, [])

  const handleOutsideClick = useCallback(
    ev => {
      if (disabled) return
      if (
        refMoleculeSelect.current &&
        !refMoleculeSelect.current.contains(ev.target)
      ) {
        // outside click
        closeList(ev, {isOutsideEvent: true})
        setFocus(false)
      }
    },
    [closeList, disabled]
  )

  const focusFirstOption = useCallback(
    ev => {
      const options = refsMoleculeSelectOptions.current.map(option =>
        getTarget(option.current)
      )
      options[0] && options[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    },
    [refsMoleculeSelectOptions]
  )

  const focusSearchInput = useCallback(
    ev => {
      const isEnabledKey = ENABLED_KEYS.includes(ev?.key)
      isEnabledKey ? focusFirstOption(ev) : inputSearch?.focus()
      ev?.preventDefault()
      ev?.stopPropagation()
    },
    [inputSearch, focusFirstOption]
  )

  const isFirstOptionFocused = useCallback(() => {
    const options = refsMoleculeSelectOptions.current.map(option =>
      getTarget(option.current)
    )

    return document.activeElement === options[0]
  }, [refsMoleculeSelectOptions])

  useEffect(() => {
    setOptionsData(getOptionData(children))
    document.addEventListener('touchend', handleOutsideClick)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('touchend', handleOutsideClick)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [children, handleOutsideClick])

  useEffect(() => {
    isOpenState && setTimeout(() => focusSearchInput())
  }, [isOpenState, focusSearchInput])

  const handleToggle = (ev, {isOpen} = {}) => {
    setIsOpenState(isOpen !== undefined ? isOpen : !isOpenState)
    typeof onToggle === 'function' && onToggle(ev, {isOpen})
    ev.preventDefault()
    ev.stopPropagation()
  }

  const handleKeyDown = ev => {
    ev.persist()
    const isEnabledKey = ENABLED_KEYS.includes(ev.key)
    const domSourceEvent = ev.target
    const domMoleculeSelect = refMoleculeSelect.current
    if (!isOpenState && isEnabledKey) {
      domSourceEvent === domMoleculeSelect && setIsOpenState(!isOpenState)
      setTimeout(() => focusFirstOption(ev))
    } else if (ev.key === 'Escape') {
      closeList(ev, {isOutsideEvent: true})
    } else {
      isOpenState && setTimeout(() => focusSearchInput(ev))
      !withSearch && setTimeout(() => focusFirstOption(ev))
    }
  }

  const handleFocusOut = event => {
    onBlur(event)
    setFocus(false)
  }

  const handleFocusIn = () => !disabled && !withSearch && setFocus(true)

  const handleClick = ev => {
    ev.persist()
    if (focus) {
      !withSearch && setTimeout(() => focusFirstOption(ev))
    }
  }
  const Select = multiselection
    ? MoleculeSelectMultipleSelection
    : MoleculeSelectSingleSelection

  const context = {
    withSearch,
    setInputRef,
    isOpen: isOpenState,
    focusFirstOption,
    inputSearch,
    onSearch,
    isFirstOptionFocused,
    searchPlaceholder
  }

  return (
    <DropdownContext.Provider value={context}>
      <div
        ref={ref}
        tabIndex="0"
        className={className}
        onKeyDown={handleKeyDown}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        <Select
          refMoleculeSelect={refMoleculeSelect}
          optionsData={optionsData}
          isOpen={isOpenState}
          onToggle={handleToggle}
          {...props}
        >
          {numOptions > 0 ? extendedChildren : noResults}
        </Select>
      </div>
    </DropdownContext.Provider>
  )
})

MoleculeSelect.propTypes = {
  /** children */
  children: PropTypes.any,

  /** The DOM id global attribute. */
  id: PropTypes.string,

  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

  /** if multiselection, limit the number of selected values */
  maxTags: PropTypes.number,

  /** value selected */
  value: PropTypes.any,

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** callback onBlur to be triggered when focused outside of the input */
  onBlur: PropTypes.func,

  /** callback when arrow up/down is clicked → to show/hide list of options */
  onToggle: PropTypes.func,

  /** callback to be triggered when value selected changes */
  onChange: PropTypes.func,

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.node,

  /** Left icon to be shown into the main option */
  leftIcon: PropTypes.node,

  /** Icon for arrow in select (down direction when closed) */
  iconArrowDown: PropTypes.node,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** list of key identifiers that will trigger a selection */
  keysSelection: PropTypes.array,

  /* object generated w/ Reacte.createRef method to get a DOM reference of internal input */
  refMoleculeSelect: PropTypes.object,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(SELECT_STATES)),

  /** This Boolean attribute prevents the user from interacting with the select */
  disabled: PropTypes.bool,

  /** This Boolean attribute prevents the user from interacting with the input but without disabled styles  */
  readOnly: PropTypes.bool,

  /** Size of the select(input) */
  selectSize: PropTypes.oneOf(Object.values(SELECT_SIZES)),

  /* native tabIndex html attribute */
  tabIndex: PropTypes.number,

  /* This Boolean attribute activates a search input to search over the options */
  withSearch: PropTypes.bool,

  /* This function attribute allows you to configure how the options will be filtered based on the current search query */
  filterFn: PropTypes.func,

  /* Placeholder for the search input text */
  searchPlaceholder: PropTypes.string,

  /* Component to render when no options are found after aplying the filterFn */
  noResults: PropTypes.node,

  /* Optional aria-label */
  'aria-label': PropTypes.string
}

MoleculeSelect.defaultProps = {
  onBlur: () => {},
  disabled: false,
  keysSelection: SELECTION_KEYS,
  onChange: () => {},
  readOnly: false,
  selectSize: SELECT_SIZES.MEDIUM
}

MoleculeSelect.displayName = 'MoleculeSelect'

export default MoleculeSelect

export {SIZES as moleculeSelectDropdownListSizes}
export {SELECT_SIZES as moleculeSelectSizes}
export {SELECT_STATES as moleculeSelectStates}
