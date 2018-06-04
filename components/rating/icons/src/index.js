import React, {Component} from 'react'
import PropTypes from 'prop-types'

class RatingIcons extends Component {
  state = {
    ratingFilledWidth: 0
  }

  calculateWidthByRating() {
    const {maxValue, iconSize, rating, spacingBetween} = this.props

    return ((maxValue * (iconSize + spacingBetween)) / maxValue) * rating
  }

  getIcon(Icon, index) {
    return (
      <div
        key={index}
        className="sui-RatingIcons-iconContainer"
        style={{
          minWidth: this.props.iconSize,
          marginLeft: this.props.spacingBetween
        }}
      >
        <Icon />
      </div>
    )
  }

  buildRating(maxValue, icon) {
    const iconsArray = []
    for (let i = 0; i < maxValue; i++) {
      iconsArray.push(this.getIcon(icon, i))
    }

    return iconsArray
  }

  componentDidMount() {
    const currentRatingFilledWidth = this.calculateWidthByRating(
      this.props.rating,
      this.props.maxValue,
      this.ratingEle
    )
    if (currentRatingFilledWidth !== this.state.ratingFilledWidth) {
      this.setState({
        ratingFilledWidth: currentRatingFilledWidth
      })
    }
  }

  render() {
    const {maxValue, icon, fillColor, emptyColor} = this.props
    const ratingIcons = this.buildRating(maxValue, icon)

    return (
      <div className="sui-RatingIcons">
        <div className="sui-RatingIcons-empty" style={{fill: emptyColor}}>
          {ratingIcons}
        </div>
        <div
          className="sui-RatingIcons-filled"
          style={{width: this.state.ratingFilledWidth, fill: fillColor}}
        >
          {ratingIcons}
        </div>
      </div>
    )
  }
}

RatingIcons.displayName = 'RatingIcons'

RatingIcons.propTypes = {
  /**
   * The rating of our user, if our user have 6/10 stars we should pass 6 you can pass it with decimals too. 6.5, 7, 7.5...
   */
  rating: PropTypes.number.isRequired,
  /**
   * The max value that our rating have. For example if it have 10 max star we should put 10.
   */
  maxValue: PropTypes.number.isRequired,
  /**
   * Our Icon to be used as a rating
   */
  icon: PropTypes.func.isRequired,
  /**
   * Our icon size, this one is important to make width calcs on the mask
   */
  iconSize: PropTypes.number.isRequired,
  /**
   * A margin will be added to our we set this to a number(px),
   */
  spacingBetween: PropTypes.number,
  /**
   * The color used for the filled mask. If you don't provide any color, it will fallback to our component scss variable $fill-profile-rating-filled
   */
  fillColor: PropTypes.string,
  /**
   * The color used for the empty mask. If you don't provide any color, it will fallback to our component scss variable $fill-profile-rating-empty
   */
  emptyColor: PropTypes.string
}

RatingIcons.defaultProps = {
  spacingBetween: 0
}
export default RatingIcons
