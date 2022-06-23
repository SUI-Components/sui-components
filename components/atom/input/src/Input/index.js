import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {SIZES} from '../config.js'
import Input, {inputSizes, inputStates} from './Component/index.js'
import InputAddons from './Wrappers/Addons/InputAddons.js'
import InputButton from './Wrappers/Button/InputButton.js'
import InputIcons from './Wrappers/Icons/InputIcons.js'

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
            <Input ref={forwardedRef} {...inputProps} size={size}>
              {children}
            </Input>
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
