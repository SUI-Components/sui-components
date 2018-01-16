import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ImagePlaceholder from '@schibstedspain/sui-image-placeholder'

class ImagePicker extends Component {
  constructor (props) {
    super()

    const { images } = props
    let filteredImages = []
    let selected = -1

    if (images.length > 0) {
      filteredImages = images.map(image => {
        if (typeof image.src !== 'undefined' && typeof image.thumb !== 'undefined') { return image }
        return false
      }).filter(image => image !== false)

      if (filteredImages.length > 0) {
        selected = filteredImages.findIndex(image => image.selected === true)
        selected = (selected === -1) ? 0 : selected
      }
    }

    this.state = {
      selected,
      images: filteredImages
    }
  }

  _getHeadImage () {
    const { images, selected } = this.state
    const { emptyImage } = this.props

    const placeHolder = {
      alt: 'Placeholder',
      src: emptyImage
    }

    const src = (images.length === 0) ? emptyImage : images[selected].src
    const alt = (images.length === 0) ? 'No text available' : images[selected].alt

    return (
      <div className='sui-ImagePicker-image--vcenter'>
        <div className='sui-ImagePicker-image--hcenter'>
          <ImagePlaceholder src={src} alt={alt} placeholder={placeHolder} />
        </div>
      </div>
    )
  }

  _getListImages () {
    const { images, selected } = this.state

    const imageList = images.map((image, index) => {
      const itemClass = cx('sui-ImagePicker-thumbItem', {
        'sui-ImagePicker-thumbItem--selected': index === selected
      })
      return (
        <div className={itemClass} key={image.src} onClick={() => this._handleClick(image)}>
          <img src={image.thumb} alt={image.alt} title={image.title} />
        </div>
      )
    })
    return (<ul className='sui-ImagePicker-imageList'>{imageList}</ul>)
  }

  _handleClick (clickedImage) {
    const { images } = this.state
    const { onClick } = this.props

    const selected = images.findIndex(image => image.src === clickedImage.src)
    this.setState({ selected })
    onClick(clickedImage)
  }

  _buttonAction = (callback) => {
    const { images, selected } = this.state
    if (images.length === 0 || selected === -1) { return }
    callback(images[selected])
  }

  _displayActions (actions) {
    const actionList = actions.map((action, index) => {
      return <div className='sui-ImagePicker-action' key={index} onClick={() => this._buttonAction(action.callback)}>{action.node}</div>
    })
    return <div className='sui-ImagePicker-actions'>{actionList}</div>
  }

  render () {
    const { actions } = this.props
    const { images } = this.state

    const headImage = this._getHeadImage()
    const listImages = this._getListImages()

    return (
      <div className='sui-ImagePicker'>
        <div>
          <div className='sui-ImagePicker-headImage'>{headImage}</div>
          {actions.length > 0 && this._displayActions(actions)}
        </div>
        {images.length > 0 && <div className='sui-ImagePicker-list'>{listImages}</div>}
      </div>
    )
  }
}

ImagePicker.displayName = 'ImagePicker'

ImagePicker.propTypes = {
  /**
   * Array with React components (or nodes) with the different actions to be done
   */
  actions: PropTypes.array,

  /**
   * Image that will be displayed when there is no image in the array of images
   */
  emptyImage: PropTypes.node.isRequired,

  /**
   * Array of images to be displayed and picked
   */
  images: PropTypes.array,

  /**
   * Callback to the parent that will be called every time a thumb is clicked.
   */
  onClick: PropTypes.func
}

ImagePicker.defaultProps = {
  actions: [],
  images: [],
  onClick: () => {}
}

export default ImagePicker
