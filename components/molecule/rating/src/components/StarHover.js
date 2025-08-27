import {useState} from 'react'

import PropTypes from 'prop-types'

import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS, DEFAULTS_STAR_HOVER as DEFAULTS} from './settings.js'

const MoleculeRatingStarHover = ({
  initialRating = 0,
  onClick,
  size,
  ratingValues = DEFAULTS.ratingValues,
  IconStarEmpty = DEFAULTS.IconStarEmpty,
  IconStarFilled = DEFAULTS.IconStarFilled,
  IconStarHalfFilled = DEFAULTS.IconStarHalfFilled
}) => {
  const [selectedRating, setSelectedRating] = useState(null)
  const [rating, setRating] = useState(initialRating)

  const handleClick = (e, {value}) => {
    setRating(value)
    onClick(e, {value})
  }

  const renderStars = () =>
    ratingValues.map(value => {
      const isActive = rating >= value || value <= selectedRating
      const StarHover = isActive ? IconStarFilled : IconStarEmpty

      return (
        <div
          key={value}
          className={BASE_CLASS}
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
  /** Icon for star filled */
  IconStarFilled: PropTypes.node,

  /** Icon for star half filled */
  IconStarHalfFilled: PropTypes.node,

  /** Icon for star empty */
  IconStarEmpty: PropTypes.node,

  /** init value assigned to rating */
  initialRating: PropTypes.number,

  /** Callback used component hovered */
  onClick: PropTypes.func,

  /** current values of the stars */
  ratingValues: PropTypes.array,

  /** size */
  size: PropTypes.oneOf(Object.values(ATOM_ICON_SIZES))
}

export default MoleculeRatingStarHover
