import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomHelpText from '@s-ui/react-atom-help-text'

const BASE_CLASS = 'sui-AtomTextarea'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

class AtomTextarea extends Component {
  state = {
    value: this.props.children // eslint-disable-line react/prop-types
  }

  get classNames() {
    const {size} = this.props
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`)
  }

  get helpTextContent() {
    const numCharacters = this.state.value ? this.state.value.length : 0
    return `${numCharacters}/${this.props.maxCharacters} characters`
  }

  handleChange = ev => {
    const value = ev.target.value
    const {onChange} = this.props // eslint-disable-line react/prop-types
    if (value.length > this.props.maxCharacters) return
    this.setState({value}, () => onChange && onChange({value, ev}))
  }

  render() {
    const {onChange, ...props} = this.props
    return (
      <Fragment>
        <textarea
          {...props}
          onChange={this.handleChange}
          className={this.classNames}
          value={this.state.value}
        />
        <AtomHelpText text={this.helpTextContent} />
      </Fragment>
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
