import React from 'react'
import PropTypes from 'prop-types'
import ThumbnailBasic from '@schibstedspain/sui-thumbnail-basic'

const ThumbnailList = ({items, captionText, placeholder}) =>
  <ul className='sui-ThumbnailList'>
    {
      items.map((item, index) =>
        <li className='sui-ThumbnailList-item' key={index}>
          <ThumbnailBasic
            image={item.image}
            link={item.link}
            fallbackImage={item.fallbackImage}
            captionText={captionText}
            placeholder={placeholder}
          />
        </li>
      )
    }
  </ul>

ThumbnailList.displayName = 'ThumbnailList'

ThumbnailList.propTypes = {
  /**
   * array of thumbnail/basic images
   */
  items: PropTypes.any.isRequired,
  /**
   * see thumbnail/basic for description
   */
  captionText: PropTypes.string.isRequired,
  /**
   * see thumbnail/basic for description
   */
  placeholder: PropTypes.node.isRequired
}

ThumbnailList.defaultProps = {
  items: []
}

export default ThumbnailList
