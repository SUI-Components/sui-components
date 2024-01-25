import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS, getClassName, SIZES} from './config.js'

const MoleculeQuickAction = ({size = SIZES.SMALL, children, leftIcon, rightIcon, onClick, disabled = false}) => {
  const sizeKey = size.toUpperCase()
  const isEnabled = disabled === false
  const classNames = cx(BASE_CLASS, size && getClassName(SIZES[sizeKey]), disabled && getClassName('disabled'))

  const handleClick = ev => isEnabled && typeof onClick === 'function' && onClick(ev)

  return (
    <div className={classNames} onClick={handleClick}>
      {leftIcon && <span className={`${BASE_CLASS}-leftIcon`}>{leftIcon}</span>}
      {leftIcon || rightIcon ? <span className={`${BASE_CLASS}-text`}>{children}</span> : children}
      {rightIcon && <span className={`${BASE_CLASS}-rightIcon`}>{rightIcon}</span>}
    </div>
  )
}

MoleculeQuickAction.displayName = 'MoleculeQuickAction'

MoleculeQuickAction.propTypes = {
  /**
   * Size of MoleculeQuickAction
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
  /**
   * Icon to be added on the left of the content
   */
  leftIcon: PropTypes.node,
  /**
   * Icon to be added on the right of the content
   */
  rightIcon: PropTypes.node,
  /**
   * Callback on click element
   */
  onClick: PropTypes.func,
  /**
   * Disable: faded with no interaction.
   */
  disabled: PropTypes.bool
}

export {SIZES as moleculeQuickActionSizes}
export default MoleculeQuickAction
