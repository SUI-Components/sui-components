import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const ATOM_SKELETON_ANIMATIONS = {
  wave: 'wave',
  pulse: 'pulse'
}

export const ATOM_SKELETON_VARIANTS = {
  round: 'round',
  circle: 'circle',
  square: 'square'
}

export default function AtomSkeleton({
  count = 1,
  variant = ATOM_SKELETON_VARIANTS.round,
  animation = ATOM_SKELETON_ANIMATIONS.pulse,
  style,
  width,
  height,
  ...others
}) {
  const baseClass = 'react-AtomSkeleton'
  const className = cx(`${baseClass}`, {
    [`${baseClass}--pulse`]: animation === ATOM_SKELETON_ANIMATIONS.pulse,
    [`${baseClass}--wave`]: animation === ATOM_SKELETON_ANIMATIONS.wave,
    [`${baseClass}--round`]: variant === ATOM_SKELETON_VARIANTS.round,
    [`${baseClass}--circle`]: variant === ATOM_SKELETON_VARIANTS.circle
  })

  return (
    <>
      {Array.from(Array(count).keys()).map(index => (
        <span
          key={index}
          className={className}
          style={{...style, width, height}}
          {...others}
        >
          &zwnj;
        </span>
      ))}
    </>
  )
}

AtomSkeleton.displayName = 'AtomSkeleton'
AtomSkeleton.propTypes = {
  count: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.height,
  style: PropTypes.object,
  animation: PropTypes.oneOf(Object.values(ATOM_SKELETON_ANIMATIONS)),
  variant: PropTypes.oneOf(Object.values(ATOM_SKELETON_VARIANTS))
}
