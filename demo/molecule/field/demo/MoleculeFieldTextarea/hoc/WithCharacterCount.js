/* eslint-disable react/prop-types */

import React, {Component} from 'react'

import AtomTextarea from '@s-ui/react-atom-textarea/src/index'

const WithCharacterCount = BaseComponent => {
  const displayName = BaseComponent.displayName
  return class extends Component {
    static displayName = `WithCharacterCount(${displayName})`

    state = {
      messageAtomTextarea: ''
    }
    maxCharacters =
      this.props.maxCharacters || AtomTextarea.defaultProps.maxCharacters

    componentDidMount() {
      const {value: initialText} = this.props
      const lengthInitialText = initialText ? initialText.length : 0
      const messageAtomTextarea = this.getHelpTextArea(
        lengthInitialText,
        this.maxCharacters
      )
      this.setState({messageAtomTextarea})
    }

    getHelpTextArea = (numCharacters, maxCharacters) => {
      const {helpText: staticText} = this.props
      const dynamicText = `${numCharacters}/${maxCharacters} characters`
      return staticText ? staticText + ' - ' + dynamicText : dynamicText
    }

    onAtomTextAreaChange = ({value, ev}) => {
      const messageAtomTextarea = this.getHelpTextArea(
        value.length,
        this.maxCharacters
      )
      this.setState({messageAtomTextarea})
    }

    handleChange = ({value, ev}) => {
      const {onChange} = this.props

      let messageAtomTextarea = this.getHelpTextArea(
        value.length,
        this.maxCharacters
      )

      this.setState(
        {messageAtomTextarea},
        () =>
          onChange &&
          this.maxCharacters <= value.length &&
          onChange({value, ev})
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
