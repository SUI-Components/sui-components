import {Children, cloneElement, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const MoleculeRadioButtonGroup = ({
  id,
  value: initValue,
  onChange: onChangeFromProps,
  children,
  name,
  ...props
}) => {
  const [value, setValue] = useState(initValue)

  useEffect(() => {
    setValue(initValue)
  }, [initValue])

  const handleChangeGroup = (e, {name, value: innerValue}) => {
    setValue(innerValue)
    typeof onChangeFromProps === 'function' &&
      onChangeFromProps(e, {name, value: innerValue})
  }

  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      const {
        props: {value: childValue}
      } = child
      const checked = value === childValue
      const onChange = handleChangeGroup
      return cloneElement(child, {
        ...props,
        checked,
        onChange,
        name
      })
    })

  return <div className={BASE_CLASS}>{extendedChildren}</div>
}

MoleculeRadioButtonGroup.displayName = 'MoleculeRadioButtonGroup'

MoleculeRadioButtonGroup.defaultProps = {
  checked: false
}

MoleculeRadioButtonGroup.propTypes = {
  /* children */
  children: PropTypes.any,

  /* name */
  name: PropTypes.string,

  /* The DOM id global attribute. */
  id: PropTypes.string,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Value assigned to the radio button */
  value: PropTypes.string
}

export default MoleculeRadioButtonGroup
