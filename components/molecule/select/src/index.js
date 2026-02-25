import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react'

import PropTypes from 'prop-types'

import {getTarget} from '@s-ui/js/lib/react'
import {useControlledState} from '@s-ui/react-hooks'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import MoleculeSelectMultipleSelection from './components/MultipleSelection.js'
import MoleculeSelectSingleSelection from './components/SingleSelection.js'
import {
  DropdownContext,
  ENABLED_KEYS,
  getClassName,
  getOptionData,
  SELECT_DROPDOWN_LIST_SIZES,
  SELECT_INPUT_SIZES,
  SELECT_STATES,
  SELECT_TAG_SIZES,
  SELECTION_KEYS
} from './config.js'

const useFunctionalRef = () => useReducer((_s, node) => node, null)

const MoleculeSelect = forwardRef(
  (
    {
      className: classNameFromProps,
      onBlur,
      onFocus,
      isOpen,
      onToggle,
      children,
      errorState,
      state,
      disabled = false,
      keysSelection = SELECTION_KEYS,
      multiselection = false,
      hasSearch = false,
      iconCloseTag,
      tagSize,
      searchIcon,
      searchPlaceholder,
      noResults,
      refMoleculeSelect: refMoleculeSelectFromProps,
      'aria-label': ariaLabel,
      onSearch,
      readOnly = false,
      onChange = () => {},
      selectSize = SELECT_INPUT_SIZES.MEDIUM,
      size: dropdownListSize,
      isBorderless,
      value,
      defaultValue,
      ...props
    },
    forwardedRef
  ) => {
    const [focusedFirstOption, setFocusedFirstOption] = useState(false)
    const refOptions = useRef({})
    const [innerValue, setInnerValue] = useControlledState(value, defaultValue)

    const innerRef = useRef()
    const triggerRef = useRef()
    const searchRef = useRef()
    const refMoleculeSelect = useRef(refMoleculeSelectFromProps)
    const refsMoleculeSelectOptions = useRef([])
    const ref = useMergeRefs(forwardedRef, refMoleculeSelect, innerRef)
    const [inputSearch, setInputRef] = useFunctionalRef()

    const [isOpenState, setIsOpenState] = useState(isOpen || false)
    useEffect(() => setIsOpenState(isOpen), [isOpen, setIsOpenState])

    Object.assign(refOptions.current, getOptionData(children))

    const isFocused = () => {
      const el = innerRef?.current
      return el && (el.matches(':focus-within') || el.contains(document.activeElement))
    }

    const isTriggerFocused = () => {
      const el = triggerRef?.current
      return el && el.matches(':focus')
    }

    const isSearchFocused = () => {
      const el = searchRef?.current
      return el && el.matches(':focus')
    }

    const extendedChildren = useMemo(
      () =>
        Children.toArray(children)
          .filter(Boolean)
          .map((child, index) => {
            refsMoleculeSelectOptions.current[index] = createRef()
            return cloneElement(child, {
              ref: refsMoleculeSelectOptions.current[index],
              selectKey: keysSelection
            })
          }),
      [children, keysSelection]
    )

    const numOptions = Children.toArray(extendedChildren).length

    const className = getClassName({state, errorState, disabled, readOnly, className: classNameFromProps, isBorderless})

    const handleToggle = useCallback(
      (ev, {isOpen, isOutsideEvent} = {isOutsideEvent: false}) => {
        setIsOpenState(isOpen !== undefined ? isOpen : !isOpenState)
        typeof onToggle === 'function' && onToggle(ev, {isOpen})
        if (!isOutsideEvent) {
          ev.preventDefault()
          ev.stopPropagation()
        }
      },
      [isOpenState, onToggle]
    )

    const closeList = useCallback(
      (ev, {isOutsideEvent = false}) => {
        handleToggle(ev, {isOpen: false, isOutsideEvent})
      },
      [handleToggle]
    )

    const handleTriggerClick = event => {
      handleToggle(event, {isOpen: true})
      if (!isOpenState) {
        setTimeout(() => {
          if (hasSearch) {
            focusSearchInput(event)
          } else {
            focusFirstOption(event)
          }
        })
      }
    }

    const handleOutsideClick = useCallback(
      ev => {
        if (disabled || readOnly) return
        if (refMoleculeSelect.current && !refMoleculeSelect.current.contains(ev.target)) {
          // outside click
          closeList(ev, {isOutsideEvent: true})
        }
      },
      [closeList, disabled, readOnly]
    )

    const focusFirstOption = useCallback(
      ev => {
        const options = refsMoleculeSelectOptions.current.map(option => getTarget(option.current))
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
      const options = refsMoleculeSelectOptions.current.map(option => getTarget(option.current))

      return document.activeElement === options[0]
    }, [refsMoleculeSelectOptions])

    useEffect(() => {
      Object.assign(refOptions.current, getOptionData(children))
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

    const handleKeyDown = ev => {
      ev.persist()
      switch (ev.key) {
        case 'Tab':
          if (isOpenState) {
            handleToggle(ev, {isOpen: !isOpenState})
          }
          break
        case 'Escape':
          closeList(ev, {isOutsideEvent: true})
          triggerRef?.current?.focus()
          break
        case 'ArrowDown':
        case 'ArrowUp':
          if (!isOpenState) {
            handleToggle(ev, {isOpen: !isOpenState})
          }
          if (isTriggerFocused()) {
            isOpenState && setTimeout(() => focusSearchInput(ev))
            !hasSearch && setTimeout(() => focusFirstOption(ev))
          }
          if (isSearchFocused() && ev.key === 'ArrowDown') {
            focusFirstOption(ev)
          }
          if (focusedFirstOption && ev.key === 'ArrowUp') {
            inputSearch?.focus()
          }
          break
        default:
          // isOpenState && setTimeout(() => focusSearchInput(ev))
          !hasSearch && setTimeout(() => focusFirstOption(ev))
          break
      }
    }

    const handleFocusOut = event => {
      typeof onBlur === 'function' && onBlur(event)
    }

    const handleFocusIn = () => !disabled && !readOnly && !hasSearch && onFocus && onFocus()

    const handleClick = ev => {
      ev.persist()
      if (isFocused()) {
        if (hasSearch) {
          setTimeout(() => focusSearchInput(ev))
        } else {
          setTimeout(() => focusFirstOption(ev))
        }
      }
    }

    const handleChange = (ev, {value}) => {
      setInnerValue(value)
      onChange && onChange(ev, {value})
    }

    const Select = multiselection ? MoleculeSelectMultipleSelection : MoleculeSelectSingleSelection

    const context = {
      hasSearch,
      setInputRef,
      isOpen: isOpenState,
      inputSearch,
      onSearch,
      isFirstOptionFocused,
      searchPlaceholder,
      searchIcon,
      focusedFirstOption,
      setFocusedFirstOption
    }

    return (
      <DropdownContext.Provider value={context}>
        <div
          ref={ref}
          className={className}
          onKeyDown={handleKeyDown}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          onClick={handleClick}
          aria-label={ariaLabel}
        >
          <Select
            ref={triggerRef}
            refMoleculeSelect={refMoleculeSelect}
            refSearch={searchRef}
            optionsData={refOptions.current}
            isOpen={isOpenState}
            {...props}
            value={innerValue}
            state={state}
            disabled={disabled}
            readOnly={readOnly}
            onTriggerClick={handleTriggerClick}
            onToggle={handleToggle}
            onChange={handleChange}
            size={dropdownListSize}
            selectSize={selectSize}
            tagSize={tagSize}
            multiselection={multiselection}
            {...(multiselection && {
              iconCloseTag,
              keysSelection
            })}
          >
            {numOptions > 0 ? extendedChildren : noResults}
          </Select>
        </div>
      </DropdownContext.Provider>
    )
  }
)

MoleculeSelect.propTypes = {
  /** children */
  children: PropTypes.node,

  /** The DOM id global attribute. */
  id: PropTypes.string,

  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

  /** if multiselection, limit the number of selected values */
  maxTags: PropTypes.number,

  /** value selected */
  value: PropTypes.any,
  /** value selected */
  defaultValue: PropTypes.any,

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** if the list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** callback onBlur to be triggered when focused outside of the input */
  onBlur: PropTypes.func,

  /** callback onFocus to be triggered when focused of the element */
  onFocus: PropTypes.func,

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
  size: PropTypes.oneOf(Object.values(SELECT_DROPDOWN_LIST_SIZES)),

  /** Size of the select(input) */
  selectSize: PropTypes.oneOf(Object.values(SELECT_INPUT_SIZES)),

  /** Size of the tags when its multiple */
  tagSize: PropTypes.oneOf(Object.values(SELECT_INPUT_SIZES)),

  /** list of key identifiers that will trigger a selection */
  keysSelection: PropTypes.array,

  /* object generated w/ React.createRef method to get a DOM reference of internal input */
  refMoleculeSelect: PropTypes.object,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(SELECT_STATES)),

  /** This Boolean attribute prevents the user from interacting with the select */
  disabled: PropTypes.bool,

  /** This Boolean attribute prevents the user from interacting with the input but without disabled styles  */
  readOnly: PropTypes.bool,

  /* native tabIndex html attribute */
  tabIndex: PropTypes.number,

  /* This Boolean attribute activates a search input to search over the options */
  hasSearch: PropTypes.bool,

  /* Icon to be displayed in the search input */
  searchIcon: PropTypes.node,

  /* callback to be triggered when value search input changes   */
  onSearch: PropTypes.func,

  /* Placeholder for the search input text */
  searchPlaceholder: PropTypes.string,

  /* Component to render when no options are provided */
  noResults: PropTypes.node,

  /* Optional aria-label */
  'aria-label': PropTypes.string,

  /**
   * Class name to be added
   */
  className: PropTypes.string,

  /**
   * If true, the select will have no border
   */
  isBorderless: PropTypes.bool
}

MoleculeSelect.displayName = 'MoleculeSelect'

export default MoleculeSelect

export {SELECT_DROPDOWN_LIST_SIZES as moleculeSelectDropdownListSizes}
export {SELECT_INPUT_SIZES as moleculeSelectSizes}
export {SELECT_TAG_SIZES as moleculeSelectTagSizes}
export {SELECT_STATES as moleculeSelectStates}
