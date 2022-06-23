import {cloneElement} from 'react'

import isEqual from 'lodash.isequal'
import PropTypes from 'prop-types'

const ExtendedChildren = ({
  value,
  children,
  index,
  onSelect: onSelectListHandler,
  checkbox,
  ...props
}) => {
  const {
    value: valueChild,
    onSelect: onSelectOptionHandler,
    selected: selectedChild,
    checkbox: checkboxChild
  } = children.props
  const selected = Array.isArray(value)
    ? value.some(innerValue => isEqual(valueChild, innerValue))
    : isEqual(value, valueChild)
  const onSelectHandler = (...args) => {
    typeof onSelectOptionHandler === 'function' &&
      onSelectOptionHandler(...args)
    typeof onSelectListHandler === 'function' && onSelectListHandler(...args)
  }
  return cloneElement(children, {
    ...props,
    index,
    selected: selectedChild === undefined ? selected : selectedChild,
    onSelect: onSelectHandler,
    checkbox: checkboxChild === undefined ? checkbox : checkboxChild
  })
}

ExtendedChildren.propTypes = {
  /** selected value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** each sinle node to be included in the list (MoleculeDropdownOption) */
  children: PropTypes.node,
  /** numeric identifier **/
  index: PropTypes.number
}

export default ExtendedChildren
