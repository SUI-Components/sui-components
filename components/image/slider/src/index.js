import React, {PropTypes} from 'react'
import ReactSlidy from 'react-slidy'
import SuiMultimedia from '@schibstedspain/sui-multimedia'

const ImageSlider = (props) => {

  const slides = getSlides(props.images, props.lazyLoad)

  return (
    <div className="sui-ImageSlider">
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
 * @param {boolean} lazyLoad
 * @return {Array} List of SuiMultimedia components.
 */
const getSlides = (images, lazyLoad) => {
  if (images && images.length) {
    return images.map( (image, index) => {
      return (<SuiMultimedia key={index} images={image} lazyLoad={lazyLoad} />)
    })
  }
  else{
    return []
  }
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      link: PropTypes.string
    }).isRequired
  ),
  lazyLoad: PropTypes.bool
}

ImageSlider.defaultProps = {
  lazyLoad: false
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
