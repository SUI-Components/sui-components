import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS_AREA_FOCUSABLE,
  BASE_CLASS_ITEM,
  SIZES,
  TYPES
} from '../config.js'
import Mask from '../Mask/index.js'
import Password from '../Password/index.js'
import Input from './Component/index.js'
import InputAddons from './Wrappers/Addons/InputAddons.js'
import InputButton from './Wrappers/Button/InputButton.js'
import InputIcons from './Wrappers/Icons/InputIcons.js'

const componentType = {
  undefined: props => [Input, props],
  [TYPES.SUI_PASSWORD]: ({type, ...props}) => [Password, {...props}],
  [TYPES.MASK]: ({type, ...props}) => [Mask, {...props}]
}

const BaseInput = forwardRef(
  (
    {
      type,
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
    const [Component, passedProps] = componentType[type]
      ? componentType[type]({type, size, ...inputProps})
      : componentType[undefined]({type, size, ...inputProps})

    return (
      <InputButton button={button}>
        <InputAddons
          leftAddon={leftAddon}
          rightAddon={rightAddon}
          shape={inputProps.shape}
          size={size}
        >
          <span className={cx(BASE_CLASS_ITEM, BASE_CLASS_AREA_FOCUSABLE)}>
            <InputIcons
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onClickLeftIcon={onClickLeftIcon}
              onClickRightIcon={onClickRightIcon}
            >
              <Component ref={forwardedRef} {...passedProps} size={size}>
                {children}
              </Component>
            </InputIcons>
          </span>
        </InputAddons>
      </InputButton>
    )
  }
)

BaseInput.propTypes = {
  /* text, password, date or number */
  type: PropTypes.string,
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
export {BaseInput}
