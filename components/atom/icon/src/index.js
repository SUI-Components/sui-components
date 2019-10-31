import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomIcon'
export const ATOM_ICON_COLORS = {
  accent: 'accent',
  alert: 'alert',
  currentColor: 'currentColor',
  error: 'error',
  primary: 'primary',
  success: 'success'
}
export const ATOM_ICON_SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extraLarge'
}

export default function AtomIcon({
  children,
  color = ATOM_ICON_COLORS.currentColor,
  size = ATOM_ICON_SIZES.small,
  ssr = true
}) {
  const [render, setRender] = useState(ssr)
  useEffect(() => {
    if (ssr === false) setRender(true)
  }, [ssr])

  if (!render) return null

  const className = cx(
    BASE_CLASS,
    `${BASE_CLASS}--${size}`,
    color && `${BASE_CLASS}--${color}`
  )

  return (
    <span role="img" className={className}>
      {children}
    </span>
  )
}

AtomIcon.displayName = 'AtomIcon'
AtomIcon.propTypes = {
  /**
   * Determine color of the icon
   * Besides the primary color types, you could use currentColor to inherit the color from the parent.
   * (default: ATOM_ICON_COLORS.currentColor)
   */
  color: PropTypes.oneOf(Object.keys(ATOM_ICON_COLORS)),
  /**
   * The children must be a SVG that follows the definition stated on the UXDEF.md.
   */
  children: PropTypes.element,
  /**
   * Determine the size of the icon. (default: ATOM_ICON_SIZES.medium)
   */
  size: PropTypes.oneOf(Object.keys(ATOM_ICON_SIZES)),
  /**
   * Determine if the icon should be server-side rendered. (default: true)
   */
  ssr: PropTypes.bool
}
