import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeDropdownOption from '../../dropdownOption/src'
import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'

import MoleculeSelectSingleSelection from './components/SingleSelection'
import MoleculeSelectMultipleSelection from './components/MultipleSelection'

import withOpenToggle from './hoc/withOpenToggle'

const BASE_CLASS = `sui-MoleculeSelect`
const CLASS_FOCUS = `${BASE_CLASS}--focus`

class MoleculeSelect extends Component {
  refMoleculeSelect = React.createRef()
  refsMoleculeSelectOptions = []
  state = {
    focus: false
  }

  get extendedChildren() {
    const {children, multiselection, onEnterKey} = this.props // eslint-disable-line react/prop-types
    const {refsMoleculeSelectOptions} = this
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        refsMoleculeSelectOptions[index] = React.createRef()
        return React.cloneElement(child, {
          innerRef: refsMoleculeSelectOptions[index],
          onEnterKey: onEnterKey || (multiselection ? ' ' : 'Enter')
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
    const {
      getFocusedOptionIndex,
      refMoleculeSelect,
      refsMoleculeSelectOptions
    } = this

    const options = refsMoleculeSelectOptions.map(({current}) => current)
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

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES))
}

MoleculeSelectSingleSelection.defaultProps = {
  onChange: () => {},
  onToggle: () => {}
}

export default withOpenToggle(MoleculeSelect)
export {
  SIZES as moleculeSelectDropdownListSizes,
  MoleculeDropdownOption as MoleculeSelectOption
}
