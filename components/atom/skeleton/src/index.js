import cx from 'classnames'
import PropTypes from 'prop-types'

import {ATOM_SKELETON_ANIMATIONS, ATOM_SKELETON_VARIANTS, BASE_CLASS} from './settings.js'

export default function AtomSkeleton({
  count = 1,
  variant = ATOM_SKELETON_VARIANTS.round,
  animation = ATOM_SKELETON_ANIMATIONS.pulse,
  style,
  width,
  height,
  ...others
}) {
  const className = cx(`${BASE_CLASS}`, {
    [`${BASE_CLASS}--pulse`]: animation === ATOM_SKELETON_ANIMATIONS.pulse,
    [`${BASE_CLASS}--wave`]: animation === ATOM_SKELETON_ANIMATIONS.wave,
    [`${BASE_CLASS}--round`]: variant === ATOM_SKELETON_VARIANTS.round,
    [`${BASE_CLASS}--circle`]: variant === ATOM_SKELETON_VARIANTS.circle
  })
  return (
    <>
      {Array.from(Array(count).keys()).map(index => (
        <span {...others} key={index} className={className} style={{...style, width, height}}>
          &zwnj;
        </span>
      ))}
    </>
  )
}

AtomSkeleton.displayName = 'AtomSkeleton'

AtomSkeleton.propTypes = {
  /**
   * Display count number of skeletons
   */
  count: PropTypes.number,
  /**
   * Set a specific width
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set a specific height
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set custom styles
   */
  style: PropTypes.object,
  /**
   * Choose between wave and pulse animation, if falsy no animation will be shown
   */
  animation: PropTypes.oneOf(Object.values(ATOM_SKELETON_ANIMATIONS)),
  /**
   * Shape the skeleton and make it look like the final user interface
   */
  variant: PropTypes.oneOf(Object.values(ATOM_SKELETON_VARIANTS))
}

export {
  ATOM_SKELETON_VARIANTS,
  ATOM_SKELETON_VARIANTS as atomSkeletonVariants,
  ATOM_SKELETON_ANIMATIONS,
  ATOM_SKELETON_ANIMATIONS as atomSkeletonAnimations
}
