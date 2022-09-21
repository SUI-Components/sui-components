import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {CLASS_CONTAINER, CLASS_ICON_CLEAR} from './config.js'

const InputWithClearUI = ({
  onClickClear,
  isVisibleClear,
  iconClear,
  rightIcon = <i />,
  children,
  ...props
}) => {
  return (
    <div className={CLASS_CONTAINER}>
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

  onClickClear: PropTypes.func
}

InputWithClearUI.displayName = 'InputWithClearUI'

export default InputWithClearUI
