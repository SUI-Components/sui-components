import PropTypes from 'prop-types'
import cx from 'classnames'

import {
  BASE_CLASS_ICON,
  BASE_CLASS_ICON_LEFT,
  BASE_CLASS_ICON_RIGHT,
  BASE_CLASS_ICON_COMPONENT,
  BASE_CLASS_ICON_COMPONENT_HANDLER,
  BASE_CLASS_ICON_COMPONENT_LEFT,
  BASE_CLASS_ICON_COMPONENT_RIGHT
} from './config'

const withIcons = WrappedInput => {
  const Icon = ({
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon,
    ...props
  }) => {
    const handleLeftClick = e => {
      onClickLeftIcon && onClickLeftIcon(e)
    }

    const handleRightClick = e => {
      onClickRightIcon && onClickRightIcon(e)
    }

    return leftIcon || rightIcon ? (
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
        <WrappedInput {...props} />
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
    ) : (
      <WrappedInput {...props} />
    )
  }

  Icon.propTypes = {
    /* Left icon component */
    leftIcon: PropTypes.node,

    /* Left icon component */
    rightIcon: PropTypes.node,

    /* Left icon click callback */
    onClickLeftIcon: PropTypes.func,

    /* Right icon click callback */
    onClickRightIcon: PropTypes.func
  }

  return Icon
}

export default withIcons
