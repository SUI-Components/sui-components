import React, {Component} from 'react'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeSelect-inputSelect`
const CLASS_CONTAINER = `${BASE_CLASS}-container`
const CLASS_ARROW = `${BASE_CLASS}-arrow`
const CLASS_ARROW_DOWN = `${CLASS_ARROW}--down`
const CLASS_ARROW_UP = `${CLASS_ARROW}--up`

export default BaseComponent => {
  const displayName = BaseComponent.displayName
  return class WithSelectUI extends Component {
    static displayName = `withSelectUI(${displayName})`

    get classNames() {
      const {isOpen} = this.props // eslint-disable-line react/prop-types
      return cx(CLASS_ARROW, {
        [CLASS_ARROW_DOWN]: !isOpen,
        [CLASS_ARROW_UP]: isOpen
      })
    }

    render() {
      /* eslint-disable react/prop-types */
      const {
        onClick,
        iconArrowDown: iconArrow,
        iconArrowUp,
        isOpen,
        disabled,
        ...props
      } = this.props
      const {classNames} = this
      return (
        <div className={CLASS_CONTAINER} onClick={!disabled ? onClick : null}>
          <BaseComponent {...props} disabled readOnly={!disabled} />
          <span className={classNames}>{iconArrow}</span>
        </div>
      )
    }
  }
}
