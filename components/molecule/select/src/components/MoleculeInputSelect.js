import cx from 'classnames'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {CLASS_ARROW, CLASS_ARROW_DOWN, CLASS_ARROW_UP, CLASS_CONTAINER} from './config.js'

const MoleculeInputSelect = props => {
  const {onClick, iconArrowDown: iconArrow, isOpen, disabled, readOnly, children, ...rest} = props

  const classNames = cx(CLASS_ARROW, {
    [CLASS_ARROW_DOWN]: !isOpen,
    [CLASS_ARROW_UP]: isOpen
  })

  const onClickInputHandler = ev => {
    if (readOnly) return
    onClick(ev)
  }

  return (
    <div className={CLASS_CONTAINER} onClick={!disabled && !readOnly ? onClick : null}>
      <Injector onClick={onClickInputHandler} disabled={disabled} readOnly={readOnly} {...rest}>
        {children}
      </Injector>
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
  disabled: PropTypes.bool,

  /** This Boolean attribute prevents the user from interacting with the input */
  readOnly: PropTypes.bool
}

export default MoleculeInputSelect
