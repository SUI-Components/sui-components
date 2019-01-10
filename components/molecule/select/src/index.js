import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'
import {moleculeDropdownListSizes as SIZES} from '@s-ui/react-molecule-dropdown-list'

import MoleculeSelectSingleSelection from './components/SingleSelection'
import MoleculeSelectMultipleSelection from './components/MultipleSelection'

import {withOpenToggle} from '@s-ui/hoc'

const BASE_CLASS = `sui-MoleculeSelect`
const CLASS_FOCUS = `${BASE_CLASS}--focus`

class MoleculeSelect extends Component {
  refMoleculeSelect = React.createRef()
  refsMoleculeSelectOptions = []
  state = {
    focus: false
  }

  get extendedChildren() {
    const {children, multiselection, onSelectKey} = this.props // eslint-disable-line react/prop-types
    const {refsMoleculeSelectOptions} = this
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        refsMoleculeSelectOptions[index] = React.createRef()
        return React.cloneElement(child, {
          innerRef: refsMoleculeSelectOptions[index],
          onSelectKey: onSelectKey || (multiselection ? ' ' : ['Enter', ' '])
        })
      })
  }

  get className() {
    const {focus} = this.state
    return cx(BASE_CLASS, {[CLASS_FOCUS]: focus})
  }

  get currentSelection() {
    return document.activeElement
  }

  getFocusedOptionIndex = options =>
    Array.from(options).reduce((focusedOptionIndex, option, index) => {
      if (option === this.currentSelection) focusedOptionIndex = index
      return focusedOptionIndex
    }, null)

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

  handleKeyDown = ev => {
    ev.persist()
    const {onToggle, closeOnSelect, isOpen, multiselection} = this.props
    const {
      getFocusedOptionIndex,
      refMoleculeSelect,
      refsMoleculeSelectOptions,
      closeList,
      focusFirstOption
    } = this

    const options = refsMoleculeSelectOptions.map(({current}) => current)
    const domSourceEvent = ev.target
    const domMoleculeSelect = refMoleculeSelect.current
    if (!isOpen) {
      if (['Enter', 'ArrowDown', 'ArrowUp'].includes(ev.key)) {
        if (domSourceEvent === domMoleculeSelect) onToggle(ev, {})
        else if (closeOnSelect) closeList(ev)
      }
    } else {
      if (ev.key === 'Escape') closeList(ev)
      if (ev.key === 'Enter' && multiselection) closeList(ev)
      if (ev.key === 'ArrowDown' && !getFocusedOptionIndex(options))
        focusFirstOption(ev, {options})
    }
  }

  handleSelect = () => {
    this.setState({focus: true})
  }

  handleFocusIn = () => {
    this.setState({focus: true})
  }

  handleFocusOut = ev => {
    ev.persist()
    const {refsMoleculeSelectOptions, getFocusedOptionIndex, closeList} = this
    const {isOpen} = this.props
    const options = refsMoleculeSelectOptions.map(({current}) => current)
    setTimeout(() => {
      const anyOptionSelected = getFocusedOptionIndex(options) !== null
      const anyChecboxSelected = this.currentSelection.type === 'checkbox'
      if (!anyOptionSelected && !anyChecboxSelected && isOpen) {
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
