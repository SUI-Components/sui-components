import {Children, isValidElement, cloneElement} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'
import AtomSkeleton from '@s-ui/react-atom-skeleton'
import useConvertStringToHex from './useConvertStringToHex'
import AvatarFallback from './AvatarFallback'
import AvatarBadge, {
  AVATAR_BADGE_STATUSES,
  AVATAR_BADGE_PLACEMENTS,
  AVATAR_BADGE_SIZES
} from './AvatarBadge'

export const AVATAR_SIZES = {
  XXLARGE: 'xxlarge',
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
}

const MoleculeAvatar = ({
  className: classNameProp,
  size = AVATAR_SIZES.MEDIUM,
  skeleton = <AtomSkeleton width="100%" height="100%" animation="wave" />,
  name,
  src,
  fallbackIcon,
  style,
  isLoading,
  children: childrenProp,
  ...others
}) => {
  const baseClassName = 'sui-MoleculeAvatar'
  const className = cx(baseClassName, `${baseClassName}--${size}`)
  const backgroundColor = useConvertStringToHex(name)
  const children = Children.toArray(childrenProp)
    .filter(child => isValidElement(child))
    .map(child => cloneElement(child, {size}))

  const renderFallback = () => {
    return <AvatarFallback name={name} size={size} icon={fallbackIcon} />
  }

  const renderContent = () => {
    if (isLoading) {
      return skeleton
    }

    return (
      <>
        {src ? (
          <AtomImage src={src} alt={name} errorIcon={renderFallback()} />
        ) : (
          renderFallback()
        )}
        {!isLoading && children}
      </>
    )
  }

  return (
    <span
      style={{
        ...style,
        ...(!src && {backgroundColor})
      }}
      className={className}
      {...others}
    >
      {renderContent()}
    </span>
  )
}

MoleculeAvatar.displayName = 'MoleculeAvatar'
MoleculeAvatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
  fallbackIcon: PropTypes.element,
  skeleton: PropTypes.element,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(AVATAR_SIZES))
}
MoleculeAvatar.Badge = AvatarBadge

export {AVATAR_SIZES as MOLECULE_AVATAR_SIZES}
export {AVATAR_BADGE_STATUSES as MOLECULE_AVATAR_BADGE_STATUSES}
export {AVATAR_BADGE_PLACEMENTS as MOLECULE_AVATAR_BADGE_PLACEMENTS}
export {AVATAR_BADGE_SIZES as MOLECULE_AVATAR_BADGE_SIZES}
export default MoleculeAvatar
