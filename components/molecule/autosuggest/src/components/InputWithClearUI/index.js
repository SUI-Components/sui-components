import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {CLASS_CONTAINER, CLASS_ICON_CLEAR} from './config.js'

const InputWithClearUI = ({
  onClickClear,
  isVisibleClear,
  iconClear,
  rightIcon = <i />,
  children,
  onClick,
  selectMode,
  ...props
}) => {
  return (
    <div
      className={CLASS_CONTAINER}
      onClick={ev => {
        selectMode && onClick(ev, {isOpen: !props.isOpen})
      }}
    >
      <Injector
        {...props}
        rightIcon={
          isVisibleClear && iconClear ? (
            <span className={CLASS_ICON_CLEAR} onClick={onClickClear}>
              {iconClear}
            </span>
          ) : (
            rightIcon
          )
        }
      >
        {children}
      </Injector>
    </div>
  )
}

InputWithClearUI.propTypes = {
  rightIcon: PropTypes.element,

  children: PropTypes.element,

  iconClear: PropTypes.node,

  isVisibleClear: PropTypes.any,

  onClickClear: PropTypes.func,

  onClick: PropTypes.func,

  selectMode: PropTypes.bool,

  isOpen: PropTypes.bool
}

InputWithClearUI.displayName = 'InputWithClearUI'

export default InputWithClearUI
