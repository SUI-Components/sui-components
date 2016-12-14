/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react'
import cx from 'classnames'

/**
 * Basic card containing a media object, an optional title and a description
 * text.
 */
export default function CardBasic (props) {
  const {
    link,
    media,
    title,
    description,
    size
  } = props
  const Link = props.linkFactory
  const { src, alt } = media
  const cardBasicClassName = cx(
    'sui-CardBasic',
    { [`sui-CardBasic--${size}`]: typeof size !== 'undefined' }
  )

  return (
    <div className={cardBasicClassName}>
      <Link href={link} className='sui-CardBasic-link'>
        <div className='sui-CardBasic-media'>
          <img src={src} alt={alt} />
        </div>
        <div className='sui-CardBasic-content'>
          {title &&
            <header className='sui-CardBasic-title'>{title}</header>
          }
          <div className='sui-CardBasic-description'>{description}</div>
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
   * Text description.
   */
  description: PropTypes.string.isRequired,
  /**
   * Card size.
   */
  size: PropTypes.oneOf(['small'])
}

CardBasic.defaultProps = {
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}

CardBasic.displayName = 'CardBasic'
