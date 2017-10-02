import React, {PropTypes} from 'react'
import cx from 'classnames'

const CLASS = 'sui-AtomButton'
const TYPES = ['primary', 'accent', 'secondary', 'tertiary']
const MODIFIERS = ['disabled', 'small', 'large', 'fullWidth', 'focused']

const appendClass = (suffix) => `${CLASS}--${suffix}`
const includes = (array, item) => array.indexOf(item) !== -1
const getTypes = (props) => {
  let types = Object.keys(props)
    .filter(name => includes(TYPES, name))
  return types.length ? types : ['primary']
}
const getModifiers = (props) => {
  return Object.keys(props)
    .filter(name => includes(MODIFIERS, name))
}

const AtomButton = (props) => {
  const {disabled, leftIcon, rightIcon, children, className} = props
  const classNames = cx(
    CLASS,
    getTypes(props).map(appendClass),
    getModifiers(props).map(appendClass),
    className
  )

  return (<button className={classNames} disabled={disabled}>
    {leftIcon && <span className={`${CLASS}LeftIcon`}>{leftIcon}</span>}
    {children}
    {rightIcon && <span className={`${CLASS}RightIcon`}>{rightIcon}</span>}
  </button>)
}

AtomButton.displayName = 'AtomButton'
AtomButton.propTypes = {
  /**
   * Type: filled with primary color (default)
   */
  primary: PropTypes.bool,
  /**
   * Type: filled with accent color
   */
  accent: PropTypes.bool,
  /**
   * Type: ghost button, no background
   */
  secondary: PropTypes.bool,
  /**
   * Type: link button, no background nor border
   */
  tertiary: PropTypes.bool,
  /**
   * Modifier: state of :hover,:active, :focus
   */
  focused: PropTypes.bool,
  /**
   * Disable: faded with no interaction.
   */
  disabled: PropTypes.bool,
  /**
   * Modifier: smaller size
   */
  small: PropTypes.bool,
  /**
   * Modifier: large size
   */
  large: PropTypes.bool,
  /**
   * Modifier: full width (100%)
   */
  fullWidth: PropTypes.bool,
  /**
   * Icon to be added on the left of the content
   */
  leftIcon: PropTypes.node,
  /**
   * Icon to be added on the right of the content
   */
  rightIcon: PropTypes.node,
  /**
   * Content to be included in the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Classes to add to button
   */
  className: PropTypes.any
}

export default AtomButton
