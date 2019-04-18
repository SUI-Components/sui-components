import React from 'react'
import PropTypes from 'prop-types'

import {IconStarFilled, IconStarHalfFilled, IconStarOutline} from '../Icons'

const BASE_CLASS = `sui-MoleculeRating-Star`

const DEFAULTS = {
  value: 0,
  fullValue: 1,
  halfValue: 0.5,
  IconStarFilled: IconStarFilled,
  IconStarHalfFilled: IconStarHalfFilled,
  IconStarEmpty: IconStarOutline
}

const MoleculeRatingStar = ({
  value = DEFAULTS.value,
  fullValue = DEFAULTS.fullValue,
  halfValue = DEFAULTS.halfValue,
  index,
  IconStarEmpty = DEFAULTS.IconStarEmpty,
  IconStarFilled = DEFAULTS.IconStarFilled,
  IconStarHalfFilled = DEFAULTS.IconStarHalfFilled
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

export default MoleculeRatingStar
