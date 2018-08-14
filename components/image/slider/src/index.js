import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import cloneDeep from 'lodash.clonedeep'
import cx from 'classnames'
import IconCamera from '@schibstedspain/sui-svgiconset/lib/Camera'

export const IMAGE_SLIDER_COUNTER_POSITIONS = {
  BOTTOM_CENTER: 'bottomCenter',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
}
const NO_OP = () => {}
const TARGET_BLANK = '_blank'

class ImageSlider extends Component {
  constructor(props) {
    super(props)
    const {sliderOptions} = props
    // In order to accept a custom doAfterSlide callback, and to avoid altering props.sliderOptions
    // sliderOptions is deeply cloned.
    this._sliderOptions = cloneDeep(sliderOptions)
    this._sliderOptions.doAfterSlide = currentSlide => {
      this.setState(currentSlide)
      sliderOptions.doAfterSlide && sliderOptions.doAfterSlide(currentSlide)
    }

    this.state = {currentSlide: this._sliderOptions.initialSlide || 0}
  }

  render() {
    const {
      dynamicContent,
      enableCounter,
      handleClick,
      images,
      linkFactory
    } = this.props

    const slides = this._getSlides(images, linkFactory)

    return (
      slides.length > 0 && (
        <div onClick={handleClick} className="sui-ImageSlider">
          {slides.length > 1 ? (
            <ReactSlidy
              {...this._sliderOptions}
              dynamicContent={dynamicContent}
            >
              {slides}
            </ReactSlidy>
          ) : (
            slides
          )}
          {enableCounter && this._buildCounter(slides.length)}
        </div>
      )
    )
  }

  _buildCounter(totalImages) {
    const classNames = cx(
      'sui-ImageSlider-counter',
      `sui-ImageSlider-counter--${this.props.counterPosition}`
    )
    const Icon = this.props.counterIcon
    return (
      <div className={classNames}>
        <Icon svgClass="sui-ImageSlider-counterIcon" />
        <span className="sui-ImageSlider-counterText">
          {this.props.counterPatternFactory({
            current: this.state.currentSlide + 1,
            total: totalImages
          })}
        </span>
      </div>
    )
  }

  /**
   * @param {Array} images List given by props.images.
   * @return {Array} List of img elements.
   */
  _getSlides(images, linkFactory) {
    if (images && images.length) {
      return images.map((image, index) => {
        const {
          key: imageKey,
          alt,
          link,
          src,
          target = TARGET_BLANK,
          title
        } = image

        const key = imageKey ? imageKey + index : index
        const img = (
          <img
            alt={alt}
            className="sui-ImageSlider-image"
            key={key}
            src={src}
            title={title}
          />
        )
        return link
          ? linkFactory({
              key,
              target,
              className: '',
              children: img,
              href: link
            })
          : img
      })
    } else {
      return []
    }
  }
}

ImageSlider.propTypes = {
  dynamicContent: PropTypes.bool,
  /**
   * List of objects with src and alt properties.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      /**
       * When dynamicContent is set to true, you need to set this key with a unique value for all the groups of images.
       * When dynamicContent is set to false, you can ommit this field.
       * @see dynamicContent code comment for more info.
       */
      key: PropTypes.string,
      link: PropTypes.string,
      target: PropTypes.string
    }).isRequired
  ),
  /**
   * Callback executed when clicking over the slider.
   */
  handleClick: PropTypes.func,
  /**
   * Custom configuration options to pass to react-slidy component.
   */
  sliderOptions: PropTypes.shape({
    lazyLoadSlider: PropTypes.bool,
    initialSlide: PropTypes.number
  }),
  linkFactory: PropTypes.func,
  /**
   * Wheter or not display image counter.
   */
  enableCounter: PropTypes.bool,
  /**
   * Counter position.
   */
  counterPosition: PropTypes.oneOf(
    Object.values(IMAGE_SLIDER_COUNTER_POSITIONS)
  ),
  /**
   * Custom icon for counter
   */
  counterIcon: PropTypes.func,
  /**
   * Counter text factory that receives an object like {current, total} and returns a string/node.
   */
  counterPatternFactory: PropTypes.func
}

ImageSlider.defaultProps = {
  images: [],
  /**
   * This function will receive the onClick arguments
   */
  handleClick: NO_OP,
  /**
   * If not set, react-slidy will be created with its default properties.
   */
  sliderOptions: {},
  /**
   * Whether to enable react-slidy to receive new props and change its content or not.
   * If you want to set it to true, you also need to set a unique key for every image given over component updates.
   * It means that if the initial images has keys a and b, when you want to update the component with new content,
   * new images should have keys c and d... never a or b. Otherwise, images with the same key will not be updated.
   */
  dynamicContent: false,
  /**
   * Link component factory.
   */
  linkFactory: ({href, target, className, children, key} = {}) => (
    <a href={href} target={target} className={className} key={key}>
      {children}
    </a>
  ),
  enableCounter: false,
  counterPosition: IMAGE_SLIDER_COUNTER_POSITIONS.BOTTOM_RIGHT,
  counterIcon: IconCamera,
  counterPatternFactory: ({current, total}) => `${current}/${total}`
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
