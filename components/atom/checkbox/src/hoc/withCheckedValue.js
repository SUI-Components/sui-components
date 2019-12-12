import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const withCheckedValue = BaseComponent => {
  const displayName = BaseComponent.displayName

  const BaseComponentWithCheckedValue = ({
    checked: checkedFromProps = false,
    controlledChecked,
    onChange: onChangeFromProps,
    ...props
  }) => {
    const [checked, setChecked] = useState(
      typeof controlledChecked !== 'undefined'
        ? controlledChecked
        : checkedFromProps
    )

    useEffect(() => {
      if (typeof controlledChecked !== 'undefined') {
        setChecked(controlledChecked)
      }
    }, [controlledChecked])

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
    checked: PropTypes.bool,
    controlledChecked: PropTypes.bool,
    onChange: PropTypes.func
  }

  BaseComponentWithCheckedValue.defaultProps = {
    onChange: () => {}
  }

  return BaseComponentWithCheckedValue
}

export default withCheckedValue
