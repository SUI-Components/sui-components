import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeDropdownList`
const CLASS_HIDDEN = `is-hidden`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

class MoleculeDropdownList extends Component {
  refDropdownList = React.createRef()

  get extendedChildren() {
    const {children, value, size, visible, onSelect, ...props} = this.props
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        const {value: valueChild} = child.props
        const selected = Array.isArray(value)
          ? value.includes(valueChild)
          : value === valueChild
        return React.cloneElement(child, {
          ...props,
          index,
          onSelect,
          selected
        })
      })
  }

  get classNames() {
    const {size, visible} = this.props
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`, {
      [CLASS_HIDDEN]: !visible
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
    const {key} = ev
    const {getFocusedOptionIndex, refDropdownList} = this
    const options = refDropdownList.current.children
    const numOptions = options.length
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const index = getFocusedOptionIndex(options)
      if (index >= 0 || index <= numOptions) {
        if (key === 'ArrowDown' && index < numOptions - 1)
          options[index + 1].focus()
        if (key === 'ArrowUp' && index > 0) options[index - 1].focus()
      }
      ev.preventDefault()
      ev.stopPropagation()
    }
  }

  render() {
    const {refDropdownList, handleKeyDown, classNames, extendedChildren} = this

    return (
      <div
        ref={refDropdownList}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        className={classNames}
      >
        {extendedChildren}
      </div>
    )
  }
}

MoleculeDropdownList.displayName = 'MoleculeDropdownList'

MoleculeDropdownList.propTypes = {
  /** Content to be included in the list (MoleculeDropdownOption) */
  children: PropTypes.node,

  /** Visible or not */
  visible: PropTypes.bool,

  /** selected value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** callback on select option */
  onSelect: PropTypes.func
}

MoleculeDropdownList.defaultProps = {
  size: SIZES.SMALL,
  onSelect: () => {}
}

export default MoleculeDropdownList
export {SIZES as moleculeDropdownListSizes}
