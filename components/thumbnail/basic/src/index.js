import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThumbnailBasic extends Component {
  render () {
    const { image, captionText } = this.props
    return (
      <figure className='sui-ThumbnailBasic'>
        <img className='sui-ThumbnailBasic-Image' src={image.src} alt={image.alt} />
        <figcaption className='sui-ThumbnailBasic-Caption'>
          <span>{captionText}</span>
        </figcaption>
      </figure>
    )
  }
}

ThumbnailBasic.displayName = 'ThumbnailBasic'

ThumbnailBasic.propTypes = {
  image: PropTypes.object.isRequired,
  captionText: PropTypes.string
}

export default ThumbnailBasic
