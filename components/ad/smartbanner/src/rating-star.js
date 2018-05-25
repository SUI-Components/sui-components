import PropTypes from 'prop-types'
import React from 'react'
import IconStarFullDefault from '@schibstedspain/sui-svgiconset/lib/Star'
import IconStarHalfDefault from '@schibstedspain/sui-svgiconset/lib/Starhalf'
import IconStarEmptyDefault from '@schibstedspain/sui-svgiconset/lib/Starempty'

const baseNumber = 0.5
const checkRatingValue = ({ratingValue, ratingMax}) =>
  ratingValue % baseNumber === 0 && ratingValue <= ratingMax

const RatingStar = ({ratingValue, ratingMax, icons}) => {
  const svgIconsType = {
    half: icons.starHalf,
    full: icons.starFull,
    empty: icons.starEmpty
  }

  const _renderStar = (_, index) => {
    if (!checkRatingValue({ratingValue, ratingMax})) return null
    const ratingRound = Math.round(ratingValue)
    const ratingFloor = Math.floor(ratingValue)
    const nextItem = index + 1
    const full = nextItem <= ratingRound
    const half = ratingRound === nextItem && ratingFloor !== ratingValue
    let typeStar

    if (half) {
      typeStar = 'half'
    } else if (full) {
      typeStar = 'full'
    } else {
      typeStar = 'empty'
    }
    const SvgIconsCall = svgIconsType[typeStar]
    return <SvgIconsCall key={index} svgClass="sui-AdSmartbanner-ratingIcon" />
  }

  return (
    <span className="sui-AdSmartbanner-rating">
      {Array(ratingMax)
        .fill()
        .map(_renderStar)}
    </span>
  )
}

RatingStar.propTypes = {
  ratingValue: function(props, propName, componentName) {
    if (
      !checkRatingValue({
        ratingValue: props[propName],
        ratingMax: props.ratingMax
      })
    ) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. \`${propName}\` value must be multiple of \`${baseNumber}\` and lower or equal to \`ratingMax\` value.`
      )
    }
  },
  ratingMax: PropTypes.number,
  icons: PropTypes.shape({
    starEmpty: PropTypes.func,
    starFull: PropTypes.func,
    starHalf: PropTypes.func
  })
}

RatingStar.defaultProps = {
  icons: {
    starEmpty: IconStarEmptyDefault,
    starFull: IconStarFullDefault,
    starHalf: IconStarHalfDefault
  },
  ratingValue: 0,
  ratingMax: 5
}

RatingStar.displayName = 'RatingStar'

export default RatingStar
