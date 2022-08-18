import {Children, cloneElement} from 'react'

import PropTypes from 'prop-types'

import {CLASS_CONTAINER} from './config.js'

export const InputWithClearUI = props => {
  const {onClickClear, isVisibleClear, iconClear, rightIcon, children} = props

  const extendedChildren = () =>
    Children.toArray(children)
      .filter(Boolean)
      .map((child, index) =>
        cloneElement(child, {
          ...props,
          rightIcon:
            isVisibleClear && iconClear ? (
              <span onClick={onClickClear}>{iconClear}</span>
            ) : (
              rightIcon
            )
        })
      )

  return <div className={CLASS_CONTAINER}>{extendedChildren()}</div>
}

InputWithClearUI.propTypes = {
  rightIcon: PropTypes.element,

  children: PropTypes.element,

  iconClear: PropTypes.node,

  isVisibleClear: PropTypes.any,

  onClickClear: PropTypes.func
}

InputWithClearUI.displayName = 'InputWithClearUI'
