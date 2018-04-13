import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import InputWrapper from '../../InputWrapper'
import Input from '../../Input'

const AtomMaskInput = (props) =>
  <InputWrapper {...props}>
    <MaskInput {...props} />
  </InputWrapper>

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
      <Input
        id={name}
        className='sui-AtomInput-input'
        type='text'
        reference={input => { this.field = input }}
        onChange={this.onChange}
        {...this.props}
      />
    )
  }
}

MaskInput.displayName = 'MaskInput'

MaskInput.propTypes = {
  /**
   * mask object, see https://unmanner.github.io/imaskjs/
   */
  mask: PropTypes.object,
  /**
   * The name of the control
   */
  name: PropTypes.string,
  /**
   * Event launched on every input change
   */
  onChange: PropTypes.func,
}

export { MaskInput, AtomMaskInput }
