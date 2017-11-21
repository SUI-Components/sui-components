import PropTypes from 'prop-types'
import React from 'react'
import ReactSlidy from 'react-slidy'

const ImageSlider = (props) => {
  const slides = getSlides(props.images)

  return (
    <div onClick={props.handleClick} className='sui-ImageSlider'>
      { hasMoreThanOneImage(props.images)
        ? (<ReactSlidy {...props.sliderOptions}>{ slides }</ReactSlidy>)
        : slides
      }
    </div>
  )
}

/**
 * Says if there are more than one image in the given list.
 * Implemented for semantic purposes.
 * @param {Array} images List given by props.images.
 * @return {boolean}
 */
const hasMoreThanOneImage = (images) => (images && images.length > 1)

/**
 * @param {Array} images List given by props.images.
 * @return {Array} List of img elements.
 */
const getSlides = (images) => {
  if (images && images.length) {
    return images.map((image, index) => {
      return (<img key={index} src={image.src} alt={image.alt} />)
    })
  } else {
    return []
  }
}

ImageSlider.propTypes = {
  /**
   * List of objects with src and alt properties.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    }).isRequired
  ),
  /**
   * Callback executed when clicking over the slider.
   */
  handleClick: PropTypes.func,
  /**
   * Custom configuration options to pass to react-slidy component.
   */
  sliderOptions: PropTypes.shape({
    lazyLoadSlider: PropTypes.bool,
    initialSlide: PropTypes.number
  })
}

ImageSlider.defaultProps = {
  /**
   * This function will receive the onClick arguments
   */
  handleClick: () => {},
  /**
   * If not set, react-slidy will be created with its default properties.
   */
  sliderOptions: {}
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
