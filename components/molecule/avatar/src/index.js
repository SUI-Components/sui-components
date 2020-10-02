import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'
import AtomSkeleton from '@s-ui/react-atom-skeleton'
import useConvertStringToHex from './useConvertStringToHex'
import AvatarFallback from './AvatarFallback'
import AvatarBadge from './AvatarBadge'

export const AVATAR_SIZES = {
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
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
  const className = cx(
    baseClassName,
    classNameProp,
    `${baseClassName}--${size}`
  )
  const backgroundColor = useConvertStringToHex(name)
  const children = React.Children.toArray(childrenProp)
    .filter(child => React.isValidElement(child))
    .map(child => React.cloneElement(child, {size}))

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
        backgroundColor
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

export default MoleculeAvatar
