import React from 'react'
import PropTypes from 'prop-types'

const CounterBox = ({number, label, link}) => <a href={link} className='sui-CardProfile-counter'>
  <div className='sui-CardProfile-counterNumber'>{number}</div>
  <div className='sui-CardProfile-counterLabel'>{label}</div>
</a>

CounterBox.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default CounterBox
