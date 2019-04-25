import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Star from './components/Star'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const BASE_CLASS = `sui-MoleculeRating`
const CLASS_CONTAINER_STARS = `${BASE_CLASS}-containerStars`
const CLASS_LABEL = `${BASE_CLASS}-label`
const CLASS_LINK = `${BASE_CLASS}--withLink`

const MoleculeRating = ({
  numStars = 5,
  value,
  size = SIZES.SMALL,
  label,
  href,
  target,
  linkFactory: Link = ({children, ...rest} = {}) => <a {...rest}>{children}</a>
}) => {
  const className = cx(BASE_CLASS, `${BASE_CLASS}--${size}`, {
    [CLASS_LINK]: href
  })

  const labelLink = href ? (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
    >
      {label}
    </Link>
  ) : (
    label
  )

  return (
    <div className={className}>
      <div className={CLASS_CONTAINER_STARS}>
        {new Array(numStars)
          .fill(0)
          .map((_, index) => <Star key={index} index={index} value={value} />)}
      </div>
      <p className={CLASS_LABEL}>{labelLink}</p>
    </div>
  )
}

MoleculeRating.displayName = 'MoleculeRating'

MoleculeRating.propTypes = {
  /** Number of Stars */
  numStars: PropTypes.number,

  /** Value of Rating */
  value: PropTypes.number,

  /** Label of Rating */
  label: PropTypes.string,

  /** size */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Target to be added on the HTML link */
  target: PropTypes.string,

  /** URL to be added on the HTML link */
  href: PropTypes.string,

  /** Factory used to create navigation links */
  linkFactory: PropTypes.func
}

export default MoleculeRating
export {SIZES as MoleculeRatingSizes}
