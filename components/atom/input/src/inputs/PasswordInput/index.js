import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from '../../InputWrapper'
import Input from '../../Input'

const TEXT = 'text'
const PASSWORD = 'password'
const DEFAULT_HIDE = 'hide'
const DEFAULT_SHOW = 'show'

const AtomPasswordInput = (props) =>
  <InputWrapper {...props}>
    <PasswordInput {...props} />
  </InputWrapper>

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
    const {showText, hideText} = this.props
    const {type, value} = this.state

    return (
      <div className='sui-AtomInput-password'>
        <Input
          onChange={this.onChange}
          className='sui-AtomInput-password-input'
          {...this.props}
          type={type}
          value={value}
        />
        <div onClick={this.toggle} className='sui-AtomInput-password-toggle-button'>
          {
            type === PASSWORD
              ? showText
              : hideText
          }
        </div>
      </div>
    )
  }
}

PasswordInput.displayName = 'PasswordInput'

PasswordInput.propTypes = {
  /**
   * Text to be shown in order to show the password on click
   */
  showText: PropTypes.string,
  /**
   * Text to be shown in order to hide the password on click
   */
  hideText: PropTypes.string,
  /**
   * Event launched on every input change
   */
  onChange: PropTypes.func,
}

PasswordInput.defaultProps = {
  showText: DEFAULT_SHOW,
  hideText: DEFAULT_HIDE
}

export { AtomPasswordInput, PasswordInput }
