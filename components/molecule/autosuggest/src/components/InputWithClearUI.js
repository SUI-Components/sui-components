import {Children, cloneElement} from 'react'
import PropTypes from 'prop-types'
const BASE_CLASS = `sui-MoleculeAutosuggest-input`
const CLASS_CONTAINER = `${BASE_CLASS}-container`
const CLASS_ICON_CLEAR = `${BASE_CLASS}-icon`

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
