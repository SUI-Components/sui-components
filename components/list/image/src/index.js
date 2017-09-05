import React, {PropTypes} from 'react'
import SuiLazyLoadImage from '@schibstedspain/sui-image-lazy-load'
import cx from 'classnames'

const ensureFunction = (func) => {
  return func instanceof Function ? func : () => {
  }
}

/**
 * Render a simple sui-image-lazy-load component.
 * @param image {Object} src, alt and onClick callback configuration of the image to display.
 */
const renderSuiLazyloadImage = (image) => (
  <SuiLazyLoadImage
    debounce={false}
    offsetVertical={100}
    src={image.src}
    alt={image.alt}
    showSpinner
    aspectRatio='1:1' />
)

/**
 * Creates a simple list item containing a regular image with the configuration provided.
 * @param image {Object} src, alt and onClick callback configuration of the image to display.
 * @param index {Number} Order index of the li element to create.
 */
const renderImageItem = (image, index) => (
  image && <li className='sui-ListImage-item' key={index} onClick={ensureFunction(image.onClick)}>
    {renderSuiLazyloadImage(image)}
  </li>
)

/**
 * Creates an special list item, which has a regular image and an additional cover box over it (lack 65% opacity
 * background) with a customisable message and onClick event callback.
 * The HTML structure of this list-item is slightly differnet that the regular Image Item.
 * @param image {Object} src, alt and onClick callback configuration of the image to display.
 * @param index {Number} Order index of the li element to create.
 * @param showMoreItemsBox {Obhect} Text and onClick callback configuration for the list-item to be created.
 */
const renderImageWithMoreItemsBox = (image, index, showMoreItemsBox) => (
  image && <li className='sui-ListImage-item' key={index} onClick={ensureFunction(showMoreItemsBox.onClick)}>
    <div className='sui-ListImage-lastItemContainer'>
      {renderSuiLazyloadImage(image)}
      <div className='sui-ListImage-moreItemsBox'>
        {showMoreItemsBox.label && <span>{showMoreItemsBox.label}</span>}
      </div>
    </div>
  </li>
)

const ListImage = ({className, images, maxItems, showMoreItemsBox}) => (
  <ul className={cx('sui-ListImage', className)}>
    {images.slice(0, maxItems - 1).map(renderImageItem)}
    {images.length > maxItems && !!showMoreItemsBox ? renderImageWithMoreItemsBox(images[maxItems - 1], maxItems - 1, showMoreItemsBox) : renderImageItem(images[maxItems - 1], maxItems - 1)}
  </ul>
)

ListImage.displayName = 'ListImage'

ListImage.propTypes = {
  /**
   * CSS classname to apply to ListImage container.
   */
  className: PropTypes.string,
  /**
   * Array of images to show in ListImage component. It allows an src and alt for image element, and
   * a custom function as callback when onClick event is triggered.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      onClick: PropTypes.func
    })
  ).isRequired,
  /**
   * Max number of items to show in ListImage.
   */
  maxItems: PropTypes.number,
  /**
   * When showMoreItemsBox is set and the length of "images" prop is greater than "maxItems" prop value, the last item of the list
   * is displayed with an extra cover where the text label and onClick action can be customised.
   */
  showMoreItemsBox: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  })
}

ListImage.defaultProps = {
  maxItems: 6
}

export default ListImage
