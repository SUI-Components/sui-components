/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'
import CardProductSlider from './card-product-slider'
import Star from '@schibstedspain/sui-svgiconset/lib/Star'
import TagChip from '@schibstedspain/sui-tag-chip'

/**
 * Product card containing a slider of images, title, description and some
 * additional information (extras, attributes...).
 */
class CardProduct extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      mediaHeight: 0,
      tagsHeight: 0,
      tagsPosition: '',
      dateHeight: 0,
      datePosition: ''
    }
    this._mediaNode = null
    this._tagsNode = null
    this._dateNode = null
  }

  componentDidMount () {
    this._setNodesStyles()
    window.addEventListener('resize', this._setNodesStyles)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._setNodesStyles)
  }

  _setNodesStyles = () => {
    this.setState({
      mediaHeight: this._mediaNode.getBoundingClientRect().height,
      tagsHeight: this._tagsNode.getBoundingClientRect().height,
      tagsPosition: window.getComputedStyle(this._tagsNode).position,
      dateHeight: this._dateNode.getBoundingClientRect().height,
      datePosition: window.getComputedStyle(this._dateNode).position
    })
  }

  render () {
    const {
      url,
      images,
      iconPrev,
      iconNext,
      title,
      description,
      date,
      highlighted,
      tags,
      attributes,
      favorited,
      favoriteIcon: FavoriteIcon,
      handleFavorite,
      linkFactory: Link
    } = this.props
    const {
      mediaHeight,
      tagsHeight,
      tagsPosition,
      dateHeight,
      datePosition
    } = this.state
    const cardProductTagsStyle = {
      top: tagsPosition === 'absolute'
        ? mediaHeight - tagsHeight
        : 'inherit'
    }
    const cardProductDateStyle = {
      top: datePosition === 'absolute'
        ? -(dateHeight / 2)
        : 'inherit'
    }
    const cardProductClassName = cx('sui-CardProduct', {
      'is-highlighted': highlighted
    })
    const favoriteIconClassName = cx('sui-CardProduct-favoriteIcon', {
      'is-favorited': favorited
    })
    const _onFavoriteClick = event => {
      event.preventDefault()
      handleFavorite()
    }

    return (
      <Link href={url} className={cardProductClassName}>
        <div
          ref={node => { this._mediaNode = node }}
          className='sui-CardProduct-media'
        >
          <CardProductSlider
            images={images}
            iconPrev={iconPrev}
            iconNext={iconNext}
          />
        </div>
        <div className='sui-CardProduct-content'>
          <div className='sui-CardProduct-header'>
            <div className='sui-CardProduct-titleWrap'>
              <div className='sui-CardProduct-title'>{title}</div>
              <div
                ref={node => { this._tagsNode = node }}
                style={cardProductTagsStyle}
                className='sui-CardProduct-tags'
              >
                {tags.map((tag, index) => <TagChip key={index} label={tag} />)}
              </div>
            </div>
            <div onClick={_onFavoriteClick} className='sui-CardProduct-favorite'>
              <FavoriteIcon svgClass={favoriteIconClassName} />
            </div>
          </div>
          <div className='sui-CardProduct-description'>{description}</div>
          {attributes &&
            <ul className='sui-CardProduct-attributes'>
              {attributes.map((attribute, index) =>
                <li key={index} className='sui-CardProduct-attributesItem'>{attribute}</li>
              )}
            </ul>
          }
          <div
            ref={node => { this._dateNode = node }}
            style={cardProductDateStyle}
            className='sui-CardProduct-date'
          >
            <TagChip label={date} />
          </div>
        </div>
      </Link>
    )
  }
}

CardProduct.displayName = 'CardProduct'

CardProduct.propTypes = {
  /**
   * URL for the link that wraps the whole card.
   */
  url: PropTypes.string.isRequired,
  /**
   * Array of images for the slider.
   */
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Icon (component) for the prev button.
   */
  iconPrev: PropTypes.func,
  /**
   * Icon (component) for the next button.
   */
  iconNext: PropTypes.func,
  /**
   * Product title.
   */
  title: PropTypes.string.isRequired,
  /**
   * Product description.
   */
  description: PropTypes.string.isRequired,
  /**
   * Product date (usually last updated or publishing date).
   */
  date: PropTypes.string.isRequired,
  /**
   * Highlighted flag.
   */
  highlighted: PropTypes.bool,
  /**
   * Product tags.
   */
  tags: PropTypes.arrayOf(PropTypes.string),
  /**
   * Product attributes (more info added to the product description).
   */
  attributes: PropTypes.arrayOf(PropTypes.string),
  /**
   * Favorited flag.
   */
  favorited: PropTypes.bool,
  /**
   * Icon (component) for the favorite button.
   */
  favoriteIcon: PropTypes.func,
  /**
   * On favorite click handler.
   */
  handleFavorite: PropTypes.func,
  /**
   * Factory for the card links.
   */
  linkFactory: PropTypes.func
}

CardProduct.defaultProps = {
  favoriteIcon: Star,
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}

export default CardProduct
