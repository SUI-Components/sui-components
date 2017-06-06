import React, {PropTypes} from 'react'
import ReactSlidy from 'react-slidy'

const ImageSlider = (props) => {

  const slides = getSlides(props.images)

  return (
    <div onClick={props.onClickCB} className="sui-ImageSlider">
      { hasMoreThanOneImage(props.images)
        ? (<ReactSlidy>{ slides }</ReactSlidy>)
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
const hasMoreThanOneImage = (images) => (images && 1 < images.length)

/**
 * @param {Array} images List given by props.images.
 * @return {Array} List of img elements.
 */
const getSlides = (images) => {
  if (images && images.length) {
    return images.map( (image, index) => {
      return (<img key={index} src={image.src} alt={image.alt} />)
    })
  }
  else{
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
  onClickCB: PropTypes.func
}

ImageSlider.defaultProps = {
  onClickCB: (...args) => {}
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
