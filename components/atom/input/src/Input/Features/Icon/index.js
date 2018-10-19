import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const BASE_CLASS = 'sui-AtomInput'
const CLASS_ICON = `${BASE_CLASS}--withIcon`
const CLASS_ICON_LEFT = `${CLASS_ICON}--${TYPES.LEFT}`
const CLASS_ICON_RIGHT = `${CLASS_ICON}--${TYPES.RIGHT}`
const CLASS_ICON_COMPONENT = `${CLASS_ICON}-icon`
const CLASS_ICON_COMPONENT_LEFT = `${CLASS_ICON_COMPONENT}--${TYPES.LEFT}`
const CLASS_ICON_COMPONENT_RIGHT = `${CLASS_ICON_COMPONENT}--${TYPES.RIGHT}`

const IconHoC = WrappedInput =>
  class Icon extends React.Component {
    static propTypes = {
      /* Left icon component */
      leftIcon: PropTypes.any,

      /* Left icon component */
      rightIcon: PropTypes.any,

      /* Left icon click callback */
      onClickLeftIcon: PropTypes.func,

      /* Right icon click callback */
      onClickRightIcon: PropTypes.func
    }

    handleLeftClick = e => {
      const {onClickLeftIcon} = this.props
      onClickLeftIcon && onClickLeftIcon(e)
    }

    handleRightClick = e => {
      const {onClickRightIcon} = this.props
      onClickRightIcon && onClickRightIcon(e)
    }

    render() {
      const {leftIcon: LeftIcon, rightIcon: RightIcon, ...props} = this.props
      return LeftIcon || RightIcon ? (
        <div
          className={cx(
            CLASS_ICON,
            LeftIcon && CLASS_ICON_LEFT,
            RightIcon && CLASS_ICON_RIGHT
          )}
        >
          {LeftIcon && (
            <span
              className={cx(CLASS_ICON_COMPONENT, CLASS_ICON_COMPONENT_LEFT)}
              onClick={this.handleLeftClick}
            >
              <LeftIcon />
            </span>
          )}
          <WrappedInput {...props} />
          {RightIcon && (
            <span
              className={cx(CLASS_ICON_COMPONENT, CLASS_ICON_COMPONENT_RIGHT)}
              onClick={this.handleRightClick}
            >
              <RightIcon />
            </span>
          )}
        </div>
      ) : (
        <WrappedInput {...props} />
      )
    }
  }

export default IconHoC
