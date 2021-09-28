import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import InputButton from './Wrappers/Button/InputButton'
import InputAddons from './Wrappers/Addons/InputAddons'
import InputIcons from './Wrappers/Icons/InputIcons'

import Input, {inputStates, inputSizes} from './Component'

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
      ...inputProps
    },
    forwardedRef
  ) => {
    return (
      <InputButton button={button}>
        <InputAddons leftAddon={leftAddon} rightAddon={rightAddon}>
          <InputIcons
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onClickLeftIcon={onClickLeftIcon}
            onClickRightIcon={onClickRightIcon}
          >
            <Input ref={forwardedRef} {...inputProps} />
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
  onClickRightIcon: PropTypes.func
}

export default BaseInput
export {inputSizes, inputStates, BaseInput}
