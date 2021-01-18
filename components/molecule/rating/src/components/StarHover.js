import {useState} from 'react'
import PropTypes from 'prop-types'
import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import {IconStarOutline} from '../Icons'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeRating-Star`

const DEFAULTS = {
  ratingValues: [1, 2, 3, 4, 5],
  IconStarEmpty: IconStarOutline
}

const MoleculeRatingStarHover = ({
  IconStar = DEFAULTS.IconStarEmpty,
  initialRating = 0,
  onClick,
  size,
  ratingValues = DEFAULTS.ratingValues
}) => {
  const [selectedRating, setSelectedRating] = useState(null)
  const [rating, setRating] = useState(initialRating)

  const StarHover = IconStar

  const handleClick = (e, {value}) => {
    setRating(value)
    onClick(e, {value})
  }

  const renderStars = () =>
    ratingValues.map(value => {
      const isActive = rating >= value || value <= selectedRating
      const className = cx(BASE_CLASS, {
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
  IconStar: PropTypes.node,

  /** init value assigned to rating */
  initialRating: PropTypes.number,

  /** Callback used component hovered */
  onClick: PropTypes.func,

  /** size */
  size: PropTypes.oneOf(Object.values(ATOM_ICON_SIZES))
}

export default MoleculeRatingStarHover
