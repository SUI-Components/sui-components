import {forwardRef, useCallback} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomImage from '@s-ui/react-atom-image'
import AtomSkeleton, {
  ATOM_SKELETON_ANIMATIONS,
  ATOM_SKELETON_VARIANTS
} from '@s-ui/react-atom-skeleton'
import Injector from '@s-ui/react-primitive-injector'

import AvatarBadge, {
  AVATAR_BADGE_PLACEMENTS,
  AVATAR_BADGE_SIZES,
  AVATAR_BADGE_STATUSES
} from './AvatarBadge/index.js'
import AvatarFallback from './AvatarFallback/index.js'
import {AVATAR_SIZES, baseClassName} from './settings.js'

const MoleculeAvatar = forwardRef(
  (
    {
      className: classNameProp,
      size = AVATAR_SIZES.MEDIUM,
      skeleton = (
        <AtomSkeleton
          width="100%"
          height="100%"
          variant={ATOM_SKELETON_VARIANTS.circle}
          animation={ATOM_SKELETON_ANIMATIONS.wave}
        />
      ),
      name,
      src,
      fallbackColor,
      fallbackIcon,
      style,
      isLoading,
      imageProps = {},
      children,
      ...others
    },
    forwardedRef
  ) => {
    const className = cx(baseClassName, `${baseClassName}--${size}`)

    const renderContent = useCallback(() => {
      if (isLoading) {
        return skeleton
      }

      const fallback = (
        <AvatarFallback
          name={name}
          size={size}
          icon={fallbackIcon}
          backgroundColor={fallbackColor}
        />
      )

      return (
        <>
          {src ? (
            <AtomImage
              src={src}
              alt={name}
              errorIcon={fallback}
              {...imageProps}
            />
          ) : (
            fallback
          )}
          {!isLoading && <Injector size={size}>{children}</Injector>}
        </>
      )
    }, [
      children,
      fallbackColor,
      fallbackIcon,
      isLoading,
      name,
      size,
      skeleton,
      src,
      imageProps
    ])

    return (
      <span style={style} className={className} {...others} ref={forwardedRef}>
        {renderContent()}
      </span>
    )
  }
)

MoleculeAvatar.displayName = 'MoleculeAvatar'
MoleculeAvatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
  fallbackColor: PropTypes.string,
  fallbackIcon: PropTypes.element,
  skeleton: PropTypes.element,
  isLoading: PropTypes.bool,
  imageProps: PropTypes.object,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(AVATAR_SIZES))
}
MoleculeAvatar.Badge = AvatarBadge

export {AVATAR_SIZES as MOLECULE_AVATAR_SIZES}
export {AVATAR_SIZES as moleculeAvatarSizes}
export {AVATAR_BADGE_STATUSES as MOLECULE_AVATAR_BADGE_STATUSES}
export {AVATAR_BADGE_STATUSES as moleculeAvatarBadgeStatuses}
export {AVATAR_BADGE_PLACEMENTS as MOLECULE_AVATAR_BADGE_PLACEMENTS}
export {AVATAR_BADGE_PLACEMENTS as moleculeAvatarBadgePlacements}
export {AVATAR_BADGE_SIZES as MOLECULE_AVATAR_BADGE_SIZES}
export {AVATAR_BADGE_SIZES as moleculeAvatarBadgeSizes}

export default MoleculeAvatar
