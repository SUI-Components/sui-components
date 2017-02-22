
import React, { PropTypes } from 'react'
import AdItem from './item'

const AdL = ({children, display: {url, positions}}) =>
  <div className='sui-AdL'>
    <div className='sui-AdL-top'>
      {positions.indexOf('Top1') !== -1 &&
        <AdItem id='Top1' url={url} />
      }
    </div>
    <div className='sui-AdL-inner'>
      {children}
    </div>
    <div className='sui-AdL-fixed'>
      {positions.indexOf('Middle1') !== -1 &&
        <AdItem id='Middle1' url={url} />
      }
      {positions.indexOf('Middle2') !== -1 &&
        <AdItem id='Middle2' url={url} />
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
   * display info object.
   */
  display: PropTypes.shape({
    /**
     * display URL.
     */
    url: PropTypes.string.isRequired,
    /**
     * positions array.
     */
    positions: PropTypes.array.isRequired
  })
}

export default AdL
