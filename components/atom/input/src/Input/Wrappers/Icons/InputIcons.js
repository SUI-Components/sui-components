import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS_ICON_COMPONENT,
  BASE_CLASS_ICON_COMPONENT_HANDLER,
  BASE_CLASS_ICON_COMPONENT_LEFT,
  BASE_CLASS_ICON_COMPONENT_RIGHT,
  BASE_CLASS_ICON_CONTENT_COMPONENT
} from './config.js'

const InputIcons = ({
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  children
}) => {
  const handleLeftClick = event => {
    onClickLeftIcon && onClickLeftIcon(event)
  }

  const handleRightClick = event => {
    onClickRightIcon && onClickRightIcon(event)
  }

  return (
    <>
      {leftIcon && (
        <span
          className={cx(
            BASE_CLASS_ICON_COMPONENT,
            BASE_CLASS_ICON_COMPONENT_LEFT
          )}
          onClick={handleLeftClick}
        >
          <span
            className={cx(BASE_CLASS_ICON_CONTENT_COMPONENT, {
              [BASE_CLASS_ICON_COMPONENT_HANDLER]: onClickLeftIcon
            })}
          >
            {leftIcon}
          </span>
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          className={cx(
            BASE_CLASS_ICON_COMPONENT,
            BASE_CLASS_ICON_COMPONENT_RIGHT
          )}
          onClick={handleRightClick}
        >
          <span
            className={cx(BASE_CLASS_ICON_CONTENT_COMPONENT, {
              [BASE_CLASS_ICON_COMPONENT_HANDLER]: onClickRightIcon
            })}
          >
            {rightIcon}
          </span>
        </span>
      )}
    </>
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
