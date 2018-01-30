import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from '../../InputWrapper'

import './style.scss'

const TEXT = 'text'
const PASSWORD = 'password'
const DEFAULT_HIDE = 'Hide'
const DEFAULT_SHOW = 'Show'

class PasswordInput extends React.Component {
  state = {
    type: PASSWORD,
    value: ''
  }

  onChange = (ev) => {
    const value = ev.target.value
    this.setState({value}, () => {
      const {onChange} = this.props
      onChange && onChange({value})
    })
  }

  toggle = () => {
    const {type} = this.state
    const inputType = type === PASSWORD
      ? TEXT
      : PASSWORD

    this.setState({type: inputType})
  }

  render () {
    const {name, label, showText, hideText} = this.props
    const {type, value} = this.state

    return (
      <InputWrapper name={name} label={label} >
        <input
          type={type}
          value={value}
          onChange={this.onChange}
        />
        <span onClick={this.toggle}>
          {
            type === PASSWORD
              ? showText
              : hideText
          }
        </span>
      </InputWrapper>
    )
  }
}

PasswordInput.displayName = 'PasswordInput'

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  showText: PropTypes.string,
  hideText: PropTypes.string,
  onChange: PropTypes.func
}

PasswordInput.defaultProps = {
  showText: DEFAULT_SHOW,
  hideText: DEFAULT_HIDE
}

export default PasswordInput
