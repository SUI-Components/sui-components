import ActionButtonWrapper from './ActionButtonWrapper'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  COLORS,
  MODIFIERS,
  SIZES,
  STYLES,
  CLASSES,
  COLOR_CLASSES
} from './config'

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
  title,
  ...restProps
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
    title,
    ...restProps
  }

  return (
    <ActionButtonWrapper {...buttonProps} className={classNames}>
      <div className={`${BASE_CLASS}-icon`}>
        <AtomIcon
          size={ATOM_ICON_SIZES.medium}
          color={ATOM_ICON_COLORS.currentColor}
        >
          {icon}
        </AtomIcon>
      </div>
      <div className={`${BASE_CLASS}-text`}>{children}</div>
    </ActionButtonWrapper>
  )
}

AtomActionButton.displayName = 'AtomActionButton'

AtomActionButton.propTypes = {
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
  /**
   * Classes to add to button (DEPRECATED)
   */
  className: PropTypes.any,
  /**
   * Color of button:
   * 'primary' (default),
   * 'accent',
   * 'neutral'
   */
  color: PropTypes.oneOf(Object.values(COLORS)),
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
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Style of the button: 'filledNegative' (default), 'filledPositive', 'outline', 'flat'
   */
  style: PropTypes.oneOf(Object.values(STYLES)),
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
