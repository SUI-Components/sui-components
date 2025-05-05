import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import PrimitiveLoadingIcon from '@s-ui/react-primitive-loading-icon'

import Button from './Button.js'
import ButtonIcon from './ButtonIcon.js'
import {
  ALIGNMENT,
  CLASS,
  CLASSES,
  cleanProps,
  COLORS,
  DESIGNS,
  ELEVATIONS,
  getModifiers,
  getPropsWithDefaultValues,
  GROUP_POSITIONS,
  ICON_POSITIONS,
  SHAPES,
  SIZES
} from './config.js'

const AtomButton = forwardRef((props, forwardedRef) => {
  const {
    alignment,
    className,
    children,
    color,
    design,
    disabled,
    isLoading,
    focused,
    groupPosition,
    link,
    leftIcon,
    loadingText,
    loader = <PrimitiveLoadingIcon />,
    rightIcon,
    size,
    title,
    shape,
    elevation,
    selected,
    value
  } = getPropsWithDefaultValues(props)

  const classNames = cx(
    CLASS,
    CLASSES[color],
    CLASSES[design],
    alignment && CLASSES[alignment],
    groupPosition && `${CLASS}-group ${CLASS}-group--${groupPosition}`,
    groupPosition && focused && `${CLASS}-group--focused`,
    groupPosition && selected && `${CLASS}-group--selected`,
    size && CLASSES[size],
    getModifiers({...props, disabled: disabled || isLoading}).map(key => CLASSES[key]),
    !children && CLASSES.empty,
    {[`${CLASS}--${shape}`]: Object.values(SHAPES).includes(shape)},
    {
      [`${CLASS}--loading`]: isLoading,
      [`${CLASS}--elevation-${elevation}`]: !!elevation
    },
    className
  )

  const newProps = cleanProps(props)

  return (
    <Button
      ref={forwardedRef}
      {...newProps}
      link={link}
      className={classNames}
      title={title}
      disabled={disabled || isLoading}
      value={value}
    >
      <span className={`${CLASS}-inner`}>
        {isLoading ? (
          <>
            <ButtonIcon position={loadingText ? ICON_POSITIONS.LEFT : ICON_POSITIONS.CENTER} size={size}>
              {loader}
            </ButtonIcon>
            {children && loadingText ? loadingText : <span className={`${CLASS}-content`}>{children}</span>}
          </>
        ) : (
          <>
            <ButtonIcon position={ICON_POSITIONS.LEFT} size={size}>
              {leftIcon}
            </ButtonIcon>
            <span className={`${CLASS}-content`}>{children}</span>
            <ButtonIcon position={ICON_POSITIONS.RIGHT} size={size}>
              {rightIcon}
            </ButtonIcon>
          </>
        )}
      </span>
    </Button>
  )
})

AtomButton.displayName = 'AtomButton'

AtomButton.propTypes = {
  /**
   * Color of button:
   * 'primary' (default),
   * 'accent',
   * 'neutral',
   * 'success',
   * 'alert',
   * 'error',
   * 'social-facebook',
   * 'social-twitter',
   * 'social-google',
   * 'social-youtube',
   * 'social-whatsapp',
   * 'social-instagram'
   */
  color: PropTypes.oneOf(Object.values(COLORS)),
  /**
   * Shape of button
   */
  shape: PropTypes.oneOf(Object.values(SHAPES)),
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
   * Design style of button: 'solid' (default), 'outline', 'flat', 'link'
   */
  design: PropTypes.oneOf(Object.values(DESIGNS)),
  /**
   * Group position: 'first', 'middle' (default), 'last'
   */
  groupPosition: PropTypes.oneOf(Object.values(GROUP_POSITIONS)),
  /**
   * Size of button 'small' (default), 'large'
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Align content 'center' (default), 'left' and 'right'
   */
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)),
  /**
   * If true loading state is enabled
   */
  isLoading: PropTypes.bool,
  /**
   * If loading the element will be shown as loader
   */
  loader: PropTypes.element,
  /**
   * If loading the text will be shown next to the loader
   */
  loadingText: PropTypes.string,
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
   * Size of button shadow
   */
  elevation: PropTypes.oneOf(Object.values(ELEVATIONS)),
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
   *  Selected: style for selected button in a button group.
   */
  selected: PropTypes.bool,
  /**
   * Defines the value associated with the button's name when it's submitted with the form data.
   * This value is passed to the server in params when the form is submitted using this button.
   */
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string, PropTypes.bool])
}

export default AtomButton
export {GROUP_POSITIONS as atomButtonGroupPositions}
export {COLORS as atomButtonColors}
export {DESIGNS as atomButtonDesigns}
export {SIZES as atomButtonSizes}
export {ALIGNMENT as atomButtonAlignment}
export {SHAPES as atomButtonShapes}
export {ELEVATIONS as atomButtonElevations}
