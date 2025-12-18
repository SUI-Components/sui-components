import {cloneElement} from 'react'

import ButtonLink from './ButtonLink.js'

/**
 * Base class for the component
 */
export const CLASS = 'sui-AtomButton'

/**
 * Different designs for the button
 */
export const DESIGNS = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  OUTLINE_ANIMATED: 'outline-animated',
  FLAT: 'flat',
  LINK: 'link'
}

/**
 * A set of elevations that define the box shadow
 */
export const ELEVATIONS = {
  MEDIUM: 'medium',
  LARGE: 'large'
}

export const ALIGNMENT = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right'
}

/**
 * Available colors for the button
 */
export const COLORS = {
  PRIMARY: 'primary',
  ACCENT: 'accent',
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  ALERT: 'alert',
  ERROR: 'error',
  SOCIAL_FACEBOOK: 'social-facebook',
  SOCIAL_TWITTER: 'social-twitter',
  SOCIAL_GOOGLE: 'social-google',
  SOCIAL_YOUTUBE: 'social-youtube',
  SOCIAL_WHATSAPP: 'social-whatsapp',
  SOCIAL_INSTAGRAM: 'social-instagram'
}

/**
 * Positions to be used when the button is used on group
 */
export const GROUP_POSITIONS = {
  FIRST: 'first',
  MIDDLE: 'middle',
  LAST: 'last'
}

/**
 * Shapes for the button
 */
export const SHAPES = {
  SQUARED: 'squared',
  ROUNDED: 'rounded',
  CIRCULAR: 'circular'
}

/**
 * Sizes for the button
 */
export const SIZES = {SMALL: 'small', LARGE: 'large'}

/**
 * All the available modifiers for the button
 */
export const MODIFIERS = ['disabled', 'fullWidth', 'focused', 'negative', 'link']

/**
 * Icon available positions
 */
export const ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
}

/**
 * Props for the button to filter the rest of attributes
 */
export const OWN_PROPS = [
  ...Object.values(SIZES),
  'alignment',
  'children',
  'className',
  'color',
  'design',
  'isFitted',
  'focused',
  'fullWidth',
  'groupPosition',
  'isLoading',
  'leftIcon',
  'loadingText',
  'negative',
  'rightIcon',
  'shape'
]

/**
 * Display Name for the AtomIcon component
 */
export const ATOM_ICON_DISPLAY_NAME = 'AtomIcon'

/**
 * Map of sizes of the button with the AtomIcon usage
 * The key is the size of the button
 * The value is the size of the icon
 */
export const ATOM_ICON_SIZES_MAPPER = {
  default: 'small',
  small: 'small',
  large: 'medium'
}

export const createClasses = (array, sufix = '') =>
  array.reduce((res, key) => ({...res, [key]: `${CLASS}--${key}${sufix}`}), {})

export const CLASSES = createClasses([
  ...Object.values(COLORS),
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
export const cleanProps = props => {
  const newProps = {...props}
  OWN_PROPS.forEach(key => delete newProps[key])
  return newProps
}

/**
 * Get modifiers to apply according to props
 * @param  {Object} props
 * @return {Array<String>}
 */
export const getModifiers = props => {
  return Object.keys(props).filter(name => props[name] && MODIFIERS.includes(name))
}

export const getPropsWithDefaultValues = ({design, color, alignment, link, href, ...other}) => ({
  ...other,
  link,
  design: design || (link || href ? DESIGNS.LINK : DESIGNS.SOLID),
  color: color || COLORS.PRIMARY,
  alignment: alignment || ALIGNMENT.CENTER
})

/**
 * Detect if an element is an AtomIcon to force correct size
 * @param {React.ReactElement} icon
 */
export const isAtomIcon = icon => icon?.type?.displayName === ATOM_ICON_DISPLAY_NAME

/**
 * Prepare the AtomIcon element to use the correct size
 * @param {React.ReactElement} atomIconElement
 * @param {object} options
 * @param {string} options.size Size of the button to grab the correct icon size
 */
export const prepareAtomIcon = (atomIconElement, {size}) => {
  return cloneElement(atomIconElement, {
    color: undefined,
    size: atomIconElement?.props?.size || ATOM_ICON_SIZES_MAPPER[size]
  })
}

export const useElement = ({as: As, link, linkFactory: Link = ButtonLink, href, target, disabled, ...props} = {}) => {
  const isLink = !!link
  const Element = As || (isLink ? Link : 'button')

  const defaultRel = target === '_blank' ? 'noopener' : undefined
  const rel = props.rel || defaultRel
  const propsToPass = {
    ...props,
    ...(Element === 'button' && {disabled}),
    ...(isLink && {href, target, rel})
  }
  return [Element, propsToPass]
}
