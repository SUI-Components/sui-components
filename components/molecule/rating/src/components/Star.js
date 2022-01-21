import PropTypes from 'prop-types'
import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import {BASE_CLASS, DEFAULTS_STAR as DEFAULTS} from './settings.js'

const MoleculeRatingStar = ({
  value = DEFAULTS.value,
  fullValue = DEFAULTS.fullValue,
  halfValue = DEFAULTS.halfValue,
  index,
  IconStarEmpty = DEFAULTS.IconStarEmpty,
  IconStarFilled = DEFAULTS.IconStarFilled,
  IconStarHalfFilled = DEFAULTS.IconStarHalfFilled,
  size
}) => {
  let StarMode = IconStarEmpty
  if (value >= index + fullValue) StarMode = IconStarFilled
  else if (value >= index + halfValue) StarMode = IconStarHalfFilled

  return (
    <div className={BASE_CLASS}>
      <StarMode size={size} />
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
  IconStarEmpty: PropTypes.node,

  /** size */
  size: PropTypes.oneOf(Object.values(ATOM_ICON_SIZES))
}

export default MoleculeRatingStar
