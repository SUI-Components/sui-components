import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASS = 'sui-AtomButton'
const TYPES = ['primary', 'accent', 'secondary', 'tertiary']
const MODIFIERS = ['disabled', 'small', 'large', 'fullWidth', 'focused', 'negative']
const OWN_PROPS = [
  ...TYPES, ...MODIFIERS, 'leftIcon', 'rightIcon', 'className', 'children'
]
const CLASSES = [...TYPES, ...MODIFIERS, 'empty']
  .reduce((res, key) => Object.assign(res, {[key]: `${CLASS}--${key}`}), {})

const cleanProps = (props) => {
  let newProps = {...props}
  OWN_PROPS.forEach(key => delete newProps[key])
  return newProps
}
const getType = (props) => {
  let types = Object.keys(props)
    .filter(name => TYPES.includes(name))
  return types[0] || TYPES[0]
}
const getModifiers = (props) => {
  return Object.keys(props)
    .filter(name => MODIFIERS.includes(name))
}
const propToClass = key => CLASSES[key]

const AtomButton = (props) => {
  const {disabled, leftIcon, rightIcon, children, className} = props
  const classNames = cx(
    CLASS,
    propToClass(getType(props)),
    getModifiers(props).map(propToClass),
    !children && CLASSES.empty,
    className
  )
  const newProps = cleanProps(props)
  return (<button {...newProps} className={classNames} disabled={disabled}>
    {leftIcon && <span className={`${CLASS}-leftIcon`}>{leftIcon}</span>}
    {children}
    {rightIcon && <span className={`${CLASS}-rightIcon`}>{rightIcon}</span>}
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
   * Negative: style for dark backgrounds.
   */
  negative: PropTypes.bool,
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
  children: PropTypes.node,
  /**
   * Classes to add to button
   */
  className: PropTypes.any
}

export default AtomButton
