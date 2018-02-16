import React from 'react'
import PropTypes from 'prop-types'

const SUILoader = ({text}) =>
  <span className='sui-atom-spinner-loader'>
    {text}
  </span>

SUILoader.displayName = 'SUILoader'

SUILoader.propTypes = {
  text: PropTypes.string
}

export default SUILoader
