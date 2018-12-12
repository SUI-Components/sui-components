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
    const {value} = ev.target
    const {onChange} = this.props
    onChange(ev, {value})
  }

  render() {
    const {onChange, size, value, ...props} = this.props
    const {handleChange} = this
    return (
      <textarea
        {...props}
        onChange={handleChange}
        className={this.getClassNames(size)}
        value={value}
      />
    )
  }
}

AtomTextarea.displayName = 'AtomTextarea'

AtomTextarea.propTypes = {
  /** Size of textarea: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Handler triggered on change */
  onChange: PropTypes.func,

  /** Value (content) of the textarea */
  value: PropTypes.string
}

AtomTextarea.defaultProps = {
  size: SIZES.SHORT,
  onChange: () => {}
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
