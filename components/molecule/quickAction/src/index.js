import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASS = 'sui-MoleculeQuickAction'

const SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large'
}

const getClassName = variant => `${CLASS}--${variant}`

const MoleculeQuickAction = ({
  size = SIZES.MEDIUM,
  children,
  leftIcon,
  rightIcon,
  onClick = () => {},
  disabled = false
}) => {
  const sizeKey = size.toUpperCase()
  const isEnabled = disabled === false
  const classNames = cx(
    CLASS,
    size && getClassName(SIZES[sizeKey]),
    disabled && getClassName('disabled')
  )

  const handleClick = ev => isEnabled && onClick(ev)

  return (
    <div className={classNames} onClick={handleClick}>
      {leftIcon && <span className={`${CLASS}-leftIcon`}>{leftIcon}</span>}
      {leftIcon || rightIcon ? (
        <span className={`${CLASS}-text`}>{children}</span>
      ) : (
        children
      )}
      {rightIcon && <span className={`${CLASS}-rightIcon`}>{rightIcon}</span>}
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
