import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'

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

class MoleculeSelect extends Component {
  refMoleculeSelect = this.props.refMoleculeSelect || React.createRef()
  refsMoleculeSelectOptions = []
  state = {
    focus: false
  }

  get extendedChildren() {
    const {children, keysSelection} = this.props // eslint-disable-line react/prop-types
    const {refsMoleculeSelectOptions} = this
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        refsMoleculeSelectOptions[index] = React.createRef()
        return React.cloneElement(child, {
          innerRef: refsMoleculeSelectOptions[index],
          onSelectKey: keysSelection
        })
      })
  }

  get className() {
    const {focus} = this.state
    const {disabled} = this.props
    const {errorStateClass} = this
    return cx(
      BASE_CLASS,
      {
        [CLASS_FOCUS]: focus,
        [CLASS_DISABLED]: disabled
      },
      errorStateClass
    )
  }

  get errorStateClass() {
    const {errorState} = this.props
    if (errorState) return `${BASE_CLASS}--${ERROR_STATES.ERROR}`
    if (errorState === false) return `${BASE_CLASS}--${ERROR_STATES.SUCCESS}`
    return ''
  }

  closeList = ev => {
    const {onToggle} = this.props
    const {
      refMoleculeSelect: {current: domMoleculeSelect}
    } = this
    onToggle(ev, {isOpen: false})
    domMoleculeSelect.focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

  focusFirstOption = (ev, {options}) => {
    options[0].focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

  handleToggle = ev => {
    const {onToggle} = this.props
    onToggle(ev, {})
    ev.preventDefault()
    ev.stopPropagation()
  }

  handleKeyDown = ev => {
    ev.persist()
    const {isOpen} = this.props
    const {
      refMoleculeSelect,
      refsMoleculeSelectOptions,
      closeList,
      focusFirstOption,
      handleToggle
    } = this

    const options = refsMoleculeSelectOptions.map(getTarget)
    const domSourceEvent = ev.target
    const domMoleculeSelect = refMoleculeSelect.current
    if (!isOpen) {
      if (['Enter', 'ArrowDown', 'ArrowUp'].includes(ev.key)) {
        if (domSourceEvent === domMoleculeSelect) handleToggle(ev)
        else closeList(ev)
      }
    } else {
      const currentElementFocused = getCurrentElementFocused()
      const isSomeOptionFocused = [...options].includes(currentElementFocused)
      if (ev.key === 'Escape') closeList(ev)
      if (ev.key === 'ArrowDown' && !isSomeOptionFocused)
        focusFirstOption(ev, {options})
    }
  }

  handleSelect = () => {
    this.setState({focus: true})
  }

  handleFocusIn = () => {
    const {disabled} = this.props
    !disabled && this.setState({focus: true})
  }

  handleFocusOut = ev => {
    ev.persist()
    const {refsMoleculeSelectOptions, closeList} = this
    const {isOpen} = this.props
    const options = refsMoleculeSelectOptions.map(getTarget)
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
    this.setState({focus: false})
  }

  render() {
    const {multiselection, ..._props} = this.props
    const {
      className,
      handleKeyDown,
      extendedChildren,
      refMoleculeSelect,
      handleFocusIn,
      handleFocusOut
    } = this

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
            {..._props}
          >
            {extendedChildren}
          </MoleculeSelectMultipleSelection>
        ) : (
          <MoleculeSelectSingleSelection
            refMoleculeSelect={refMoleculeSelect}
            {..._props}
          >
            {extendedChildren}
          </MoleculeSelectSingleSelection>
        )}
      </div>
    )
  }
}

MoleculeSelect.propTypes = {
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
  disabled: PropTypes.bool
}

MoleculeSelect.defaultProps = {
  onChange: () => {},
  onToggle: () => {},
  keysSelection: [' ', 'Enter'],
  disabled: false
}

export default withOpenToggle(MoleculeSelect)
export {SIZES as moleculeSelectDropdownListSizes}
