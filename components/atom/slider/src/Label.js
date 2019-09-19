import React from 'react'
import PropTypes from 'prop-types'

const Label = ({value}) => {
  return <div className={'sui-AtomSlider-label'}>{value}</div>
}

Label.propTypes = {
  value: PropTypes.string
}

export default Label
