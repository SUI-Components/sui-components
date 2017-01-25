
import React, { PropTypes } from 'react'

const AdL = ({children}) =>
  <div className='sui-AdL'>
    <div className='sui-AdLTop'>
      <img src='https://placeholdit.imgix.net/~text?txtsize=33&txt=980%C3%9790&w=980&h=90' />
    </div>
    <div className='sui-AdLInner'>
      {children}
    </div>
    <div className='sui-AdLFixed'>
      <img src='https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97600&w=300&h=600' />
    </div>
  </div>

AdL.displayName = 'AdL'

AdL.propTypes = {
  /**
   * Inner element
   */
  children: PropTypes.element.isRequired
}

export default AdL
