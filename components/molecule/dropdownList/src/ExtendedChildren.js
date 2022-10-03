import isEqual from 'lodash.isequal'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

const ExtendedChildren = ({value, children, onSelect, checkbox, ...props}) => {
  const {value: valueChild} = children.props
  const selected = Array.isArray(value)
    ? value.some(innerValue => isEqual(valueChild, innerValue))
    : isEqual(value, valueChild)
  return (
    <Injector
      {...{
        ...props,
        selected,
        onSelect,
        checkbox
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
