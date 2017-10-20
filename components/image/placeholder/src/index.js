import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class ImagePlaceholder extends Component {
  static IMAGE_CLASS = 'sui-ImagePlaceholder-image'

  state = {
    imageLoaded: false,
    image: null
  }

  componentDidMount () {
    this.setState({image: this.props.image})
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

  get _classNames () {
    return cx(
      'sui-ImagePlaceholder',
      this.props.className
    )
  }

  get _imageClasses () {
    return cx(
      ImagePlaceholder.IMAGE_CLASS,
      this.state.imageLoaded || `${ImagePlaceholder.IMAGE_CLASS}--hidden`
    )
  }

  render () {
    return (
      <div className={this._classNames}>
        <img className={this._imageClasses}
          onLoad={() => this.onLoad()}
          onError={() => this.onError()}
          {...this.state.image}
        />
        {
          this.state.imageLoaded || this.props.placeholder
        }
      </div>
    )
  }
}

ImagePlaceholder.displayName = 'ImagePlaceholder'

ImagePlaceholder.propTypes = {
  className: PropTypes.string,
  /**
   * Image to be loaded
   */
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  /**
   * to be shown until 'image' is loaded
   */
  placeholder: PropTypes.node,
  /**
   * Image to be loaded in case 'image' does not load
   */
  fallbackImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
}

export default ImagePlaceholder
