import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {IconStarFilled, IconStarHalfFilled, IconStarOutline} from '../Icons'

const BASE_CLASS = `sui-MoleculeRating-Star`

class MoleculeRating extends Component {
  refContainer = React.createRef()

  handleMouseLeave = e => {
    const {onMouseLeave, fullValue, index} = this.props
    const {refContainer} = this
    const boundsContainer = e.target.getBoundingClientRect()
    const widthContainer = refContainer.current.clientWidth
    const halfWidthContainer = Math.round(widthContainer / 2)
    const currentPosX = e.clientX - boundsContainer.left
    const isBelowHalf = currentPosX <= halfWidthContainer

    let value = 0
    if (!isBelowHalf) value = fullValue

    onMouseLeave(e, {value, index})
  }

  handleMouseMove = e => {
    const {onMouseMove, fullValue, halfValue, index} = this.props
    const {refContainer} = this
    const boundsContainer = e.target.getBoundingClientRect()
    const widthContainer = refContainer.current.clientWidth
    const halfWidthContainer = Math.round(widthContainer / 2)
    const currentPosX = e.clientX - boundsContainer.left
    const isBelowHalf = currentPosX <= halfWidthContainer

    let value = 0
    if (isBelowHalf) value = halfValue
    else value = fullValue
    onMouseMove(e, {value, index})
  }

  render() {
    const {
      value,
      fullValue,
      halfValue,
      index,
      IconStarEmpty,
      IconStarFilled,
      IconStarHalfFilled
    } = this.props
    const {refContainer, handleMouseMove, handleMouseLeave} = this
    let StarMode = IconStarEmpty
    if (value >= index + fullValue) StarMode = IconStarFilled
    else if (value >= index + halfValue) StarMode = IconStarHalfFilled

    return (
      <div
        ref={refContainer}
        className={BASE_CLASS}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <StarMode />
      </div>
    )
  }
}

MoleculeRating.displayName = 'MoleculeRating'

// Remove these comments if you need
// MoleculeRating.contextTypes = {i18n: PropTypes.object}
MoleculeRating.propTypes = {
  /** callback to be triggered when mouse moves over the star */
  onMouseMove: PropTypes.func,

  /** callback to be triggered when mouse levaes the star */
  onMouseLeave: PropTypes.func,

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

MoleculeRating.defaultProps = {
  value: 0,
  fullValue: 1,
  halfValue: 0.5,
  onMouseMove: () => {},
  onMouseLeave: () => {},
  IconStarFilled: IconStarFilled,
  IconStarHalfFilled: IconStarHalfFilled,
  IconStarEmpty: IconStarOutline
}

export default MoleculeRating
