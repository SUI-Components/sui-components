import {cloneElement} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import AvatarFallbackName from '../AvatarFallbackName/index.js'
import AvatarFallbackIcon from '../AvatarFallbackIcon/index.js'
import {BASE_CLASS_NAME as FALLBACK_ICON_CLASS_NAME} from '../AvatarFallbackIcon/settings.js'

const MoleculeAvatarFallback = ({
  name,
  icon = <AvatarFallbackIcon />,
  className: classNameProp,
  ...others
}) => {
  const className = cx(classNameProp, FALLBACK_ICON_CLASS_NAME)
  return name ? (
    <AvatarFallbackName name={name} {...others} />
  ) : (
    cloneElement(icon, {...others, className, role: 'img'})
  )
}

MoleculeAvatarFallback.displayName = 'MoleculeAvatarFallback'
MoleculeAvatarFallback.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.element
}

export default MoleculeAvatarFallback
