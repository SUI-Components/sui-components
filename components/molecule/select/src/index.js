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

const ERROR_STATES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

const ENABLED_KEYS = ['Enter', 'ArrowDown', 'ArrowUp']

const getErrorStateClass = errorState => {
  if (errorState) return `${BASE_CLASS}--${ERROR_STATES.ERROR}`
  if (errorState === false) return `${BASE_CLASS}--${ERROR_STATES.SUCCESS}`
  return ''
}

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
    {
      [CLASS_FOCUS]: focus,
      [CLASS_DISABLED]: disabled
    },
    getErrorStateClass(errorState)
  )

  useEffect(() => {
    setOptionsData(getOptionData(children))
  }, [children])

  const closeList = ev => {
    onToggle(ev, {isOpen: false})
    ev.preventDefault()
    ev.stopPropagation()
  }

  const focusFirstOption = (ev, {options}) => {
    options[0].focus()
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
      if (ev.key === 'Escape') closeList(ev)
      if (ev.key === 'ArrowDown' && !isSomeOptionFocused)
        focusFirstOption(ev, {options})
    }
  }

  const handleFocusIn = () => {
    !disabled && setFocus(true)
  }

  const handleFocusOut = ev => {
    ev.persist()
    const options = refsMoleculeSelectOptions.current.map(getTarget)
    const firstOption = options[0]
    setTimeout(() => {
      const currentElementFocused = getCurrentElementFocused()
      const isSomeOptionFocused = [...options].includes(currentElementFocused)
      const isOptionListFocused = firstOption
        ? currentElementFocused.isSameNode(firstOption.parentNode)
        : false

      if (!isSomeOptionFocused && !isOptionListFocused && isOpen) {
        closeList(ev)
      }
    }, 1)
    setFocus(false)
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

  /** This Boolean attribute prevents the user from interacting with the select */
  disabled: PropTypes.bool,

  /** This Boolean attribute prevents the user from interacting with the input but without disabled styles  */
  readOnly: PropTypes.bool,

  /** Size of the select(input) */
  selectSize: PropTypes.oneOf(Object.values(SELECT_SIZES))
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
