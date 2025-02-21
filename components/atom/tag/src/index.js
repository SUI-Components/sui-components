import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import ActionableTag from './Actionable/index.js'
import {
  COLORS,
  DESIGNS,
  getActionableProps,
  getColor,
  getDesign,
  getStandardProps,
  ICON_PLACEMENTS,
  LINK_TYPES,
  SIZES
} from './constants.js'
import StandardTag from './Standard.js'

const AtomTag = forwardRef(
  (
    {
      design: designProp,
      color: colorProp,
      href,
      icon,
      iconPlacement = ICON_PLACEMENTS.LEFT,
      onClick,
      responsive,
      size = SIZES.MEDIUM,
      type,
      readOnly,
      disabled,
      as,
      pressed,
      defaultPressed,
      className,
      closeLabel,
      ...props
    },
    forwardedRef
  ) => {
    const isActionable = onClick || href || [true, false].includes(pressed) || [true, false].includes(defaultPressed)

    const color = getColor({isActionable, color: colorProp})
    const design = getDesign({isActionable, design: designProp})

    const classNames = cx(
      'sui-AtomTag',
      `sui-AtomTag--size-${size}`,
      design && `sui-AtomTag--design-${design}`,
      type === undefined && color && `sui-AtomTag--color-${color}`,
      icon && 'sui-AtomTag-hasIcon',
      responsive && 'sui-AtomTag--responsive',
      type && `sui-AtomTag--type-${type}`,
      className
    )

    const [Component, getComponentProps] = isActionable
      ? [ActionableTag, getActionableProps]
      : [StandardTag, getStandardProps]

    return (
      <Component
        {...getComponentProps({
          design,
          href,
          icon,
          iconPlacement,
          onClick,
          responsive,
          size,
          type,
          readOnly,
          disabled,
          pressed,
          defaultPressed,
          closeLabel,
          ...props
        })}
        ref={forwardedRef}
        disabled={disabled}
        readOnly={readOnly}
        className={classNames}
        as={as}
      />
    )
  }
)

AtomTag.displayName = 'AtomTag'

AtomTag.propTypes = {
  /* This Boolean attribute prevents the user from interacting with the input but without disabled styles */
  readOnly: PropTypes.bool,
  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  onClose: PropTypes.func,
  /**
   * Will only be shown if the onClose fn is defined
   */
  closeIcon: PropTypes.node,

  /** label for clear/close icon **/
  closeLabel: PropTypes.string,
  /**
   * If defined, onClose will be ignored
   */
  onClick: PropTypes.func,
  /**
   * generates type of link
   */
  linkFactory: PropTypes.func,
  /**
   * Actionable tags can be used as an anchor. Same as <a> href
   */
  href: PropTypes.string,
  /**
   * To be used if href is defined
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /**
   * To be used if href is defined
   */
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  /**
   * Actionable tags can have iconPlacement='right'
   */
  iconPlacement: PropTypes.oneOf(Object.values(ICON_PLACEMENTS)),
  /**
   * Tag size
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Tag title
   */
  title: PropTypes.string,
  /**
   * Tag type in order to color it as desired
   * from a high order component.
   */
  type: PropTypes.string,
  /**
   * true for make responsive layout. keep large size in mobile
   */
  responsive: PropTypes.bool,
  /**
   * Design style of button: 'solid' (default), 'outline', 'flat', 'link'
   */
  design: PropTypes.oneOf(Object.values(DESIGNS)),
  /**
   * Value of the tag to be returned on actionable tags
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The elementType of the Tag
   * **/
  as: PropTypes.elementType,
  /**
   * Color intent of the tag
   * **/
  color: PropTypes.oneOf(Object.values(COLORS)),
  pressed: PropTypes.bool,
  defaultPressed: PropTypes.bool,
  className: PropTypes.string
}

export default AtomTag

export {ICON_PLACEMENTS as atomTagIconPlacements}
export {DESIGNS as atomTagDesigns}
export {LINK_TYPES as linkTypes}
export {LINK_TYPES as atomTagLinkTypes}
export {SIZES as atomTagSizes}
export {COLORS as atomTagColors}
