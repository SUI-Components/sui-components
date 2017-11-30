import React from 'react'
import PropTypes from 'prop-types'

const CounterBox = ({number, label, link}) => <a href={link} className='sui-CardProfile-counterBox'>
  <div className='sui-CardProfile-counterBoxNumber'>{number}</div>
  <div className='sui-CardProfile-counterBoxLabel'>{label}</div>
</a>

CounterBox.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default CounterBox
