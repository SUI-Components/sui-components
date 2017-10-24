import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImagePlaceholder from '@schibstedspain/sui-image-placeholder'

class ThumbnailBasic extends Component {
  static BASE_CLASS = 'sui-ThumbnailBasic'
  static IMAGE_CLASS = 'sui-ThumbnailBasic-image'
  static CAPTION_CLASS = 'sui-ThumbnailBasic-caption'
  static CAPTION_TEXT_CLASS = 'sui-ThumbnailBasic-caption-text'

  get _imagePlaceholderProps () {
    const props = Object.assign(
      {},
      this.props
    )

    delete props.captionText
    delete props.link
    delete props.target
    delete props.href
    return props
  }

  get _figure () {
    const {captionText} = this.props
    return (
      <figure className={ThumbnailBasic.BASE_CLASS}>
        <ImagePlaceholder
          {...this._imagePlaceholderProps}
        />
        {
          captionText &&
            <figcaption className={ThumbnailBasic.CAPTION_CLASS}>
              <div className={ThumbnailBasic.CAPTION_TEXT_CLASS}>
                {captionText}
              </div>
            </figcaption>
        }
      </figure>
    )
  }

  render () {
    const {href, target} = this.props

    return href ? (
      <a href={href} target={target}>
        {this._figure}
      </a>
    )
    : this._figure
  }
}

ThumbnailBasic.displayName = 'ThumbnailBasic'

ThumbnailBasic.propTypes = {
  /**
   * Image source
   */
  src: PropTypes.string.isRequired,
  /**
   * Image alt
   */
  alt: PropTypes.string.isRequired,
  /**
   * Text shown at the buttom of the component
   */
  captionText: PropTypes.string,
  /**
   * Node to be shown until the image loads
   */
  placeholder: PropTypes.node,
  /**
   * Node to be shown if the image fails loading
   */
  fallback: PropTypes.node,
  /**
   * Anchor link
   */
  href: PropTypes.string,
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   */
  target: PropTypes.oneOf('_self', '_blank', '_parent', '_top')
}

ThumbnailBasic.defaultProps = {
  target: '_blank'
}

export default ThumbnailBasic
