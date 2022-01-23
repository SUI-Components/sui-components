import {
  Children,
  isValidElement,
  cloneElement,
  useCallback,
  forwardRef
} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'
import AtomSkeleton, {
  ATOM_SKELETON_VARIANTS,
  ATOM_SKELETON_ANIMATIONS
} from '@s-ui/react-atom-skeleton'

import useConvertStringToHex from './useConvertStringToHex.js'
import {baseClassName, AVATAR_SIZES} from './settings.js'
import AvatarFallback from './AvatarFallback/index.js'
import AvatarBadge, {
  AVATAR_BADGE_STATUSES,
  AVATAR_BADGE_PLACEMENTS,
  AVATAR_BADGE_SIZES
} from './AvatarBadge/index.js'

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
      fallbackIcon,
      style,
      isLoading,
      children: childrenProp,
      ...others
    },
    forwardedRef
  ) => {
    const className = cx(baseClassName, `${baseClassName}--${size}`)
    const backgroundColor = useConvertStringToHex(name)
    const children = Children.toArray(childrenProp)
      .filter(child => isValidElement(child))
      .map(child => cloneElement(child, {size}))

    const renderContent = useCallback(() => {
      if (isLoading) {
        return skeleton
      }

      const fallback = (
        <AvatarFallback name={name} size={size} icon={fallbackIcon} />
      )

      return (
        <>
          {src ? (
            <AtomImage src={src} alt={name} errorIcon={fallback} />
          ) : (
            fallback
          )}
          {!isLoading && children}
        </>
      )
    }, [isLoading, skeleton, children, src, name, fallbackIcon, size])

    return (
      <span
        style={{
          ...(!src && {backgroundColor}),
          ...style
        }}
        className={className}
        {...others}
        ref={forwardedRef}
      >
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
