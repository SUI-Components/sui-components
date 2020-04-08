import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'
import {inputSizes as SELECT_SIZES} from '@s-ui/react-atom-input'

import MoleculeSelectSingleSelection from './components/SingleSelection'
import MoleculeSelectMultipleSelection from './components/MultipleSelection'

import {withOpenToggle} from '@s-ui/hoc'
import {getTarget} from '@s-ui/js/lib/react'
import {getCurrentElementFocused} from '@s-ui/js/lib/dom'

const BASE_CLASS = `sui-MoleculeSelect`
const CLASS_FOCUS = `${BASE_CLASS}--focus`
const CLASS_DISABLED = `is-disabled`

const SELECT_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

const ENABLED_KEYS = ['Enter', 'ArrowDown', 'ArrowUp']

const getOptionData = children => {
  const optionsData = {}
  React.Children.forEach(children, child => {
    const {children, value} = child.props
    optionsData[value] = children
  })
  return optionsData
}

const MoleculeSelect = props => {
  const {
    isOpen,
    onToggle,
    children,
    errorState,
    state,
    disabled,
    keysSelection,
    refMoleculeSelect: refMoleculeSelectFromProps
  } = props
  const refMoleculeSelect = useRef(refMoleculeSelectFromProps)
  const refsMoleculeSelectOptions = useRef([])

  const [optionsData, setOptionsData] = useState(getOptionData(children))
  const [focus, setFocus] = useState(false)

  const extendedChildren = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      refsMoleculeSelectOptions.current[index] = React.createRef()
      return React.cloneElement(child, {
        innerRef: refsMoleculeSelectOptions.current[index],
        onSelectKey: keysSelection
      })
    })

  const className = cx(
    BASE_CLASS,
    errorState && `${BASE_CLASS}--${SELECT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${SELECT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--${state}`,
    {
      [CLASS_FOCUS]: focus,
      [CLASS_DISABLED]: disabled
    }
  )

  const closeList = (ev, {isOutsideEvent = false}) => {
    onToggle(ev, {isOpen: false})
    if (!isOutsideEvent) {
      ev.preventDefault()
      ev.stopPropagation()
    }
  }

  const handleOutsideClick = ev => {
    if (disabled) return
    if (
      refMoleculeSelect.current &&
      !refMoleculeSelect.current.contains(ev.target)
    ) {
      // outside click
      closeList(ev, {isOutsideEvent: true})
      setFocus(false)
    }
  }

  useEffect(() => {
    document.addEventListener('touchend', handleOutsideClick)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('touchend', handleOutsideClick)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setOptionsData(getOptionData(children))
  }, [children])

  const focusFirstOption = (ev, {options}) => {
    options[0] && options[0].focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

  const handleToggle = ev => {
    onToggle(ev, {})
    ev.preventDefault()
    ev.stopPropagation()
  }

  const handleKeyDown = ev => {
    ev.persist()
    const isEnabledKey = ENABLED_KEYS.includes(ev.key)
    const options = refsMoleculeSelectOptions.current.map(getTarget)
    const domSourceEvent = ev.target
    const domMoleculeSelect = refMoleculeSelect.current

    if (!isOpen && isEnabledKey) {
      domSourceEvent === domMoleculeSelect && handleToggle(ev)
    } else {
      const currentElementFocused = getCurrentElementFocused()
      const isSomeOptionFocused = [...options].includes(currentElementFocused)
      const {key} = ev
      if (key === 'Escape') closeList(ev)
      if (key === 'ArrowDown' && !isSomeOptionFocused)
        focusFirstOption(ev, {options})
      const optionToFocusOn = Array.from(options).find(
        option =>
          option &&
          option.innerText.charAt(0).toLowerCase() === key.toLowerCase()
      )
      optionToFocusOn && optionToFocusOn.focus()
    }
  }

  const handleFocusOut = ev => {
    setFocus(false)
  }

  const handleFocusIn = () => {
    !disabled && setFocus(true)
  }

  const {multiselection, ...propsFromProps} = props

  return (
    <div
      ref={refMoleculeSelect}
      tabIndex="0"
      className={className}
      onKeyDown={handleKeyDown}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
    >
      {multiselection ? (
        <MoleculeSelectMultipleSelection
          refMoleculeSelect={refMoleculeSelect}
          optionsData={optionsData}
          {...propsFromProps}
        >
          {extendedChildren}
        </MoleculeSelectMultipleSelection>
      ) : (
        <MoleculeSelectSingleSelection
          refMoleculeSelect={refMoleculeSelect}
          optionsData={optionsData}
          {...propsFromProps}
        >
          {extendedChildren}
        </MoleculeSelectSingleSelection>
      )}
    </div>
  )
}

MoleculeSelect.propTypes = {
  /** children */
  children: PropTypes.any,

  /** The DOM id global attribute. */
  id: PropTypes.string,

  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

  /** value selected */
  value: PropTypes.any,

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** callback when arrow up/down is clicked → to show/hide list of options */
  onToggle: PropTypes.func,

  /** callback to be triggered when value selected changes */
  onChange: PropTypes.func,

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.node,

  /** Icon for arrow in select (down direction when closed) */
  iconArrowDown: PropTypes.node.isRequired,

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
  tabIndex: PropTypes.number
}

MoleculeSelect.defaultProps = {
  disabled: false,
  keysSelection: [' ', 'Enter'],
  onChange: () => {},
  onToggle: () => {},
  readOnly: false,
  selectSize: SELECT_SIZES.MEDIUM
}

export default withOpenToggle(MoleculeSelect)
export {SIZES as moleculeSelectDropdownListSizes}
export {SELECT_SIZES as moleculeSelectSizes}
export {SELECT_STATES as moleculeSelectStates}
