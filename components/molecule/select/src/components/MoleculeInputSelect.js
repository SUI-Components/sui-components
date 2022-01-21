import {Children, cloneElement} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  CLASS_CONTAINER,
  CLASS_ARROW,
  CLASS_ARROW_DOWN,
  CLASS_ARROW_UP
} from './config.js'

const MoleculeInputSelect = props => {
  const {onClick, iconArrowDown: iconArrow, isOpen, disabled, children} = props

  const classNames = cx(CLASS_ARROW, {
    [CLASS_ARROW_DOWN]: !isOpen,
    [CLASS_ARROW_UP]: isOpen
  })

  const extendedChildren = () =>
    Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => cloneElement(child, props))

  return (
    <div className={CLASS_CONTAINER} onClick={!disabled ? onClick : null}>
      {extendedChildren()}
      <span className={classNames}>{iconArrow}</span>
    </div>
  )
}

MoleculeInputSelect.displayName = 'MoleculeInputSelect'
MoleculeInputSelect.propTypes = {
  /** value */
  onClick: PropTypes.func,

  /** children of the component */
  children: PropTypes.element,

  /** Icon for arrow */
  iconArrowDown: PropTypes.node,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool
}

export default MoleculeInputSelect
