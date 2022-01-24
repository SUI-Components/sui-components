import PropTypes from 'prop-types'

import {
  CLASS,
  ICON_POSITIONS,
  SIZES,
  isAtomIcon,
  prepareAtomIcon
} from './config.js'

const ButtonIcon = ({children, position, size}) => {
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
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default ButtonIcon
