import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

import './index.scss'

const TEXT = 'text'
const PASSWORD = 'password'
const HIDE_LABEL = 'hide'
const SHOW_LABEL = 'show'

class Password extends React.Component {
  state = {
    type: PASSWORD,
    value: ''
  }

  toggle = () => {
    const {type} = this.state
    const inputType = type === PASSWORD ? TEXT : PASSWORD

    this.setState({type: inputType})
  }

  onChange = ({ev, value}) => {
    this.setState({value}, () => {
      const {onChange} = this.props
      onChange && onChange({value, ev})
    })
  }

  render() {
    const {pwShowLabel, pwHideLabel, ...props} = this.props
    const {type, value} = this.state

    return (
      <div className="sui-AtomInput-password">
        <Input {...props} onChange={this.onChange} value={value} type={type} />
        <div
          onClick={this.toggle}
          className="sui-AtomInput-password--toggleButton"
        >
          {type === PASSWORD ? pwShowLabel : pwHideLabel}
        </div>
      </div>
    )
  }
}

Password.propTypes = {
  /* Text to be shown in order to show the password on click */
  pwShowLabel: PropTypes.string,
  /* Text to be shown in order to hide the password on click */
  pwHideLabel: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func,
  /* The name of the control */
  name: PropTypes.string,
  /* The id of the control */
  id: PropTypes.string
}

Password.defaultProps = {
  pwShowLabel: SHOW_LABEL,
  pwHideLabel: HIDE_LABEL
}

export default Password
