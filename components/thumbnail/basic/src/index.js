import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'

const ThumbnailBasic = function({href, target, ...thumbnailProps}) {
  return href ? (
    <a href={href} target={target}>
      <Thumbnail {...thumbnailProps} />
    </a>
  ) : (
    <Thumbnail {...thumbnailProps} />
  )
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
   * Img props to be shown until the image loads
   */
  placeholder: PropTypes.object,
  /**
   * Img props to be shown if the image fails loading
   */
  fallback: PropTypes.object,
  /**
   * Anchor link
   */
  href: PropTypes.string,
  /**
   * https://www.w3.org/wiki/HTML/Elements/a
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
}

ThumbnailBasic.defaultProps = {
  target: '_blank'
}

export default ThumbnailBasic
