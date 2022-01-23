import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  AVATAR_BADGE_STATUSES,
  AVATAR_BADGE_PLACEMENTS,
  AVATAR_BADGE_SIZES
} from './settings.js'

const MoleculeAvatarBadge = ({
  className: classNameProp,
  size,
  status = AVATAR_BADGE_STATUSES.ERROR,
  placement = AVATAR_BADGE_PLACEMENTS.BOTTOM,
  ...others
}) => {
  const baseClassName = 'sui-MoleculeAvatarBadge'
  const className = cx(
    baseClassName,
    classNameProp,
    `${baseClassName}--${size}`,
    `${baseClassName}--${status}`,
    `${baseClassName}--${placement}`
  )

  return <div className={className} {...others} />
}

MoleculeAvatarBadge.displayName = 'MoleculeAvatarBadge'
MoleculeAvatarBadge.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(Object.values(AVATAR_BADGE_STATUSES)),
  placement: PropTypes.oneOf(Object.values(AVATAR_BADGE_PLACEMENTS)),
  size: PropTypes.oneOf(Object.values(AVATAR_BADGE_SIZES))
}

export default MoleculeAvatarBadge
