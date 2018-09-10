import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from './Button'

const CLASS = 'sui-AtomButton'
const TYPES = ['primary', 'accent', 'secondary', 'tertiary']
const GROUP_POSITIONS = {
  FIRST: 'first',
  MIDDLE: 'middle',
  LAST: 'last'
}
const SIZES = ['small', 'large']
const MODIFIERS = ['disabled', 'fullWidth', 'focused', 'negative', 'link']
const OWN_PROPS = [
  ...TYPES,
  ...SIZES,
  'groupPosition',
  'leftIcon',
  'rightIcon',
  'className',
  'children',
  'fullWidth',
  'focused',
  'negative',
  'type'
]
const CLASSES = [...TYPES, ...SIZES, ...MODIFIERS, 'empty'].reduce(
  (res, key) => Object.assign(res, {[key]: `${CLASS}--${key}`}),
  {}
)

/**
 * Get props cleaning out AtomButton own props
 * @param  {Object} props
 * @return {Object}
 */
const cleanProps = props => {
  let newProps = {...props}
  OWN_PROPS.forEach(key => delete newProps[key])
  return newProps
}

/**
 * Get modifiers to apply according to props
 * @param  {Object} props
 * @return {Array<String>}
 */
const getModifiers = props => {
  return Object.keys(props).filter(
    name => props[name] && MODIFIERS.includes(name)
  )
}

const AtomButton = props => {
  const {
    children,
    className,
    groupPosition,
    leftIcon,
    rightIcon,
    size,
    title,
    type
  } = props

  const classNames = cx(
    CLASS,
    CLASSES[type],
    groupPosition && `${CLASS}-group ${CLASS}-group--${groupPosition}`,
    size && CLASSES[size],
    getModifiers(props).map(key => CLASSES[key]),
    !children && CLASSES.empty,
    className
  )
  const newProps = cleanProps(props)

  return (
    <Button {...newProps} className={classNames} title={title}>
      <span className={`${CLASS}-inner`}>
        {leftIcon && <span className={`${CLASS}-leftIcon`}>{leftIcon}</span>}
        {leftIcon || rightIcon ? (
          <span className={`${CLASS}-text`}>{children}</span>
        ) : (
          children
        )}
        {rightIcon && <span className={`${CLASS}-rightIcon`}>{rightIcon}</span>}
      </span>
    </Button>
  )
}

AtomButton.displayName = 'AtomButton'

AtomButton.propTypes = {
  /**
   * HTML element: if true, render a link. Otherwise render a button
   */
  link: PropTypes.bool,
  /**
   * URL to be added on the HTML link
   */
  href: PropTypes.string,
  /**
   * Target to be added on the HTML link
   */
  target: PropTypes.string,
  /**
   * Title to be added on button or link
   */
  title: PropTypes.string,
  /**
   * Type of button: 'primary' (default), 'accent', 'secondary', 'tertiary'
   */
  type: PropTypes.oneOf(TYPES),
  /**
   * Group position: 'first', 'middle' (default), 'last'
   */
  groupPosition: PropTypes.oneOf(Object.values(GROUP_POSITIONS)),
  /**
   * Size of button{
   * FIRST: 'first',
   * MIDDLE: 'middle',
   * LAST: 'last'}: 'small',
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
  className: PropTypes.any,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func,
  /**
   * if true, type="submit" (needed when several buttons coexist under the same form)
   */
  isSubmit: PropTypes.bool,
  /**
   * if true, type="button" (needed when several buttons coexist under the same form)
   */
  isButton: PropTypes.bool
}

AtomButton.defaultProps = {
  type: 'primary'
}

export default AtomButton
export {GROUP_POSITIONS as atomButtonGroupPositions}
