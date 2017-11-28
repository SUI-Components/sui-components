import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileRating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ratingFilledWidth: 0
    }
  }

  calculateWidthByRating () {
    const { maxValue, iconSize, rating, spacingBetween } = this.props

    return (maxValue * (iconSize + spacingBetween) / maxValue) * rating
  }

  getIcon (Icon, index) {
    return <div key={index} className='sui-ProfileRating-iconContainer' style={{ minWidth: this.props.iconSize, marginLeft: this.props.spacingBetween }}>
      <Icon />
    </div>
  }

  buildRating (maxValue, icon) {
    const iconsArray = []
    for (let i = 0; i < maxValue; i++) {
      iconsArray.push(this.getIcon(icon, i))
    }

    return iconsArray
  }

  componentDidMount () {
    const currentRatingFilledWidth = this.calculateWidthByRating(this.props.rating, this.props.maxValue, this.ratingEle)
    if (currentRatingFilledWidth !== this.state.ratingFilledWidth) {
      this.setState({
        ratingFilledWidth: currentRatingFilledWidth
      })
    }
  }

  render () {
    const { maxValue, icon, fillColor, emptyColor } = this.props

    return <div className='sui-ProfileRating'>
      <div className='sui-ProfileRating-empty' style={{ fill: emptyColor }}>
        {this.buildRating(maxValue, icon)}
      </div>
      <div className='sui-ProfileRating-filled' style={{ width: this.state.ratingFilledWidth, fill: fillColor }} >
        {this.buildRating(maxValue, icon)}
      </div>
    </div>
  }
}

ProfileRating.displayName = 'ProfileRating'

ProfileRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  icon: PropTypes.func.isRequired,
  iconSize: PropTypes.number.isRequired,
  spacingBetween: PropTypes.number,
  fillColor: PropTypes.string,
  emptyColor: PropTypes.string
}

ProfileRating.defaultProps = {
  spacingBetween: 0
}
export default ProfileRating
