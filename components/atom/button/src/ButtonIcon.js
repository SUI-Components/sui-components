import React from 'react'
import PropTypes from 'prop-types'
import {
  ATOM_ICON_DISPLAY_NAME,
  ATOM_ICON_SIZES_MAPPER,
  CLASS,
  ICON_POSITIONS,
  SIZES
} from './config'

/**
 * Detect if element is an AtomIcon to force correct size
 * @param {React.ReactElement} icon
 */
const isAtomIcon = icon => icon?.type?.displayName === ATOM_ICON_DISPLAY_NAME

/**
 * Prepare the AtomIcon element to use the correct size
 * @param {React.ReactElement} atomIconElement
 * @param {object} options
 * @param {string} options.size Size of the button to grab the correct icon size
 */
const prepareAtomIcon = (atomIconElement, {size}) => {
  const atomIconSize = ATOM_ICON_SIZES_MAPPER[size]
  return React.cloneElement(atomIconElement, {
    color: undefined,
    size: atomIconSize
  })
}

export default function ButtonIcon({children, position, size}) {
  if (!children) return null
  // if the icon is an AtomIcon we've to be sure correct props are used
  const iconToRender = isAtomIcon(children)
    ? prepareAtomIcon(children, {size})
    : children

  return <span className={`${CLASS}-${position}Icon`}>{iconToRender}</span>
}

ButtonIcon.propTypes = {
  children: PropTypes.element,
  position: PropTypes.oneOf(Object.values(ICON_POSITIONS)),
  size: PropTypes.oneOf(SIZES)
}
