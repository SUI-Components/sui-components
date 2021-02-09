import {cloneElement} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import AvatarFallbackName from '../AvatarFallbackName'
import AvatarFallbackIcon from '../AvatarFallbackIcon'

const MoleculeAvatarFallback = ({
  name,
  icon = <AvatarFallbackIcon />,
  className: classNameProp,
  ...others
}) => {
  const className = cx(classNameProp, 'sui-MoleculeAvatarFallbackIcon')
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
