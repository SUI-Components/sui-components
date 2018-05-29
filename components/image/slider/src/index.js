import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import cloneDeep from 'lodash.clonedeep'
import cx from 'classnames'
import IconCamera from '@schibstedspain/sui-svgiconset/lib/Camera'

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
  }

  state = {currentSlide: 0}

  render() {
    const {
      images,
      linkFactory,
      handleClick,
      dynamicContent,
      enableCounter
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
        const key = image.key ? image.key + index : index
        const img = (
          <img
            className="sui-ImageSlider-image"
            key={key}
            src={image.src}
            alt={image.alt}
          />
        )
        const target = image.target ? image.target : TARGET_BLANK
        return image.link
          ? linkFactory({
              href: image.link,
              target: target,
              className: '',
              children: img,
              key: key
            })
          : img
      })
    } else {
      return []
    }
  }
}

const COUNTER_POS_BOTTOM_LEFT = 'bottomLeft'
const COUNTER_POS_BOTTOM_RIGHT = 'bottomRight'

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
  counterPosition: PropTypes.oneOf([
    COUNTER_POS_BOTTOM_LEFT,
    COUNTER_POS_BOTTOM_RIGHT
  ]),
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
  counterPosition: COUNTER_POS_BOTTOM_RIGHT,
  counterIcon: IconCamera,
  counterPatternFactory: ({current, total}) => `${current}/${total}`
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
