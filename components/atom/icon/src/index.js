import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from './Icon.js'
import LazyIcon from './LazyIcon.js'
import {
  BASE_CLASS,
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES,
  ATOM_ICON_RENDERS
} from './settings.js'

const AtomIcon = ({
  children,
  color = ATOM_ICON_COLORS.currentColor,
  size = ATOM_ICON_SIZES.small,
  render = ATOM_ICON_RENDERS.eager,
  title
}) => {
  const className = cx(
    BASE_CLASS,
    `${BASE_CLASS}--${size}`,
    color && `${BASE_CLASS}--${color}`
  )

  const IconRender = render === ATOM_ICON_RENDERS.eager ? Icon : LazyIcon
  return (
    <IconRender className={className} title={title}>
      {children}
    </IconRender>
  )
}

AtomIcon.displayName = 'AtomIcon'
AtomIcon.propTypes = {
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
  render: PropTypes.oneOf(Object.values(ATOM_ICON_RENDERS)),
  /**
   * Adds a title for accesibility purposes
   */
  title: PropTypes.string
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
