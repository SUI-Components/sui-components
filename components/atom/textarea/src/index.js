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

  getClassNames(size) {
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`)
  }

  getHelpTextContent(maxCharacters, maxCharactersText) {
    const numCharacters = this.state.value ? this.state.value.length : 0
    return `${numCharacters}/${maxCharacters} ${maxCharactersText}`
  }

  handleChange = ev => {
    const value = ev.target.value
    const {onChange} = this.props // eslint-disable-line react/prop-types
    if (value.length > this.props.maxCharacters) return
    this.setState({value}, () => onChange && onChange({value, ev}))
  }

  render() {
    const {
      onChange,
      maxCharacters,
      maxCharactersText,
      size,
      ...props
    } = this.props
    return (
      <Fragment>
        <textarea
          {...props}
          onChange={this.handleChange}
          className={this.getClassNames(size)}
          value={this.state.value}
        />
        <AtomHelpText
          text={this.getHelpTextContent(maxCharacters, maxCharactersText)}
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
  maxCharacters: PropTypes.number,

  /* Text to be shown in max characters Help text */
  maxCharactersText: PropTypes.string
}

AtomTextarea.defaultProps = {
  size: SIZES.SHORT,
  maxCharacters: 4000,
  maxCharactersText: 'characters'
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
