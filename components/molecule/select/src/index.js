import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {moleculeDropdownListSizes as SIZES} from '../../dropdownList/src'
import MoleculeSelectSingleSelection from './components/SingleSelection'
import MoleculeSelectMultipleSelection from './components/MultipleSelection'

import withOpenToggle from './hoc/withOpenToggle'

const BASE_CLASS = `sui-MoleculeSelect`

class MoleculeSelect extends Component {
  refMoleculeSelect = React.createRef()

  get extendedChildren() {
    const {children} = this.props // eslint-disable-line react/prop-types
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        return React.cloneElement(child, {
          ref: index
        })
      })
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
    const {getFocusedOptionIndex, refMoleculeSelect} = this
    const options = Object.values(this.refs).map(ref =>
      ReactDOM.findDOMNode(ref)
    )
    const domSourceEvent = ev.target
    const domMoleculeSelect = refMoleculeSelect.current
    if (ev.key === 'Enter') {
      if (domSourceEvent === domMoleculeSelect) {
        onToggle(ev, {})
      } else if (closeOnSelect) {
        onToggle(ev, {open: false})
        domMoleculeSelect.focus()
      }
    }
    if (ev.key === 'ArrowDown' && isOpen && !getFocusedOptionIndex(options)) {
      options[0].focus()
      ev.preventDefault()
    }
  }

  render() {
    const {multiselection, ..._props} = this.props
    const {handleKeyDown, extendedChildren, refMoleculeSelect} = this
    return (
      <div
        ref={refMoleculeSelect}
        tabIndex="0"
        className={BASE_CLASS}
        onKeyDown={handleKeyDown}
      >
        {multiselection ? (
          <MoleculeSelectMultipleSelection {..._props}>
            {extendedChildren}
          </MoleculeSelectMultipleSelection>
        ) : (
          <MoleculeSelectSingleSelection {..._props}>
            {extendedChildren}
          </MoleculeSelectSingleSelection>
        )}
      </div>
    )
  }
}

MoleculeSelect.propTypes = {
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

  /** Icon for arrow in select (down direction when closed) */
  iconArrowDown: PropTypes.node.isRequired,

  /** Icon for arrow in select (up direction when opened) */
  iconArrowUp: PropTypes.node.isRequired,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES))
}

MoleculeSelectSingleSelection.defaultProps = {
  onChange: () => {},
  onToggle: () => {}
}

export default withOpenToggle(MoleculeSelect)
export {SIZES as moleculeSelectDropdownListSizes}
