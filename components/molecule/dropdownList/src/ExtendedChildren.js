import {cloneElement} from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'

const ExtendedChildren = ({value, children, index, ...props}) => {
  const {value: valueChild} = children.props
  let selected = false
  if (Array.isArray(value)) {
    selected = value.some(innerValue => isEqual(valueChild, innerValue))
  } else {
    selected = isEqual(value, valueChild)
  }
  return cloneElement(children, {
    ...props,
    index,
    selected
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
