import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import InputButton from './Wrappers/Button/InputButton'
import InputAddons from './Wrappers/Addons/InputAddons'
import InputIcons from './Wrappers/Icons/InputIcons'

import Input, {inputStates, inputSizes} from './Component'
import {SIZES} from '../config'

const BaseInput = forwardRef(
  (
    {
      button,
      leftAddon,
      rightAddon,
      leftIcon,
      rightIcon,
      children,
      onClickLeftIcon,
      onClickRightIcon,
      size = SIZES.MEDIUM,
      ...inputProps
    },
    forwardedRef
  ) => {
    return (
      <InputButton button={button}>
        <InputAddons
          leftAddon={leftAddon}
          rightAddon={rightAddon}
          shape={inputProps.shape}
          size={size}
        >
          <InputIcons
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onClickLeftIcon={onClickLeftIcon}
            onClickRightIcon={onClickRightIcon}
          >
            <Input ref={forwardedRef} {...inputProps} size={size} />
          </InputIcons>
        </InputAddons>
      </InputButton>
    )
  }
)

BaseInput.propTypes = {
  /** button html element */
  button: PropTypes.node,
  /* inner react node element */
  children: PropTypes.node,
  /* Left addon component, text,... */
  leftAddon: PropTypes.any,
  /* Right addon component, text,... */
  rightAddon: PropTypes.any,
  /* Left icon component */
  leftIcon: PropTypes.node,
  /* Left icon component */
  rightIcon: PropTypes.node,
  /* Left icon click callback */
  onClickLeftIcon: PropTypes.func,
  /* Right icon click callback */
  onClickRightIcon: PropTypes.func,
  /* 'Sets the size of the inputAddon */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default BaseInput
export {inputSizes, inputStates, BaseInput}
