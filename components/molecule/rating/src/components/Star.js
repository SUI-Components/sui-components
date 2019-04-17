import React from 'react'
import PropTypes from 'prop-types'

import {IconStarFilled, IconStarHalfFilled, IconStarOutline} from '../Icons'

const BASE_CLASS = `sui-MoleculeRating-Star`

const MoleculeRatingStar = ({
  value,
  fullValue,
  halfValue,
  index,
  IconStarEmpty,
  IconStarFilled,
  IconStarHalfFilled
}) => {
  let StarMode = IconStarEmpty
  if (value >= index + fullValue) StarMode = IconStarFilled
  else if (value >= index + halfValue) StarMode = IconStarHalfFilled

  return (
    <div className={BASE_CLASS}>
      <StarMode />
    </div>
  )
}

MoleculeRatingStar.displayName = 'MoleculeRatingStar'

MoleculeRatingStar.propTypes = {
  /** index of the star */
  index: PropTypes.number,

  /** current value of the star */
  value: PropTypes.number,

  /** value assigned to the star fully filled */
  fullValue: PropTypes.number,

  /** value assigned to the star half filled */
  halfValue: PropTypes.number,

  /** Icon for star filled */
  IconStarFilled: PropTypes.node,

  /** Icon for star half filled */
  IconStarHalfFilled: PropTypes.node,

  /** Icon for star empty */
  IconStarEmpty: PropTypes.node
}

MoleculeRatingStar.defaultProps = {
  value: 0,
  fullValue: 1,
  halfValue: 0.5,
  IconStarFilled: IconStarFilled,
  IconStarHalfFilled: IconStarHalfFilled,
  IconStarEmpty: IconStarOutline
}

export default MoleculeRatingStar
