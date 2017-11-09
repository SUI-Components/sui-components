import React from 'react'
import PropTypes from 'prop-types'
import ThumbnailBasic from '@schibstedspain/sui-thumbnail-basic'

const ThumbnailList = ({items, captionText, placeholder, fallback}) =>
  <ul className='sui-ThumbnailList'>
    {
      items.map((item, index) =>
        <li className='sui-ThumbnailList-item' key={index}>
          <ThumbnailBasic
            href={item.href}
            fallback={fallback}
            captionText={captionText}
            placeholder={placeholder}
            {...item.image}
          />
        </li>
      )
    }
  </ul>

ThumbnailList.displayName = 'ThumbnailList'

ThumbnailList.propTypes = {
  /**
   * array of thumbnail/basic props
   * https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  items: PropTypes.array.isRequired,
  /**
   * https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  captionText: PropTypes.string.isRequired,
  /**
   * @link https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  placeholder: PropTypes.node.isRequired,
  /**
   * @link https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  fallback: PropTypes.node
}

ThumbnailList.defaultProps = {
  items: []
}

export default ThumbnailList
