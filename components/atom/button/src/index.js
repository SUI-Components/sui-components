import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASS = 'sui-AtomButton'
const TYPES = ['primary', 'accent', 'secondary', 'tertiary']
const SIZES = ['small', 'large']
const MODIFIERS = ['disabled', 'fullWidth', 'focused', 'negative']
const OWN_PROPS = [
  ...TYPES, ...SIZES, ...MODIFIERS,
  'leftIcon', 'rightIcon', 'className', 'children'
]
const CLASSES = [...TYPES, ...SIZES, ...MODIFIERS, 'empty']
  .reduce((res, key) => Object.assign(res, {[key]: `${CLASS}--${key}`}), {})

/**
 * Get props cleaning out AtomButton own props
 * @param  {Object} props
 * @return {Object}
 */
const cleanProps = (props) => {
  let newProps = {...props}
  OWN_PROPS.forEach(key => delete newProps[key])
  return newProps
}

/**
 * Get modifiers to apply according to props
 * @param  {Object} props
 * @return {Array<String>}
 */
const getModifiers = (props) => {
  return Object.keys(props)
    .filter(name => props[name] && MODIFIERS.includes(name))
}

const AtomButton = (props) => {
  const {disabled, leftIcon, rightIcon, children, className, type, size} = props
  const classNames = cx(
    CLASS,
    CLASSES[type],
    size && CLASSES[size],
    getModifiers(props).map(key => CLASSES[key]),
    !children && CLASSES.empty,
    className
  )
  const newProps = cleanProps(props)
  return (<button {...newProps} className={classNames} disabled={disabled}>
    {leftIcon && <span className={`${CLASS}-leftIcon`}>{leftIcon}</span>}
    {leftIcon || rightIcon
      ? <span className={`${CLASS}-text`}>{children}</span>
      : children
    }
    {rightIcon && <span className={`${CLASS}-rightIcon`}>{rightIcon}</span>}
  </button>)
}

AtomButton.displayName = 'AtomButton'

AtomButton.propTypes = {
  /**
   * Type of button: 'primary' (default), 'accent', 'secondary', 'tertiary'
   */
  type: PropTypes.oneOf(TYPES),
  /**
   * Size of button: 'small', 'large'
   */
  size: PropTypes.oneOf(SIZES),
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

AtomButton.defaultProps = {
  type: 'primary'
}

export default AtomButton
