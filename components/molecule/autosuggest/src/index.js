import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'

import MoleculeAutosuggestSingleSelection from './components/SingleSelection'
import MoleculeAutosuggestMultipleSelection from './components/MultipleSelection'

import {withOpenToggle} from '@s-ui/hoc'
import {getTarget} from '@s-ui/js/lib/react'
import {getCurrentElementFocused} from '@s-ui/js/lib/dom'

const BASE_CLASS = `sui-MoleculeAutosuggest`
const CLASS_FOCUS = `${BASE_CLASS}--focus`

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

class MoleculeAutosuggest extends Component {
  refMoleculeAutosuggest =
    this.props.refMoleculeAutosuggest || React.createRef()
  refsMoleculeAutosuggestOptions = []
  refMoleculeAutosuggestInput = React.createRef()
  state = {
    focus: false
  }

  get extendedChildren() {
    const {children, keysSelection} = this.props // eslint-disable-line react/prop-types
    const {refsMoleculeAutosuggestOptions} = this
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        refsMoleculeAutosuggestOptions[index] = React.createRef()
        return React.cloneElement(child, {
          innerRef: refsMoleculeAutosuggestOptions[index],
          onSelectKey: keysSelection
        })
      })
  }

  get className() {
    const {focus} = this.state
    return cx(BASE_CLASS, {[CLASS_FOCUS]: focus})
  }

  closeList = ev => {
    const {onToggle, onChange, multiselection} = this.props
    const {
      refMoleculeAutosuggest: {current: domMoleculeAutosuggest}
    } = this
    onToggle(ev, {isOpen: false})
    if (multiselection) onChange(ev, {value: ''})
    domMoleculeAutosuggest.focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

  focusFirstOption = (ev, {options}) => {
    if (options[0]) options[0].focus()
    ev.preventDefault()
    ev.stopPropagation()
  }

  handleKeyDown = ev => {
    ev.persist()
    const {isOpen, keysCloseList, keysSelection} = this.props
    const {
      refsMoleculeAutosuggestOptions,
      refMoleculeAutosuggestInput: {current: domInnerInput},
      refMoleculeAutosuggest: {current: domMoleculeAutosuggest},
      closeList,
      focusFirstOption
    } = this
    const {key} = ev
    const options = refsMoleculeAutosuggestOptions.map(getTarget)

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
      else if (isSomeOptionFocused) this.handleFocusIn(ev)
    }
  }

  handleFocusIn = ev => {
    this.setState({focus: true})
  }

  handleFocusOut = ev => {
    ev.persist()
    const {
      refsMoleculeAutosuggestOptions,
      refMoleculeAutosuggestInput: {current: domInnerInput},
      closeList
    } = this
    const options = refsMoleculeAutosuggestOptions.map(getTarget)
    const {isOpen} = this.props
    setTimeout(() => {
      const currentElementFocused = getCurrentElementFocused()
      const focusOutFromOutside = ![domInnerInput, ...options].includes(
        currentElementFocused
      )
      if (focusOutFromOutside && isOpen) closeList(ev)
    }, 1)
    this.setState({focus: false})
  }

  handleInputKeyDown = ev => {
    const {key} = ev
    if (key !== 'ArrowDown') ev.stopPropagation()
  }

  render() {
    const {multiselection, ...props} = this.props
    const {
      className,
      handleKeyDown,
      extendedChildren,
      refMoleculeAutosuggest,
      refMoleculeAutosuggestInput,
      handleFocusIn,
      handleFocusOut,
      handleInputKeyDown
    } = this

    return (
      <div
        ref={refMoleculeAutosuggest}
        tabIndex="0"
        className={className}
        onKeyDown={handleKeyDown}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
      >
        {multiselection ? (
          <MoleculeAutosuggestMultipleSelection
            {...props}
            onInputKeyDown={handleInputKeyDown}
            refMoleculeAutosuggest={refMoleculeAutosuggest}
            innerRefInput={refMoleculeAutosuggestInput}
          >
            {extendedChildren}
          </MoleculeAutosuggestMultipleSelection>
        ) : (
          <MoleculeAutosuggestSingleSelection
            {...props}
            onInputKeyDown={handleInputKeyDown}
            refMoleculeAutosuggest={refMoleculeAutosuggest}
            innerRefInput={refMoleculeAutosuggestInput}
          >
            {extendedChildren}
          </MoleculeAutosuggestSingleSelection>
        )}
      </div>
    )
  }
}

MoleculeAutosuggest.propTypes = {
  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

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

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.node,

  /** Icon for closing (removing) tags */
  iconClear: PropTypes.node,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** list of key identifiers that will trigger a selection */
  keysSelection: PropTypes.array,

  /** list of key identifiers that will close the list */
  keysCloseList: PropTypes.array,

  /* object generated w/ Reacte.createRef method to get a DOM reference of internal input */
  refMoleculeAutosuggest: PropTypes.object
}

MoleculeAutosuggest.defaultProps = {
  onChange: () => {},
  onToggle: () => {},
  keysSelection: [' ', 'Enter'],
  keysCloseList: ['Escape']
}

export default withOpenToggle(MoleculeAutosuggest)
export {SIZES as MoleculeAutosuggestDropdownListSizes}
