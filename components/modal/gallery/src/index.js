import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SuiModal from '@schibstedspain/sui-modal-basic'
import ImageSlider from '@schibstedspain/sui-image-slider'

const NO_OP = () => {}

const DEFAULT_COUNTER_TEXT_FORMATTER = (current, total) => `${current} / ${total}`

class ModalGallery extends Component {
  state = {
    currentSlide: this.props.initialSlide
  }

  componentWillReceiveProps ({shouldRenderModal, initialSlide = 0}) {
    if (shouldRenderModal) {
      this.setState({currentSlide: initialSlide})
    }
  }

  _renderHeader (options) {
    const {iconImages: IconImages, counterTextFormatter} = this.props
    const {images: {currentSlide, totalSlides}} = options

    return (
      <div className='sui-ModalGallery-header'>
        <div className='sui-ModalGallery-imageCounter'>
          {IconImages && <IconImages className='sui-ModalGallery-iconImages' />}
          <span className='sui-ModalGallery-counterText'>{counterTextFormatter(currentSlide, totalSlides)}</span>
        </div>
      </div>
    )
  }

  _renderImageSlider (options) {
    return (
      <div className='sui-ModalGallery-content'>
        <div className='sui-ModalGallery-slider'>
          <ImageSlider {...options} />
        </div>
      </div>
    )
  }

  _onSlideChange = (currentSlide) => {
    this.setState(currentSlide)
  }

  render () {
    const {currentSlide} = this.state
    const {initialSlide, lazyLoadSlider, multimedia, iconClose, onClose, shouldRenderModal} = this.props

    return shouldRenderModal && (
      <div className='sui-ModalGallery'>
        <SuiModal
          open
          centerVertically
          closeOnOutsideClick
          fitWindow
          iconClose={iconClose}
          onClose={onClose}
          header={this._renderHeader({images: {currentSlide: currentSlide + 1, totalSlides: multimedia.images.length}})}
          content={this._renderImageSlider({...multimedia, sliderOptions: {lazyLoadSlider, initialSlide, doAfterSlide: this._onSlideChange}})}
        />
      </div>
    )
  }
}

ModalGallery.displayName = 'ModalGallery'

ModalGallery.propTypes = {
  /**
   * Initial slide to show when creating the gallery image slider.
   */
  initialSlide: PropTypes.number,
  /**
   * Allow configuration of lazyLoad options from gallery image slider.
   */
  lazyLoadSlider: PropTypes.bool,
  /**
   * Collection of images to show in the slider gallery inside modal.
   */
  multimedia: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    }))
  }),
  /**
   * Custom close icon [X] to display in modal's header.
   */
  iconClose: PropTypes.func,
  /**
   * Custom image icon to display in images (photos) counter on modal's header.
   */
  iconImages: PropTypes.func,
  /**
   * Helper external function to format image counter message (it receives counter and ).
   */
  counterTextFormatter: PropTypes.func,
  /**
   * Callback to execute when the modal is closed.
   */
  onClose: PropTypes.func,
  /**
   * Flag to avoid rendering modal gallery component (e.g. when it is closed).
   */
  shouldRenderModal: PropTypes.bool
}

ModalGallery.defaultProps = {
  multimedia: {
    images: []
  },
  shouldRenderModal: false,
  lazyLoadSlider: false,
  initialSlide: 0,
  onClose: NO_OP,
  counterTextFormatter: DEFAULT_COUNTER_TEXT_FORMATTER
}

export default ModalGallery
