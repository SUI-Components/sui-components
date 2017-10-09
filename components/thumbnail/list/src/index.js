import React from 'react'
import PropTypes from 'prop-types'
import ThumbnailBasic from '@schibstedspain/sui-thumbnail-basic'

const ThumbnailList = ({items}) =>
  <ul className='sui-ThumbnailList'>
    {
      items.map((item, index) =>
        <li className='sui-ThumbnailList-item'>
          <ThumbnailBasic
            key={index}
            image={{
              src: item.image.src,
              alt: item.image.alt
            }}
            captionText={item.captionText}
          />
        </li>
      )
    }
  </ul>

ThumbnailList.displayName = 'ThumbnailList'

ThumbnailList.propTypes = {
  items: PropTypes.shape({
    captionText: PropTypes.string.isRequired,
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }),
    link: PropTypes.string
  })
}

ThumbnailList.defaultProps = {
  items: []
}

export default ThumbnailList
