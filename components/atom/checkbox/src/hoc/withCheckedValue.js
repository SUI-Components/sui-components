import React, {useState} from 'react'
import PropTypes from 'prop-types'

const withCheckedValue = BaseComponent => {
  const displayName = BaseComponent.displayName

  const BaseComponentWithCheckedValue = ({
    checked: checkedFromProps = false,
    onChange: onChangeFromProps,
    ...props
  }) => {
    const [checked, setChecked] = useState(checkedFromProps)

    const handleChangeValue = (ev, {name, value}) => {
      setChecked(value)
      onChangeFromProps(ev, {name, value})
    }

    return (
      <BaseComponent
        {...props}
        checked={checked}
        onChange={handleChangeValue}
      />
    )
  }

  BaseComponentWithCheckedValue.displayName = `withCheckboxValue(${displayName})`

  BaseComponentWithCheckedValue.propTypes = {
    checked: PropTypes.any,

    onChange: PropTypes.func
  }

  BaseComponentWithCheckedValue.defaultProps = {
    onChange: () => {}
  }

  return BaseComponentWithCheckedValue
}

export default withCheckedValue
