import React from 'react'
import PropTypes from 'prop-types'

const Label = ({value, formatter}) => {
  console.log('render label', value)
  return <div className="sui-AtomSlider-label">{formatter(value)}</div>
}

Label.propTypes = {
  value: PropTypes.string,
  formatter: PropTypes.func
}

Label.defaultProps = {
  formatter: value => value
}

export default Label
