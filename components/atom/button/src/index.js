import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from './Button'
import ButtonIcon from './ButtonIcon'
import ButtonSpinnerIcon from './buttonSpinnerIcon'
import {
  CLASS,
  COLORS,
  DESIGNS,
  ALIGNMENT,
  ICON_POSITIONS,
  GROUP_POSITIONS,
  MODIFIERS,
  OWN_PROPS,
  SIZES,
  TYPES,
  SHAPES,
  TYPES_CONVERSION
} from './config'

const createClasses = (array, sufix = '') =>
  array.reduce((res, key) => ({...res, [key]: `${CLASS}--${key}${sufix}`}), {})

const CLASSES = createClasses([
  ...COLORS,
  ...Object.values(DESIGNS),
  ...Object.values(ALIGNMENT),
  ...MODIFIERS,
  ...Object.values(SIZES),
  'empty'
])

/**
 * Get props cleaning out AtomButton own props
 * @param  {Object} props
 * @return {Object}
 */
const cleanProps = props => {
  const newProps = {...props}
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

function deprecated(
  validator,
  callback = (props, propName, componentName) => {
    const deprecatedMessage = `The prop ${'\x1b[32m'}${propName}${'\u001b[39m'} is DEPRECATED on ${'\x1b[32m'}${componentName}${'\u001b[39m'}.`
    console.warn(deprecatedMessage)
  }
) {
  return function deprecated(props, propName, componentName, ...rest) {
    if (props[propName] != null && process.env.NODE_ENV === 'development') {
      callback(props, propName, componentName, ...rest)
    }
    return validator(props, propName, componentName, ...rest)
  }
}

const typeConversion = ({type, design, color, link, href, ...other}) => {
  const result = {
    design,
    color,
    link,
    href,
    ...other
  }
  switch (type) {
    case 'primary':
      result.color = color || 'primary'
      result.design = design || (link || href ? DESIGNS.LINK : DESIGNS.SOLID)
      break
    case 'accent':
      result.color = color || 'accent'
      result.design = design || (link || href ? DESIGNS.LINK : DESIGNS.SOLID)
      break
    case 'secondary':
      result.color = color || 'primary'
      result.design = design || (link || href ? DESIGNS.LINK : DESIGNS.OUTLINE)
      break
    case 'tertiary':
      result.color = color || 'primary'
      result.design = design || (link || href ? DESIGNS.LINK : DESIGNS.FLAT)
      break
    default:
      result.type = type
      result.color = color || 'primary'
      result.design = design || (link || href ? DESIGNS.LINK : DESIGNS.SOLID)
      break
  }
  return result
}

const getPropsWithDefaultValues = ({
  type,
  design,
  color,
  alignment,
  link,
  href,
  ...other
}) => ({
  ...other,
  link,
  type,
  design: design || (link || href ? DESIGNS.LINK : DESIGNS.SOLID),
  color: color || 'colors',
  alignment: alignment || ALIGNMENT.CENTER
})

const AtomButton = forwardRef((props, ref) => {
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
    loader = <ButtonSpinnerIcon />,
    rightIcon,
    size,
    title,
    type,
    shape
  } = getPropsWithDefaultValues(typeConversion(props))

  const classNames = cx(
    CLASS,
    CLASSES[color],
    CLASSES[design],
    alignment && CLASSES[alignment],
    groupPosition && `${CLASS}-group ${CLASS}-group--${groupPosition}`,
    groupPosition && focused && `${CLASS}-group--focused`,
    size && CLASSES[size],
    getModifiers({...props, disabled: disabled || isLoading}).map(
      key => CLASSES[key]
    ),
    !children && CLASSES.empty,
    {[`${CLASS}--${shape}`]: Object.values(SHAPES).includes(shape)},
    {
      [`${CLASS}--loading`]: isLoading
    },
    className
  )

  const newProps = cleanProps(props)

  return (
    <Button
      {...newProps}
      type={type}
      link={link}
      className={classNames}
      title={title}
      disabled={disabled || isLoading}
      forwardingRef={ref}
    >
      <span className={`${CLASS}-inner`}>
        {isLoading ? (
          <>
            <ButtonIcon
              position={
                loadingText ? ICON_POSITIONS.LEFT : ICON_POSITIONS.CENTER
              }
              size={size}
            >
              {loader}
            </ButtonIcon>
            {children && loadingText ? (
              loadingText
            ) : (
              <span className={`${CLASS}-text`}>{children}</span>
            )}
          </>
        ) : (
          <>
            <ButtonIcon position={ICON_POSITIONS.LEFT} size={size}>
              {leftIcon}
            </ButtonIcon>
            {leftIcon || rightIcon ? (
              <span className={`${CLASS}-text`}>{children}</span>
            ) : (
              children
            )}
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
  color: PropTypes.oneOf(COLORS),
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
   * DEPRECATED. Type of button: 'primary' (default), 'accent', 'secondary', 'tertiary'
   */
  type: PropTypes.oneOfType([
    PropTypes.oneOf(['button', 'submit', 'reset']),
    deprecated(PropTypes.oneOf(TYPES), (props, propName, componentName) => {
      const deprecatedMessage = `The prop ${'\x1b[32m'}${propName}${'\u001b[39m'} is DEPRECATED on ${'\x1b[32m'}${componentName}${'\u001b[39m'}. You should use now ${'\x1b[32m'}design${'\u001b[39m'} and ${'\x1b[32m'}color${'\u001b[39m'} props.`
      console.groupCollapsed(deprecatedMessage)
      console.warn(deprecatedMessage)
      console.table(TYPES_CONVERSION)
      console.groupEnd()
    })
  ]),
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
   * If true loading state will be enabled
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

export default AtomButton
export {GROUP_POSITIONS as atomButtonGroupPositions}
export {COLORS as atomButtonColors}
export {DESIGNS as atomButtonDesigns}
export {SIZES as atomButtonSizes}
export {TYPES as atomButtonTypes}
export {ALIGNMENT as atomButtonAlignment}
export {SHAPES as atomButtonShapes}
