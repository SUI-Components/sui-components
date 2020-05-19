import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

import ActionButton from './ActionButton'

/**
 * Base class for the component
 */
const BASE_CLASS = 'react-AtomActionButton'

/**
 * Available colors for the Action Button
 */
const COLORS = {PRIMARY: 'primary', ACCENT: 'accent', NEUTRAL: 'neutral'}

/**
 * Available modifiers for the Action Button
 */
const MODIFIERS = {
  ACTIVE_FOCUSED: 'active',
  DISABLED: 'disabled',
  LINK: 'link'
}

/**
 * Available sizes for the Action Button
 */
const SIZES = {SMALL: 'small', MEDIUM: 'medium', LARGE: 'large'}

/**
 * Available styles for the Action Button
 */
const STYLES = {
  FILLED_NEGATIVE: 'filledNegative',
  FILLED_POSITIVE: 'filledPositive',
  OUTLINE: 'outline',
  FLAT: 'flat'
}

const createClasses = (array, sufix = '') =>
  array.reduce(
    (res, key) => ({...res, [key]: `${BASE_CLASS}--${key}${sufix}`}),
    {}
  )

const CLASSES = createClasses([
  ...Object.values(SIZES),
  ...Object.values(STYLES),
  ...Object.values(MODIFIERS)
])
const COLOR_CLASSES = createClasses([...Object.values(COLORS)], 'Color')

const AtomActionButton = ({
  children,
  className,
  color = COLORS.PRIMARY,
  disabled,
  focused,
  href,
  icon,
  isButton,
  isSubmit,
  link,
  linkFactory,
  size = SIZES.MEDIUM,
  style = STYLES.FILLED_NEGATIVE,
  target,
  title
}) => {
  const classNames = cx(
    BASE_CLASS,
    COLOR_CLASSES[color],
    CLASSES[style],
    CLASSES[size],
    focused && CLASSES[MODIFIERS.ACTIVE_FOCUSED],
    disabled && CLASSES[MODIFIERS.DISABLED],
    link && CLASSES[MODIFIERS.LINK],
    className
  )

  const buttonProps = {
    href,
    isButton,
    isSubmit,
    link,
    linkFactory,
    target,
    title
  }

  return (
    <ActionButton {...buttonProps} className={classNames}>
      <div className={`${BASE_CLASS}-icon`}>
        <AtomIcon
          size={ATOM_ICON_SIZES.medium}
          color={ATOM_ICON_COLORS.currentColor}
        >
          {icon}
        </AtomIcon>
      </div>
      <div className={`${BASE_CLASS}-text`}>{children}</div>
    </ActionButton>
  )
}

AtomActionButton.displayName = 'AtomActionButton'

AtomActionButton.propTypes = {
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
  /**
   * Classes to add to button
   */
  className: PropTypes.any,
  /**
   * Color of button:
   * 'primary' (default),
   * 'accent',
   * 'neutral'
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * Disabled: faded with no interaction.
   */
  disabled: PropTypes.bool,
  /**
   * Modifier: state of :active, :focus
   */
  focused: PropTypes.bool,
  /**
   * URL to be added on the HTML link
   */
  href: PropTypes.string,
  /**
   * Icon to be displayed (required)
   */
  icon: PropTypes.node.isRequired,
  /**
   * HTML element: if true, render a link. Otherwise render a button
   */
  link: PropTypes.bool,
  /**
   * Size of the icon
   * {SMALL: 'small',
   * MEDIUM: 'medium',
   * LARGE: 'large'}
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Style of the button: 'filledNegative' (default), 'filledPositive', 'outline', 'flat'
   */
  style: PropTypes.oneOf(STYLES),
  /**
   * Target to be added on the HTML link
   */
  target: PropTypes.string,
  /**
   * Title to be added on button or link
   */
  title: PropTypes.string,
  /**
   * Factory used to create navigation link
   */
  linkFactory: PropTypes.func,
  /**
   * if true, type="submit" (needed when several action buttons coexist under the same form)
   */
  isSubmit: PropTypes.bool,
  /**
   * if true, type="button" (needed when several action buttons coexist under the same form)
   */
  isButton: PropTypes.bool
}

export default AtomActionButton
export {COLORS as atomActionButtonColors}
export {MODIFIERS as atomActionButtonModifiers}
export {SIZES as atomActionButtonSizes}
export {STYLES as atomActionButtonStyles}
