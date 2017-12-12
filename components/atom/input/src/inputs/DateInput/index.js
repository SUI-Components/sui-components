import React, {Component} from 'react'
import PropTypes from 'prop-types'

import InputWrapper from '../../InputWrapper'

import './index.scss'

class DateInput extends Component {
  _fieldRefs = []

  componentWillMount () {
    const {placeholder, delimiter} = this.props
    const fieldPlaceholders = placeholder.split(delimiter)

    this._fields = fieldPlaceholders.map(this.fieldFactory)
  }

  fieldFactory = (placeholder, idx) => (
    <div key={idx}>
      <input
        ref={input => { this._fieldRefs.push(input) }}
        type='text'
        placeholder={placeholder}
        onChange={ev => this.onChange(ev, idx, placeholder)}
      />
    </div>
  )

  get value () {
    return this._fieldRefs
      .map(field => field.value)
      .join(this.props.delimiter)
  }

  jumpToNextField (current) {
    if (current + 1 < this._fieldRefs.length) {
      this._fieldRefs[current + 1].focus()
    }
  }

  isFieldFilled (value, placeholder) {
    return value.length === placeholder.length
  }

  /**
   * As this component is composed by inputs, we need to intercept
   * the onChange function in order to bubble up to the parent
   * component the value obtained by concatenating the value of
   * each input. In order to do this, the created event gets its
   * value overwritten
   */
  onChange = (ev, idx, placeholder) => {
    const value = ev.target.value
    this.isFieldFilled(value, placeholder) && this.jumpToNextField(idx)

    this.props.onChange(Object.assign(ev, {target: { value: this.value }}))
  }

  render () {
    const {label, name} = this.props
    return (
      <InputWrapper label={label} name={name} className='sui-AtomInputDate'>
        {this._fields}
      </InputWrapper>
    )
  }
}

DateInput.displayName = 'DateInput'

DateInput.propTypes = {
  delimiter: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
}

DateInput.defaultProps = {
  placeholder: 'DD/MM/YYYYY',
  delimiter: '/'
}

export default DateInput
