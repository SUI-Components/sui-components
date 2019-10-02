import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {withSwitchValue} from '@s-ui/hoc'

const withCheckedValue = BaseComponent => {
  const displayName = BaseComponent.displayName

  const BaseComponentWithStateValue = withSwitchValue(BaseComponent)

  const BaseComponentWithCheckedValue = ({
    checked: checkedFromProps = false,
    onChange: onChangeFromProps,
    ...props
  }) => {
    const [checked, setChecked] = useState(checkedFromProps)

    const handleChangeValue = (ev, {value}) => {
      setChecked(value)
      onChangeFromProps(ev, {value})
    }

    return (
      <BaseComponentWithStateValue
        {...props}
        checked={checked}
        onChange={handleChangeValue}
      />
    )
  }

  BaseComponentWithCheckedValue.displayName = `withCheckboxValue(${displayName})`

  BaseComponentWithCheckedValue.propTypes = {
    /** value */
    checked: PropTypes.any,

    /** onChange callback  */
    onChange: PropTypes.func
  }

  BaseComponentWithCheckedValue.defaultProps = {
    onChange: () => {}
  }

  return BaseComponentWithCheckedValue
}

export default withCheckedValue
