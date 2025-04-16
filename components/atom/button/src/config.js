import {cloneElement} from 'react'

/**
 * Base class for the component
 */
export const CLASS = 'sui-AtomButton'

/**
 * {Deprecated} Types of buttons
 */
export const TYPES = ['primary', 'accent', 'secondary', 'tertiary']

/**
 * Different designs for the button
 */
export const DESIGNS = {
  SOLID: 'solid',
  OUTLINE: 'outline',
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
  ...TYPES,
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
  'shape',
  'type'
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

export const TYPES_CONVERSION = {
  primary: {design: DESIGNS.SOLID, color: 'primary'},
  accent: {design: DESIGNS.SOLID, color: 'accent'},
  secondary: {design: DESIGNS.OUTLINE, color: 'primary'},
  tertiary: {design: DESIGNS.FLAT, color: 'primary'}
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

export function deprecated(
  validator,
  callback = (props, propName, componentName) => {
    const deprecatedMessage = `The prop ${'\x1b[32m'}${propName}${'\u001b[39m'} is DEPRECATED on ${'\x1b[32m'}${componentName}${'\u001b[39m'}.`
    console.warn(deprecatedMessage) // eslint-disable-line
  }
) {
  return function deprecated(props, propName, componentName, ...rest) {
    if (props[propName] != null && process.env.NODE_ENV === 'development') {
      callback(props, propName, componentName, ...rest)
    }
    return validator(props, propName, componentName, ...rest)
  }
}

export const typeConversion = ({type, design, color, link, href, ...other}) => {
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
      break
  }
  return result
}

export const getPropsWithDefaultValues = ({type, design, color, alignment, link, href, ...other}) => ({
  ...other,
  link,
  type,
  design: design || (link || href ? DESIGNS.LINK : DESIGNS.SOLID),
  color: color || 'colors',
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
