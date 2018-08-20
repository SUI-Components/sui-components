/* eslint-disable react/prop-types */

import React, {Component} from 'react'

const WithCharacterCount = BaseComponent => {
  return class extends Component {
    state = {
      value: this.props.value,
      messageAtomTextarea: ''
    }

    static getDerivedStateFromProps(nextProps) {
      if (nextProps.value === '') return {value: ''}
      return null
    }

    componentDidMount() {
      const {value, maxChars} = this.props
      const lengthInitialText = value ? value.length : 0
      const messageAtomTextarea = this.getHelpTextArea(
        lengthInitialText,
        maxChars
      )
      this.setState({messageAtomTextarea})
    }

    getHelpTextArea = (numCharacters, maxChars) => {
      const {helpText: staticText, textCharacters = 'characters'} = this.props
      const dynamicText = `${numCharacters}/${maxChars} ${textCharacters}`
      return staticText ? staticText + ' - ' + dynamicText : dynamicText
    }

    onAtomTextAreaChange = ({value}) => {
      const messageAtomTextarea = this.getHelpTextArea(
        value.length,
        this.maxChars
      )
      this.setState({messageAtomTextarea})
    }

    handleChange = ev => {
      const value = ev.target.value
      const {onChange, maxChars} = this.props
      if (value.length > maxChars) return

      let messageAtomTextarea = this.getHelpTextArea(value.length, maxChars)

      this.setState(
        {value, messageAtomTextarea},
        () => onChange && onChange({value, ev})
      )
    }

    render() {
      const {value, messageAtomTextarea} = this.state
      const {handleChange} = this
      return (
        <BaseComponent
          {...this.props}
          value={value}
          onChange={handleChange}
          helpText={messageAtomTextarea}
        />
      )
    }
  }
}

export default WithCharacterCount
