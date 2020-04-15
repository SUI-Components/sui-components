import React from 'react'
import PropTypes from 'prop-types'

const Label = ({value, formatter, percentage}) => (
  <div className="sui-AtomSlider-labelContainer">
    <div className="sui-AtomSlider-labelContainer--inner">
      <div className="sui-AtomSlider-label" style={{left: `${percentage}%`}}>
        {formatter(value)}
      </div>
    </div>
  </div>
)

Label.propTypes = {
  percentage: PropTypes.number,
  value: PropTypes.string,
  formatter: PropTypes.func
}

Label.defaultProps = {
  formatter: value => value
}

export default Label
