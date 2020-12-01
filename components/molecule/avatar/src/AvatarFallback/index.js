import {cloneElement} from 'react'
import PropTypes from 'prop-types'
import AvatarFallbackName from '../AvatarFallbackName'
import AvatarFallbackIcon from '../AvatarFallbackIcon'

const MoleculeAvatarFallback = ({
  name,
  icon = <AvatarFallbackIcon />,
  ...others
}) => {
  return name ? (
    <AvatarFallbackName name={name} {...others} />
  ) : (
    cloneElement(icon, {...others, role: 'img'})
  )
}

MoleculeAvatarFallback.displayName = 'MoleculeAvatarFallback'
MoleculeAvatarFallback.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element
}

export default MoleculeAvatarFallback
