import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomTextarea'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

class AtomTextarea extends Component {
  state = {
    value: this.props.children // eslint-disable-line react/prop-types
  }

  getClassNames(size) {
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`)
  }

  handleChange = ev => {
    const value = ev.target.value
    const {onChange, maxCharacters} = this.props // eslint-disable-line react/prop-types
    if (value.length > maxCharacters) return
    this.setState({value}, () => onChange && onChange({value, ev}))
  }

  render() {
    const {onChange, maxCharacters, size, ...props} = this.props
    return (
      <Fragment>
        <textarea
          {...props}
          onChange={this.handleChange}
          className={this.getClassNames(size)}
          value={this.state.value}
        />
      </Fragment>
    )
  }
}

AtomTextarea.displayName = 'AtomTextarea'

AtomTextarea.propTypes = {
  /** Size of button: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Maximum number of characters allowed  */
  maxCharacters: PropTypes.number.required
}

AtomTextarea.defaultProps = {
  size: SIZES.SHORT,
  maxCharacters: 4000
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
