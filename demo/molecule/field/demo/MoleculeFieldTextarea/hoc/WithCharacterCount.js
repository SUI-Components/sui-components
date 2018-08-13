/* eslint-disable react/prop-types */

import React, {Component} from 'react'

import AtomTextarea from '@s-ui/react-atom-textarea'

const getHelpTextArea = (numCharacters, maxCharacters) => {
  return `${numCharacters}/${maxCharacters} characters`
}

const WithCharacterCount = BaseComponent => {
  const displayName = BaseComponent.displayName
  return class extends Component {
    static displayName = `WithCharacterCount(${displayName})`

    state = {messageAtomTextarea: ''}
    maxCharacters =
      this.props.maxCharacters || AtomTextarea.defaultProps.maxCharacters

    componentDidMount() {
      const {children: initialText} = this.props
      const lengthInitialText = initialText ? initialText.length : 0
      const messageAtomTextarea = getHelpTextArea(
        lengthInitialText,
        this.maxCharacters
      )
      this.setState({messageAtomTextarea})
    }

    onAtomTextAreaChange = ({value, ev}) => {
      const messageAtomTextarea = getHelpTextArea(
        value.length,
        this.maxCharacters
      )
      this.setState({messageAtomTextarea})
    }

    handleChange = ({value, ev}) => {
      const {onChange} = this.props

      const messageAtomTextarea = getHelpTextArea(
        value.length,
        this.maxCharacters
      )
      this.setState(
        {messageAtomTextarea},
        () => onChange && onChange({value, ev})
      )
    }

    render() {
      const {messageAtomTextarea} = this.state
      const {handleChange} = this
      return (
        <BaseComponent
          {...this.props}
          onChange={handleChange}
          helpText={messageAtomTextarea}
        />
      )
    }
  }
}

export default WithCharacterCount
