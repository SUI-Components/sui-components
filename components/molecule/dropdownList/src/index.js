import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeDropdownList`
const CLASS_HIDDEN = `${BASE_CLASS}--hidden`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

class MoleculeDropdownList extends Component {
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
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`, {
      [CLASS_HIDDEN]: !visible
    })
  }

  render() {
    const {classNames, extendedChildren} = this
    return <div className={classNames}>{extendedChildren}</div>
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
  size: SIZES.SMALL
}

export default MoleculeDropdownList
export {SIZES as moleculeDropdownListSizes}
