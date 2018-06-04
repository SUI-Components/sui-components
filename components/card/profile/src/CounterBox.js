import React from 'react'
import PropTypes from 'prop-types'

const CounterBox = ({number, label, link}) => (
  <a href={link} className="sui-CardProfile-counter">
    <span className="sui-CardProfile-counterNumber">{number}</span>
    <span className="sui-CardProfile-counterLabel">{label}</span>
  </a>
)

CounterBox.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default CounterBox
