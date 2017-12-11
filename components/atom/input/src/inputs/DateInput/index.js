import React, {Component} from 'react'
import PropTypes from 'prop-types'

import InputWrapper from '../../InputWrapper'

import './index.scss'

class DateInput extends Component {
  fieldRefs = []

  componentWillMount () {
    const {placeholder, delimiter} = this.props
    const fieldPlaceholders = placeholder.split(delimiter)

    this.fields = fieldPlaceholders.map(this.fieldFactory)
  }

  fieldFactory = (placeholder, idx) => (
    <div className='sui-AtomInputDate-field' key={idx}>
      <input
        className='sui-AtomInputDate-fieldInput'
        ref={input => { this.fieldRefs.push(input) }}
        type='text'
        placeholder={placeholder}
        onChange={ev => this.onChange(ev, idx, placeholder)}
      />
    </div>
  )

  jumpNext (current) {
    if (current + 1 < this.fieldRefs.length) {
      this.fieldRefs[current + 1].focus()
    }
  }

  onChange = (ev, idx, placeholder) => {
    const value = ev.target.value
    if (value.length === placeholder.length) {
      this.jumpNext(idx)
    }
  }

  render () {
    const {label, name} = this.props
    return (
      <InputWrapper label={label} name={name} className='sui-AtomInputDate'>
        {this.fields}
      </InputWrapper>
    )
  }
}

DateInput.displayName = 'DateInput'

DateInput.propTypes = {
  delimiter: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

DateInput.defaultProps = {
  placeholder: 'DD/MM/YYYYY',
  delimiter: '/'
}

export default DateInput
