import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper, {SIZES} from '../../InputWrapper'

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
    const {name, label, showText, hideText, size} = this.props
    const {type, value} = this.state

    return (
      <InputWrapper name={name} label={label} size={size}>
        <div className='sui-AtomInput-password'>
          <input
            type={type}
            value={value}
            onChange={this.onChange}
            className='sui-AtomInput-password-input'
          />
          <div onClick={this.toggle} className='sui-AtomInput-password-toggle-button'>
            {
              type === PASSWORD
                ? showText
                : hideText
            }
          </div>
        </div>
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
  onChange: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZES))
}

PasswordInput.defaultProps = {
  showText: DEFAULT_SHOW,
  hideText: DEFAULT_HIDE
}

export default PasswordInput
