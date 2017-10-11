import React from 'react'
import PropTypes from 'prop-types'
import ThumbnailBasic from '@schibstedspain/sui-thumbnail-basic'

const ThumbnailList = ({items, captionText}) =>
  <ul className='sui-ThumbnailList'>
    {
      items.map((item, index) =>
        <li className='sui-ThumbnailList-item' key={index}>
          <ThumbnailBasic
            image={item.image}
            link={item.link}
            captionText={captionText}
          />
        </li>
      )
    }
  </ul>

ThumbnailList.displayName = 'ThumbnailList'

ThumbnailList.propTypes = {
  captionText: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
      }),
      link: PropTypes.string
    })
  )
}

ThumbnailList.defaultProps = {
  items: []
}

export default ThumbnailList
