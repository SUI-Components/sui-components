import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import InputWrapper from '../../InputWrapper'
import Input from '../../Input'

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
    const {name} = this.props
    return (
      <InputWrapper {...this.props}>
        <Input
          id={name}
          className='sui-AtomInput-input'
          type='text'
          reference={input => { this.field = input }}
          onChange={this.onChange}
          {...this.props}
        />
      </InputWrapper>
    )
  }
}

MaskInput.displayName = 'MaskInput'

MaskInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  mask: PropTypes.object
}

export default MaskInput
