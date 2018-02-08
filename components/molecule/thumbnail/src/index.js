import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImagePlaceholder from '@schibstedspain/sui-image-placeholder'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeThumbnail'
const CAPTION_CLASS = `${BASE_CLASS}-caption`

const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
}

const RATIOS = {
  '1:1': '1-1',
  '4:3': '4-3',
  '16:9': '16-9'
}

const SHAPES = {
  SQUARED: 'squared',
  CIRCLED: 'circled'
}

class MoleculeThumbnail extends Component {
  _renderFigure () {
    return (
      <figure className={
        cx(
          `${BASE_CLASS}`,
          `${BASE_CLASS}--${this.props.size}`,
          `${BASE_CLASS}--${this.props.ratio}`,
          `${BASE_CLASS}--${this.props.shape}`
        )}>
        <ImagePlaceholder
          {...this.props}
        />
        {
          this.props.captionText &&
            <figcaption className={CAPTION_CLASS}>
              {this.props.captionText}
            </figcaption>
        }
      </figure>
    )
  }
  render () {
    return this.props.href
      ? (
        <a href={this.props.href} target={this.props.target}>
          {this._renderFigure()}
        </a>
      )
      : this._renderFigure()
  }
}

MoleculeThumbnail.displayName = 'MoleculeThumbnail'

MoleculeThumbnail.propTypes = {
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
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /**
   * Define the size (LARGE, MEDIUM, SMALL or XSMALL)
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Define the shape (SQUARED or CIRCLED)
   */
  shape: PropTypes.oneOf(Object.values(SHAPES)),
  /**
   * Define the ratio ('1:1', '4:3', '16:9')
   */
  ratio: PropTypes.oneOf(Object.values(RATIOS))
}

MoleculeThumbnail.defaultProps = {
  target: '_blank',
  size: SIZES.MEDIUM,
  shape: SHAPES.SQUARED,
  ratio: RATIOS['1:1']
}

export default MoleculeThumbnail

export {
  SIZES as moleculeThumbnailSize,
  RATIOS as moleculeThumbnailRatio,
  SHAPES as moleculeThumbnailShape
}
