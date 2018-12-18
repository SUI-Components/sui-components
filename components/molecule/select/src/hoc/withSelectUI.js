import React, {Component} from 'react'

const BASE_CLASS = `sui-MoleculeSelect-inputSelect`
const CLASS_CONTAINER = `${BASE_CLASS}-container`
const CLASS_ARROW = `${BASE_CLASS}-arrow`

export default BaseComponent => {
  const displayName = BaseComponent.displayName
  return class WithSelectUi extends Component {
    static displayName = `WithSelectUi(${displayName})`

    render() {
      /* eslint-disable react/prop-types */
      const {
        onClick,
        iconArrowDown: IconArrowDown,
        iconArrowUp: IconArrowUp,
        isOpen,
        ...props
      } = this.props

      return (
        <div className={CLASS_CONTAINER} onClick={onClick}>
          <BaseComponent {...props} readOnly />
          <span className={CLASS_ARROW}>
            {isOpen
              ? IconArrowUp && <IconArrowUp />
              : IconArrowDown && <IconArrowDown />}
          </span>
        </div>
      )
    }
  }
}
