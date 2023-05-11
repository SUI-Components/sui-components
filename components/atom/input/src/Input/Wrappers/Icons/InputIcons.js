import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS_ICON,
  BASE_CLASS_ICON_COMPONENT,
  BASE_CLASS_ICON_COMPONENT_HANDLER,
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

  return (
    <div
      className={cx(BASE_CLASS_ICON, {
        [BASE_CLASS_ICON_LEFT]: leftIcon,
        [BASE_CLASS_ICON_RIGHT]: rightIcon
      })}
    >
      {leftIcon && (
        <span
          className={cx(
            BASE_CLASS_ICON_COMPONENT,
            BASE_CLASS_ICON_COMPONENT_LEFT,
            {
              [BASE_CLASS_ICON_COMPONENT_HANDLER]: onClickLeftIcon
            }
          )}
          onClick={handleLeftClick}
        >
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          className={cx(
            BASE_CLASS_ICON_COMPONENT,
            BASE_CLASS_ICON_COMPONENT_RIGHT,
            {
              [BASE_CLASS_ICON_COMPONENT_HANDLER]: onClickRightIcon
            }
          )}
          onClick={handleRightClick}
        >
          {rightIcon}
        </span>
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
  onClickRightIcon: PropTypes.func
}

export default InputIcons
