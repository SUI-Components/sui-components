import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ImagePlaceholder from '@schibstedspain/sui-image-placeholder'

class ImagePicker extends Component {
  constructor(props) {
    super(props)

    const {defaultAlt, emptyImage, images, selected} = props

    let selectedImage = -1
    if (images.length !== 0) {
      selectedImage = images[selected] ? selected : 0
    }

    this.state = {
      images,
      selected: selectedImage
    }

    this.placeHolder = {
      alt: defaultAlt,
      src: emptyImage
    }
  }

  _getHeadImage() {
    const {images, selected} = this.state
    const {defaultAlt, emptyImage} = this.props

    const src = selected === -1 ? emptyImage : images[selected].src
    const alt = selected === -1 ? defaultAlt : images[selected].alt

    return (
      <ImagePlaceholder src={src} alt={alt} placeholder={this.placeHolder} />
    )
  }

  _getListImages() {
    const {images, selected} = this.state

    const imageList = images.map((image, index) => {
      const itemClass = cx('sui-ImagePicker-thumbItem', {
        'sui-ImagePicker-thumbItem--selected': index === selected
      })
      return (
        <li
          className={itemClass}
          key={image.src}
          onClick={() => this._handleClick(image)}
        >
          <img src={image.thumb} alt={image.alt} title={image.alt} />
        </li>
      )
    })
    return imageList
  }

  _handleClick(clickedImage) {
    const {images} = this.state
    const {onClick} = this.props

    const selected = images.findIndex(image => image.src === clickedImage.src)
    this.setState({selected})
    onClick(clickedImage)
  }

  _buttonAction = callback => {
    const {images, selected} = this.state
    if (selected === -1) {
      return
    }
    callback(images[selected])
  }

  _displayActions(actions) {
    const actionList = actions.map((action, index) => {
      return (
        <div
          className="sui-ImagePicker-action"
          key={index}
          onClick={() => this._buttonAction(action.callback)}
        >
          {action.node}
        </div>
      )
    })
    return <div className="sui-ImagePicker-actions">{actionList}</div>
  }

  render() {
    const {actions} = this.props
    const {images} = this.state

    return (
      <div className="sui-ImagePicker">
        <div>
          <div className="sui-ImagePicker-headImage">
            {this._getHeadImage()}
          </div>
          {actions.length > 0 && this._displayActions(actions)}
        </div>
        {images.length > 0 && (
          <ul className="sui-ImagePicker-thumbList">{this._getListImages()}</ul>
        )}
      </div>
    )
  }
}

ImagePicker.displayName = 'ImagePicker'

ImagePicker.propTypes = {
  /**
   * Array with React components (or nodes) with the different actions to be done
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Action callback
       */
      callback: PropTypes.func.isRequired,
      /**
       * React node to be displayed
       */
      node: PropTypes.node.isRequired
    })
  ),

  /**
   * String that must be displayed in the ALT when there's no image to display
   */
  defaultAlt: PropTypes.string.isRequired,

  /**
   * Image that will be displayed when there is no image in the array of images
   */
  emptyImage: PropTypes.node.isRequired,

  /**
   * Array of images to be displayed and picked
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * ALT text
       */
      alt: PropTypes.string.isRequired,
      /**
       * Url with the image to be displayed. This image must be pre-resized to fit.
       */
      src: PropTypes.string.isRequired,
      /**
       * Url with the thumbnail
       */
      thumb: PropTypes.string.isRequired
    })
  ),

  /**
   * Callback to the parent that will be called every time a thumb is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Index of the image that must be display upon the rendering
   */
  selected: PropTypes.number
}

ImagePicker.defaultProps = {
  actions: [],
  images: [],
  onClick: () => {},
  selected: -1
}

export default ImagePicker
