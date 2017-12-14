import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import InputWrapper from '../InputWrapper'

class MaskInput extends Component {
  componentDidMount () {
    const {mask} = this.props
    this.mask = new IMask(this.field, mask)
  }

  componentWillUnmount () {
    this.mask.destroy()
  }

  onChange = (ev) => {
    const {onChange} = this.props
    onChange && onChange({value: ev.target.value, target: ev.target})
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
          onChange={this.onChange}
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
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default MaskInput
