import {useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS, DEFAULTS_STAR_HOVER as DEFAULTS} from './settings.js'

const MoleculeRatingStarHover = ({
  iconStar = DEFAULTS.IconStarEmpty,
  initialRating = 0,
  onClick,
  size,
  ratingValues = DEFAULTS.ratingValues
}) => {
  const [selectedRating, setSelectedRating] = useState(null)
  const [rating, setRating] = useState(initialRating)

  const StarHover = iconStar

  const handleClick = (e, {value}) => {
    setRating(value)
    onClick(e, {value})
  }

  const renderStars = () =>
    ratingValues.map(value => {
      const isActive = rating >= value || value <= selectedRating
      const className = cx(BASE_CLASS, 'is-hoverable', {
        [`is-active`]: isActive
      })
      return (
        <div
          key={value}
          className={className}
          onClick={e => handleClick(e, {value})}
          onMouseOver={() => setSelectedRating(value)}
          onMouseOut={() => setSelectedRating(null)}
        >
          <StarHover size={size} />
        </div>
      )
    })

  return <>{renderStars()}</>
}

MoleculeRatingStarHover.displayName = 'MoleculeRatingStarHover'

MoleculeRatingStarHover.propTypes = {
  /** current values of the stars */
  ratingValues: PropTypes.array,

  /** Icon for star */
  iconStar: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** init value assigned to rating */
  initialRating: PropTypes.number,

  /** Callback used component hovered */
  onClick: PropTypes.func,

  /** size */
  size: PropTypes.oneOf(Object.values(ATOM_ICON_SIZES))
}

export default MoleculeRatingStarHover
