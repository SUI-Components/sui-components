import React, { Component, PropTypes } from 'react'
import Swiper from 'swiper'
import Chevronleft from '@schibstedspain/sui-svgiconset/lib/chevronleft'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/chevronright'

/**
 * Slider of images.
 */
class CardProductSlider extends Component {
  componentDidMount () {
    const swiperOptions = {
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    }

    window.cardProductSwiper = new Swiper('.swiper-container', swiperOptions)
  }

  render () {
    const { images, iconPrev: IconPrev, iconNext: IconNext } = this.props

    return (
      <div className='sui-CardProductSlider swiper-container'>
        <div className='swiper-wrapper'>
          {images.map((src, index) =>
            <div key={index} className='swiper-slide'>
              <img src={src} className='sui-CardProductSlider-image' />
            </div>
          )}
        </div>
        <div className='swiper-button-prev sui-CardProductSlider-nav'>
          <IconPrev svgClass='sui-CardProductSlider-navIcon' />
        </div>
        <div className='swiper-button-next sui-CardProductSlider-nav'>
          <IconNext svgClass='sui-CardProductSlider-navIcon' />
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
