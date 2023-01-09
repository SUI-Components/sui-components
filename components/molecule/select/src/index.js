import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect,
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
  ENABLED_KEYS,
  getClassName,
  getOptionData,
  SELECT_STATES,
  SELECTION_KEYS
} from './config.js'

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
    refMoleculeSelect: refMoleculeSelectFromProps,
    'aria-label': ariaLabel,
    disableDeviceKeyboard
  } = props

  const refMoleculeSelect = useRef(refMoleculeSelectFromProps)
  const refsMoleculeSelectOptions = useRef([])
  const ref = useMergeRefs(forwardedRef, refMoleculeSelect)

  const [isOpenState, setIsOpenState] = useState(isOpen)
  useEffect(() => setIsOpenState(isOpen), [isOpen, setIsOpenState])

  const [optionsData, setOptionsData] = useState(getOptionData(children))
  const [focus, setFocus] = useState(false)

  const options = refsMoleculeSelectOptions.current.map(getTarget)

  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      refsMoleculeSelectOptions.current[index] = createRef()
      return cloneElement(child, {
        innerRef: refsMoleculeSelectOptions.current[index],
        selectKey: keysSelection
      })
    })

  const className = getClassName({state, errorState, focus, disabled})

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

  useEffect(() => {
    setOptionsData(getOptionData(children))
    document.addEventListener('touchend', handleOutsideClick)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('touchend', handleOutsideClick)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [children, handleOutsideClick])

  const focusFirstOption = ev => {
    options[0] && options[0].focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

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
      setTimeout(() => focusFirstOption(ev))
    }
  }

  const handleFocusOut = event => {
    onBlur(event)
    setFocus(false)
  }

  const handleFocusIn = () => !disabled && setFocus(true)

  const handleClick = ev => {
    ev.persist()
    if (focus) {
      setTimeout(() => focusFirstOption(ev))
    }
  }
  const Select = multiselection
    ? MoleculeSelectMultipleSelection
    : MoleculeSelectSingleSelection

  return (
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
        disableDeviceKeyboard={disableDeviceKeyboard}
        {...props}
      >
        {extendedChildren}
      </Select>
    </div>
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

  /* Optional aria-label */
  'aria-label': PropTypes.string,

  /* Optional Boolean attribute to disable the device keyboards (iOS/Android) for the input element */
  disableDeviceKeyboard: PropTypes.bool
}

MoleculeSelect.defaultProps = {
  onBlur: () => {},
  disabled: false,
  keysSelection: SELECTION_KEYS,
  onChange: () => {},
  readOnly: false,
  selectSize: SELECT_SIZES.MEDIUM,
  disableDeviceKeyboard: false
}

MoleculeSelect.displayName = 'MoleculeSelect'

export default MoleculeSelect

export {SIZES as moleculeSelectDropdownListSizes}
export {SELECT_SIZES as moleculeSelectSizes}
export {SELECT_STATES as moleculeSelectStates}
