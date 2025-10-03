import cx from 'classnames'
import PropTypes from 'prop-types'

import Button from '@s-ui/react-atom-button'

import {
  BASE_CLASS_ICON,
  BASE_CLASS_ICON_BUTTON,
  BASE_CLASS_ICON_BUTTON_CONTAINER,
  BASE_CLASS_ICON_COMPONENT,
  BASE_CLASS_ICON_COMPONENT_LEFT,
  BASE_CLASS_ICON_COMPONENT_RIGHT,
  BASE_CLASS_ICON_LEFT,
  BASE_CLASS_ICON_RIGHT
} from './config.js'

const InputIcons = ({
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  ariaLabelLeftIcon,
  ariaLabelRightIcon,
  leftIconButtonProps,
  rightIconButtonProps,
  children
}) => {
  if (!(leftIcon || rightIcon)) {
    return children
  }
  const handleLeftClick = event => {
    onClickLeftIcon && onClickLeftIcon(event)
  }

  const handleRightClick = event => {
    onClickRightIcon && onClickRightIcon(event)
  }

  const defaultButtonProps = {
    design: 'flat',
    color: 'neutral',
    type: 'button'
  }

  return (
    <div
      className={cx(BASE_CLASS_ICON, {
        [BASE_CLASS_ICON_LEFT]: leftIcon,
        [BASE_CLASS_ICON_RIGHT]: rightIcon
      })}
    >
      {leftIcon && (
        <>
          {onClickLeftIcon ? (
            <Button
              className={cx(
                BASE_CLASS_ICON_COMPONENT,
                BASE_CLASS_ICON_COMPONENT_LEFT,
                BASE_CLASS_ICON_BUTTON,
                leftIconButtonProps?.className
              )}
              {...defaultButtonProps}
              {...leftIconButtonProps}
              onClick={handleLeftClick}
              aria-label={ariaLabelLeftIcon}
              tabIndex={0}
            >
              <div className={BASE_CLASS_ICON_BUTTON_CONTAINER}>{leftIcon}</div>
            </Button>
          ) : (
            <span className={cx(BASE_CLASS_ICON_COMPONENT, BASE_CLASS_ICON_COMPONENT_LEFT)}>{leftIcon}</span>
          )}
        </>
      )}
      {children}
      {rightIcon && (
        <>
          {onClickRightIcon ? (
            <Button
              className={cx(
                BASE_CLASS_ICON_COMPONENT,
                BASE_CLASS_ICON_COMPONENT_RIGHT,
                BASE_CLASS_ICON_BUTTON,
                rightIconButtonProps?.className
              )}
              {...defaultButtonProps}
              {...rightIconButtonProps}
              onClick={handleRightClick}
              aria-label={ariaLabelRightIcon}
            >
              <div className={BASE_CLASS_ICON_BUTTON_CONTAINER}>{rightIcon}</div>
            </Button>
          ) : (
            <span className={cx(BASE_CLASS_ICON_COMPONENT, BASE_CLASS_ICON_COMPONENT_RIGHT)}>{rightIcon}</span>
          )}
        </>
      )}
    </div>
  )
}

InputIcons.propTypes = {
  /* inner react node element */
  children: PropTypes.node,

  /* Left icon component */
  leftIcon: PropTypes.node,

  /* Left icon component */
  rightIcon: PropTypes.node,

  /* Left icon click callback */
  onClickLeftIcon: PropTypes.func,

  /* Right icon click callback */
  onClickRightIcon: PropTypes.func,

  /* Right icon aria-label */
  ariaLabelRightIcon: PropTypes.string,

  /* Left icon aria-label */
  ariaLabelLeftIcon: PropTypes.string,

  /* Left icon button props */
  leftIconButtonProps: PropTypes.object,

  /* Right icon button props */
  rightIconButtonProps: PropTypes.object
}

export default InputIcons
