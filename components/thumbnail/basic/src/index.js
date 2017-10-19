import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThumbnailBasic extends Component {
  state = {
    imageLoaded: false
  }

  onLoad = () => {
    this.setState({imageLoaded: true})
  }

  render () {
    const {image, captionText} = this.props
    return (
      <figure className='sui-ThumbnailBasic'>
        <img className='sui-ThumbnailBasic-image'
          onLoad={() => this.onLoad()}
          {...image}
        />
        {
          !this.state.imageLoaded && this.props.placeholder
        }
        {
          captionText &&
            <figcaption className='sui-ThumbnailBasic-caption'>
              <span>{captionText}</span>
            </figcaption>
        }
      </figure>
    )
  }
}

ThumbnailBasic.displayName = 'ThumbnailBasic'

ThumbnailBasic.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  captionText: PropTypes.string,
  placeholder: PropTypes.node
}

export default ThumbnailBasic
