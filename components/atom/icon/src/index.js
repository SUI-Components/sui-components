import cx from 'classnames'
import PropTypes from 'prop-types'

import Icon from './Icon.js'
import LazyIcon from './LazyIcon.js'
import {
  ATOM_ICON_COLORS,
  ATOM_ICON_RENDERS,
  ATOM_ICON_SIZES,
  BASE_CLASS
} from './settings.js'

const AtomIcon = ({
  as = 'span',
  className,
  children,
  color = ATOM_ICON_COLORS.currentColor,
  size = ATOM_ICON_SIZES.small,
  render = ATOM_ICON_RENDERS.eager,
  ...props
}) => {
  const styles = cx(
    BASE_CLASS,
    `${BASE_CLASS}--${size}`,
    color && `${BASE_CLASS}--${color}`,
    className
  )

  const IconRender = render === ATOM_ICON_RENDERS.eager ? Icon : LazyIcon

  return (
    <IconRender as={as} className={styles} {...props}>
      {children}
    </IconRender>
  )
}

AtomIcon.displayName = 'AtomIcon'
AtomIcon.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,
  /**
   * Optional custom class.
   */
  className: PropTypes.string,
  /**
   * Determine color of the icon
   * Besides the primary color types, you could use currentColor to inherit the color from the parent.
   * (default: ATOM_ICON_COLORS.currentColor)
   */
  color: PropTypes.oneOf(Object.values(ATOM_ICON_COLORS)),
  /**
   * The children must be a SVG that follows the definition stated on the UXDEF.md.
   */
  children: PropTypes.element,
  /**
   * Determine the size of the icon. (default: ATOM_ICON_SIZES.medium)
   */
  size: PropTypes.oneOf(Object.values(ATOM_ICON_SIZES)),
  /**
   * Determine the render type of the icon.
   * 'eager': The icon will be server-side rendered (default)
   * 'lazy': The icon will be loaded on client when visible
   */
  render: PropTypes.oneOf(Object.values(ATOM_ICON_RENDERS))
}

export default AtomIcon

export {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES,
  ATOM_ICON_RENDERS,
  ATOM_ICON_COLORS as atomIconColors,
  ATOM_ICON_SIZES as atomIconSizes,
  ATOM_ICON_RENDERS as atomIconRenders
}
