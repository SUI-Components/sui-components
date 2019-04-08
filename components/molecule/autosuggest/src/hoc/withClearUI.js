import React, {Component} from 'react'

const BASE_CLASS = `sui-MoleculeAutosuggest-input`
const CLASS_CONTAINER = `${BASE_CLASS}-container`
const CLASS_ICON_CLEAR = `${BASE_CLASS}-icon`

export default BaseComponent => {
  const displayName = BaseComponent.displayName
  return class WithClearUI extends Component {
    static displayName = `WithClearUI(${displayName})`

    render() {
      /* eslint-disable react/prop-types */
      const {onClickClear, isVisibleClear, iconClear, ...props} = this.props
      return (
        <div className={CLASS_CONTAINER}>
          <BaseComponent {...props} />
          {!!isVisibleClear && (
            <span className={CLASS_ICON_CLEAR} onClick={onClickClear}>
              {iconClear}
            </span>
          )}
        </div>
      )
    }
  }
}
