import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Swiper from 'swiper'
import Chevronleft from '@schibstedspain/sui-svgiconset/lib/Chevronleft'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'

/**
 * Slider of images.
 */
class CardProductSlider extends Component {
  constructor(...args) {
    super(...args)

    this._swiperContainer = null
    this._swiperButtonPrev = null
    this._swiperButtonNext = null
  }

  componentDidMount() {
    const swiperOptions = {
      loop: true,
      prevButton: this._swiperButtonPrev,
      nextButton: this._swiperButtonNext
    }

    Swiper(this._swiperContainer, swiperOptions)
  }

  render() {
    const {images, iconPrev: IconPrev, iconNext: IconNext} = this.props

    return (
      <div
        ref={node => {
          this._swiperContainer = node
        }}
        className="swiper-container sui-CardProductSlider"
      >
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div key={index} className="swiper-slide">
              <img src={src} className="sui-CardProductSlider-image" />
            </div>
          ))}
        </div>
        <div
          ref={node => {
            this._swiperButtonPrev = node
          }}
          className="swiper-button-prev sui-CardProductSlider-nav"
        >
          <IconPrev svgClass="sui-CardProductSlider-navIcon" />
        </div>
        <div
          ref={node => {
            this._swiperButtonNext = node
          }}
          className="swiper-button-next sui-CardProductSlider-nav"
        >
          <IconNext svgClass="sui-CardProductSlider-navIcon" />
        </div>
      </div>
    )
  }
}

CardProductSlider.propTypes = {
  /**
   * Array of images for the slider.
   */
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Icon (component) for the prev button.
   */
  iconPrev: PropTypes.func,
  /**
   * Icon (component) for the next button.
   */
  iconNext: PropTypes.func
}

CardProductSlider.defaultProps = {
  iconPrev: Chevronleft,
  iconNext: Chevronright
}

export default CardProductSlider
