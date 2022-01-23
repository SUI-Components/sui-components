import {Children, cloneElement} from 'react'
import PropTypes from 'prop-types'

import {CLASS_CONTAINER, CLASS_ICON_CLEAR} from './config.js'

export const InputWithClearUI = props => {
  const {onClickClear, isVisibleClear, iconClear, children} = props

  const extendedChildren = () =>
    Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => cloneElement(child, props))

  return (
    <div className={CLASS_CONTAINER}>
      {extendedChildren()}
      {!!isVisibleClear && iconClear && (
        <span className={CLASS_ICON_CLEAR} onClick={onClickClear}>
          {iconClear}
        </span>
      )}
    </div>
  )
}

InputWithClearUI.propTypes = {
  children: PropTypes.element,

  iconClear: PropTypes.node,

  isVisibleClear: PropTypes.any,

  onClickClear: PropTypes.func
}

InputWithClearUI.displayName = 'InputWithClearUI'
