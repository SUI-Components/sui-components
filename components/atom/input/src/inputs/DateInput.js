import React, {Component} from 'react'
import PropTypes from 'prop-types'

import nativeInputProps from '../common/nativeInputProps'

class DateInput extends Component {
  fieldRefs = []

  componentWillMount () {
    const {placeholder, delimiter} = this.props
    const fieldPlaceholders = placeholder.split(delimiter)

    this.fields = fieldPlaceholders.map(this.inputFactory)
  }

  inputFactory = (placeholder, idx) =>
    <input
      ref={input => { this.fieldRefs.push(input) }}
      key={idx}
      type='text'
      placeholder={placeholder}
      maxLength={placeholder.replace(/./g, 9)}
      onChange={ev => this.onChange(ev, idx, placeholder)}
    />

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
    return (
      <div className='sui-AtomInput-date'>
        {this.fields}
      </div>
    )
  }
}

DateInput.displayName = 'DateInput'

DateInput.propTypes = {
  delimiter: PropTypes.string,
  ...nativeInputProps
}

DateInput.defaultProps = {
  placeholder: 'DD/MM/YYYYY',
  delimiter: '/'
}

export default DateInput
