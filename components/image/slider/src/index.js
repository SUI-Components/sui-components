import PropTypes from 'prop-types'
import React from 'react'
import ReactSlidy from 'react-slidy'

const ImageSlider = (props) => {
  const slides = getSlides(props.images)

  return (
    <div onClick={props.handleClick} className='sui-ImageSlider'>
      { hasMoreThanOneImage(props.images)
        ? (<ReactSlidy {...props.sliderOptions} dynamicContent={props.dynamicContent}>{ slides }</ReactSlidy>)
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
      const key = image.key || index
      return (<img key={key} src={image.src} alt={image.alt} />)
    })
  } else {
    return []
  }
}

ImageSlider.propTypes = {
  dynamicContent: PropTypes.bool,
  /**
   * List of objects with src and alt properties.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      /**
       * When dynamicContent is set to true, you need to set this key with a unique value for all the groups of images.
       * When dynamicContent is set to false, you can ommit this field.
       * @see dynamicContent code comment for more info.
       */
      key: PropTypes.string
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
  sliderOptions: {},
  /**
   * Whether to enable react-slidy to receive new props and change its content or not.
   * If you want to set it to true, you also need to set a unique key for every image given over component updates.
   * It means that if the initial images has keys a and b, when you want to update the component with new content,
   * new images should have keys c and d... never a or b. Otherwise, images with the same key will not be updated.
   */
  dynamicContent: false
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
