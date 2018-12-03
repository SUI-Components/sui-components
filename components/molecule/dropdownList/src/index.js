import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeDropdownList`
const CLASS_HIDDEN = `${BASE_CLASS}--hidden`
const CLASS_FOCUS = `${BASE_CLASS}--focus`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

class MoleculeDropdownList extends Component {
  state = {
    focus: false
  }

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
          onClick: onSelect,
          selected
        })
      })
  }

  get classNames() {
    const {size, visible} = this.props
    const {focus} = this.state
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`, {
      [CLASS_HIDDEN]: !visible,
      [CLASS_FOCUS]: focus === true
    })
  }

  handleKeyDown = e => {
    const items = this.refDropdownList.current.children
    const {key} = e
    if (key !== 'Enter') {
      if (key !== 'ArrowDown' || key !== 'ArrowUp') {
        const currentElementFocused = document.activeElement
        const index = Array.from(items).reduce((acc, option, index) => {
          if (option === currentElementFocused) acc = index
          return acc
        }, 0)

        if (key === 'ArrowDown') items[index + 1].focus()
        if (key === 'ArrowUp') items[index - 1].focus()
      }
    }
  }

  handleFocusIn = e => {
    this.setState({focus: true})
  }

  handleFocusOut = e => {
    this.setState({focus: false})
  }

  render() {
    const {
      refDropdownList,
      handleFocusIn,
      handleFocusOut,
      handleKeyDown,
      classNames,
      extendedChildren
    } = this

    return (
      <div
        ref={refDropdownList}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
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
