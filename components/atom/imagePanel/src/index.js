import React from 'react'
import PropTypes from 'prop-types'

const AtomImagePanel = function ({children}) {
  return (
    <div className='sui-AtomImagePanel'>
      <h1>AtomImagePanel</h1>
      {children}
    </div>
  )
}

AtomImagePanel.displayName = 'AtomImagePanel'

AtomImagePanel.propTypes = {
  children: PropTypes.node
}
// AtomImagePanel.defaultProps = {}

export default AtomImagePanel
