import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './index.scss'

const CLASS = 'sui-FormInput-input'

class Input extends Component {
  changeHandler(ev, onChange) {
    onChange && onChange({value: ev.target.value, target: ev.target})
  }

  getClassNames({size}) {
    return cx(CLASS, `${CLASS}-${size}`)
  }

  render() {
    const {
      disabled,
      name,
      onChange,
      placeholder,
      size,
      type,
      value
    } = this.props

    return (
      <input
        className={this.getClassNames({size})}
        disabled={disabled}
        name={name}
        onChange={ev => this.changeHandler(ev, onChange)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    )
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}

export default Input
