import isEqual from 'lodash.isequal'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

const ExtendedChildren = ({
  value,
  children,
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
  return (
    <Injector
      {...{
        ...props,
        selected: selectedChild === undefined ? selected : selectedChild,
        onSelect: onSelectHandler,
        checkbox: checkboxChild === undefined ? checkbox : checkboxChild
      }}
    >
      {children}
    </Injector>
  )
}

ExtendedChildren.propTypes = {
  /** selected value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** checkbox contained in all DropdownOption **/
  checkbox: PropTypes.bool,
  /** each single node to be included in the list (MoleculeDropdownOption) */
  children: PropTypes.node,
  /** callback on select option **/
  onSelect: PropTypes.func
}

export default ExtendedChildren
