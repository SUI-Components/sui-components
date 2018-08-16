/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomTextarea'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

class AtomTextarea extends Component {
  getClassNames(size) {
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`)
  }

  handleChange = ev => {
    ev.persist()
    const value = ev.target.value
    const {onChange, maxCharacters} = this.props // eslint-disable-line react/prop-types
    if (value.length > maxCharacters) return
    onChange && onChange({value, ev})
  }

  render() {
    const {onChange, maxCharacters, size, value, ...props} = this.props
    return (
      <textarea
        {...props}
        onChange={this.handleChange}
        className={this.getClassNames(size)}
        value={value}
      />
    )
  }
}

AtomTextarea.displayName = 'AtomTextarea'

AtomTextarea.propTypes = {
  /** Size of button: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Maximum number of characters allowed  */
  maxCharacters: PropTypes.number
}

AtomTextarea.defaultProps = {
  size: SIZES.SHORT,
  maxCharacters: 4000
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
