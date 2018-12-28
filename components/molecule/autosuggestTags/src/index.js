/* eslint-disable */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'
import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'

import MoleculeAutosuggestSingleSelection from './components/SingleSelection'
import MoleculeAutosuggestMultipleSelection from './components/MultipleSelection'

import withOpenToggle from './hoc/withOpenToggle'

const BASE_CLASS = `sui-MoleculeAutosuggest`
const CLASS_FOCUS = `${BASE_CLASS}--focus`

class MoleculeAutosuggest extends Component {
  refMoleculeAutosuggest = React.createRef()
  state = {
    focus: false
  }

  get extendedChildren() {
    const {children, multiselection, onEnterKey} = this.props // eslint-disable-line react/prop-types
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        const _onEnterKey = multiselection
          ? onEnterKey || ' '
          : onEnterKey || 'Enter'
        return React.cloneElement(child, {
          ref: index,
          onEnterKey: _onEnterKey
        })
      })
  }

  get className() {
    const {focus} = this.state
    return cx(BASE_CLASS, {[CLASS_FOCUS]: focus})
  }

  getFocusedOptionIndex = options => {
    const currentElementFocused = document.activeElement
    return Array.from(options).reduce((focusedOptionIndex, option, index) => {
      if (option === currentElementFocused) focusedOptionIndex = index
      return focusedOptionIndex
    }, 0)
  }

  handleKeyDown = ev => {
    const {onToggle, closeOnSelect, isOpen} = this.props
    const {getFocusedOptionIndex, refMoleculeAutosuggest} = this
    const options = Object.values(this.refs).map(ref =>
      ReactDOM.findDOMNode(ref)
    )
    const domSourceEvent = ev.target
    const domMoleculeAutosuggest = refMoleculeAutosuggest.current
    if (ev.key === 'Enter') {
      if (domSourceEvent === domMoleculeAutosuggest) {
        onToggle(ev, {})
      } else if (closeOnSelect) {
        onToggle(ev, {open: false})
        domMoleculeAutosuggest.focus()
      }
    }
    if (ev.key === 'ArrowDown' && isOpen && !getFocusedOptionIndex(options)) {
      options[0].focus()
      ev.preventDefault()
    }
  }

  handleFocusIn = () => {
    this.setState({focus: true})
  }

  handleFocusOut = () => {
    this.setState({focus: false})
  }

  render() {
    const {multiselection, ..._props} = this.props
    const {
      className,
      handleKeyDown,
      extendedChildren,
      refMoleculeAutosuggest,
      handleFocusIn,
      handleFocusOut
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
          <MoleculeAutosuggestMultipleSelection {..._props}>
            {extendedChildren}
          </MoleculeAutosuggestMultipleSelection>
        ) : (
          <MoleculeAutosuggestSingleSelection {..._props}>
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

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** callback when arrow up/down is clicked → to show/hide list of options */
  onToggle: PropTypes.func,

  /** callback to be triggered when value selected changes */
  onChange: PropTypes.func,

  /** if list should be hidden when any value is selected */
  closeOnSelect: PropTypes.bool,

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.node.isRequired,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES))
}

MoleculeAutosuggestSingleSelection.defaultProps = {
  onChange: () => {},
  onToggle: () => {}
}

export default withOpenToggle(MoleculeAutosuggest)
export {
  SIZES as MoleculeAutosuggestDropdownListSizes,
  MoleculeDropdownOption as MoleculeAutosuggestOption
}
