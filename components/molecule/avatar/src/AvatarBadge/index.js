import React, {forwardRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const AVATAR_BADGE_STATUSES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

export const AVATAR_BADGE_PLACEMENTS = {
  TOP: 'top',
  BOTTOM: 'bottom'
}

const MoleculeAvatarBadge = forwardRef(
  (
    {
      className: classNameProp,
      status = AVATAR_BADGE_STATUSES.ERROR,
      placement = AVATAR_BADGE_PLACEMENTS.BOTTOM,
      ...others
    },
    ref
  ) => {
    const baseClassName = 'react-MoleculeAvatarBadge'
    const className = cx(
      baseClassName,
      classNameProp,
      `${baseClassName}--${status}`,
      `${baseClassName}--${placement}`
    )

    return <div ref={ref} className={className} {...others} />
  }
)

MoleculeAvatarBadge.displayName = 'MoleculeAvatarBadge'
MoleculeAvatarBadge.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(Object.values(AVATAR_BADGE_STATUSES)),
  placement: PropTypes.oneOf(Object.values(AVATAR_BADGE_PLACEMENTS))
}

export default MoleculeAvatarBadge
