
import React, { PropTypes } from 'react'
import AdItem from './item'

const AdL = ({children, url, positionIds: {top, aside1, aside2}}) =>
  <div className='sui-AdL'>
    <div className='sui-AdL-top'>
      {top &&
        <AdItem id={top} url={url} />
      }
    </div>
    <div className='sui-AdL-inner'>
      {children}
    </div>
    <div className='sui-AdL-fixed'>
      {aside1 &&
        <AdItem id={aside1} url={url} />
      }
      {aside2 &&
        <AdItem id={aside2} url={url} />
      }
    </div>
  </div>

AdL.displayName = 'AdL'

AdL.propTypes = {
  /**
   * Inner element
   */
  children: PropTypes.element.isRequired,
  /**
   * display URL.
   */
  url: PropTypes.string.isRequired,
  /**
   * display position ids
   */
  positionIds: PropTypes.shape({
    /**
     * top position id
     */
    top: PropTypes.string,
    /**
     * aside1 position id
     */
    aside1: PropTypes.string,
    /**
     * aside2 position id
     */
    aside2: PropTypes.string
  })
}

export default AdL
