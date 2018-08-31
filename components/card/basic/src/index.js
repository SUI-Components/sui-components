/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React from 'react'
import cx from 'classnames'
import ImageLazyLoad from '@schibstedspain/sui-image-lazy-load'

const CardBasicMedia = ({src, alt = ''}) => (
  <div className="sui-CardBasic-media">
    <img src={src} alt={alt} />
  </div>
)

/**
 * Basic card containing a media object, an optional title and a description
 * text.
 */
export default function CardBasic({
  link,
  linkFactory: Link,
  media,
  title,
  titleStyle,
  description,
  button,
  lazyLoad
}) {
  const cardBasicTitleClassName = cx('sui-CardBasic-title', {
    [`sui-CardBasic-title--${titleStyle}`]: titleStyle
  })

  return (
    <div className="sui-CardBasic">
      <Link href={link} className="sui-CardBasic-link">
        {lazyLoad ? (
          <ImageLazyLoad {...lazyLoad} {...media} />
        ) : (
          <CardBasicMedia {...media} />
        )}
        <div className="sui-CardBasic-content">
          {title && (
            <header className={cardBasicTitleClassName}>{title}</header>
          )}
          <div className="sui-CardBasic-description">{description}</div>

          {button && <div className="sui-CardBasic-action">{button}</div>}
        </div>
      </Link>
    </div>
  )
}

CardBasic.propTypes = {
  /**
   * URL for the link that wraps the whole card.
   */
  link: PropTypes.string.isRequired,
  /**
   * Factory for the component that will hold the card link.
   */
  linkFactory: PropTypes.func,
  /**
   * Media object (now only image).
   */
  media: PropTypes.shape({
    /**
     * Alternative text for the image.
     */
    alt: PropTypes.string,
    /**
     * Image source.
     */
    src: PropTypes.string.isRequired
  }),
  /**
   * Optional card title.
   */
  title: PropTypes.string,
  /**
   * Optional card title style.
   */
  titleStyle: PropTypes.oneOf(['primary']),
  /**
   * Text description.
   */
  description: PropTypes.string.isRequired,
  /**
   * Lazy load flag / config.
   */
  lazyLoad: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * Button for actions
   */
  button: PropTypes.node
}

CardBasic.defaultProps = {
  linkFactory: ({href, className, children}) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
  lazyLoad: false
}

CardBasic.displayName = 'CardBasic'
