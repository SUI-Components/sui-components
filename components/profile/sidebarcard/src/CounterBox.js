import React from 'react'
import PropTypes from 'prop-types'

const CounterBox = ({number, label, link}) => <a href={link} className='sui-ProfileSidebarcard-counterBox'>
  <div className='sui-ProfileSidebarcard-counterBoxNumber'>{number}</div>
  <div className='sui-ProfileSidebarcard-counterBoxLabel'>{label}</div>
</a>

CounterBox.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default CounterBox
