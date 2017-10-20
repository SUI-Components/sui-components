import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class ThumbnailBasic extends Component {
  static BASE_CLASS = 'sui-ThumbnailBasic'
  static IMAGE_CLASS = 'sui-ThumbnailBasic-image'
  static CAPTION_CLASS = 'sui-ThumbnailBasic-caption'

  state = {
    imageLoaded: false,
    image: null
  }

  componentDidMount () {
    this.setState({image: this.props.image})
  }

  get _imageClasses () {
    return cx(
      ThumbnailBasic.IMAGE_CLASS,
      this.state.imageLoaded || `${ThumbnailBasic.IMAGE_CLASS}--hidden`
    )
  }

  onLoad = () => {
    this.setState({imageLoaded: true})
  }

  onError = () => {
    this.setState({
      imageLoaded: false,
      image: this.props.fallbackImage
    })
  }

  render () {
    const {captionText} = this.props
    return (
      <figure className={ThumbnailBasic.BASE_CLASS}>
        <img className={this._imageClasses}
          onLoad={() => this.onLoad()}
          onError={() => this.onError()}
          {...this.state.image}
        />
        {
          this.state.imageLoaded || this.props.placeholder
        }
        {
          captionText &&
            <figcaption className={ThumbnailBasic.CAPTION_CLASS}>
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
  placeholder: PropTypes.node,
  fallbackImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
}

export default ThumbnailBasic
