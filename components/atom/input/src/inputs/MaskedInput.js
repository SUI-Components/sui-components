import React, {Component} from 'react'
import PropTypes from 'prop-types'

import IMask from 'imask'
import nativeInputProps from '../common/nativeInputProps'

class MaskedInput extends Component {
  componentDidMount () {
    const mask = this.props.mask
    this.mask = new IMask(this.field, mask)
  }

  render () {
    const {placeholder, name} = this.props
    return (
      <input
        ref={input => { this.field = input }}
        type='text'
        name={name}
        placeholder={placeholder}
      />
    )
  }
}

MaskedInput.displayName = 'MaskedInput'

MaskedInput.propTypes = {
  mask: PropTypes.object.isRequired,
  ...nativeInputProps
}

export default MaskedInput
