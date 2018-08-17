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

  render() {
    const {onChange, size, value, ...props} = this.props
    return (
      <textarea
        {...props}
        onChange={onChange}
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
  size: SIZES.SHORT
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
