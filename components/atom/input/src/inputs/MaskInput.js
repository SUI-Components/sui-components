import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import InputWrapper from '../InputWrapper'

class MaskInput extends Component {
  componentDidMount () {
    const mask = this.props.mask
    this.mask = new IMask(this.field, mask)
  }

  render () {
    const {placeholder, name, label} = this.props
    return (
      <InputWrapper label={label} name={name}>
        <input
          ref={input => { this.field = input }}
          type='text'
          name={name}
          placeholder={placeholder}
        />
      </InputWrapper>
    )
  }
}

MaskInput.displayName = 'MaskInput'

MaskInput.propTypes = {
  mask: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string
}

export default MaskInput
