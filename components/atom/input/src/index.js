import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AtomInput extends Component {
  state = {
    error: false,
    value: ''
  }

  onChange = (ev) => {
    const value = ev.target.value
    this.setState({value})
  }

  render () {
    const {placeholder, label, name} = this.props
    const {value} = this.state
    return (
      <div>
        <label htmlFor={name}>label</label>
        <input name={name} placeholder={placeholder} value={value} onChange={(ev) => this.onChange(ev)} />
      </div>
    )
  }
}

AtomInput.displayName = 'AtomInput'

const nativeInputProps = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

AtomInput.propTypes = {
  ...nativeInputProps
}

export default AtomInput
