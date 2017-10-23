import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class ImagePlaceholder extends Component {
  static IMAGE_CLASS = 'sui-ImagePlaceholder-image'

  state = {
    imageLoaded: false,
    error: false
  }

  onLoad = () => {
    this.setState({imageLoaded: true})
    this.props.onLoad && this.props.onLoad()
  }

  onError = () => {
    this.setState({
      imageLoaded: false,
      error: true
    })

    this.props.onError && this.props.onError()
  }

  /**
   * Clones a component updating its props
   * @param {Object} component
   * @return {Object}
   */
  _clone (component) {
    const props = Object.assign(
      {},
      component.props,
      {
        className: `${this._imageClasses} ${component.props.className}`,
        onLoad: this.onLoad,
        onError: this.onError
      }
    )

    return React.cloneElement(component, props)
  }

  get _classNames () {
    return classnames(
      'sui-ImagePlaceholder',
      this.props.className
    )
  }

  get _imageClasses () {
    return classnames(
      ImagePlaceholder.IMAGE_CLASS,
      this.state.imageLoaded || `${ImagePlaceholder.IMAGE_CLASS}--hidden`
    )
  }

  get _imageProps () {
    let props = Object.assign(
      {},
      this.props
    )

    delete props.fallback
    delete props.placeholder
    delete props.className

    return props
  }

  /**
   * In case the src could not be loaded, we need to add the placeholder classes to the
   * fallback. As those props are readonly, we clone the component setting the before
   * mentioned classes
   */
  render () {
    return (
      <div className={this._classNames}>
        {
          this.state.error
            ? this.props.fallback && this._clone(this.props.fallback)
            : (
              <img className={this._imageClasses}
                onLoad={() => this.onLoad()}
                onError={() => this.onError()}
                {...this._imageProps}
              />
            )
        }
        {
          this.state.imageLoaded || this.props.placeholder
        }
      </div>
    )
  }
}

ImagePlaceholder.displayName = 'ImagePlaceholder'

/**
 * Most props are the <img> props, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 */
ImagePlaceholder.propTypes = {
  className: PropTypes.string,
  /**
   * To be shown until 'image' is loaded
   */
  placeholder: PropTypes.node,
  /**
   * Image to be loaded in case 'image' does not load
   */
  fallback: PropTypes.node,
  /**
   * <img> property
   */
  src: PropTypes.string.isRequired,
  /**
   * <img> property
   */
  alt: PropTypes.string.isRequired,
  /**
   * <img> property
   */
  onLoad: PropTypes.func,
  /**
   * <img> property
   */
  onError: PropTypes.func,
  /**
   * <img> property
   */
  crossorigin: PropTypes.string,
  /**
   * <img> property
   */
  height: PropTypes.string,
  /**
   * <img> property
   */
  ismap: PropTypes.bool,
  /**
   * <img> property
   */
  longdesc: PropTypes.string,
  /**
   * <img> property
   */
  referrerpolicy: PropTypes.string,
  /**
   * <img> property
   */
  sizes: PropTypes.string,
  /**
   * <img> property
   */
  srcset: PropTypes.string,
  /**
   * <img> property
   */
  width: PropTypes.string,
  /**
   * <img> property
   */
  usemap: PropTypes.string
}

export default ImagePlaceholder
