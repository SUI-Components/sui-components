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
      const {value, maxCharacters} = this.props
      const lengthInitialText = value ? value.length : 0
      const messageAtomTextarea = this.getHelpTextArea(
        lengthInitialText,
        maxCharacters
      )
      this.setState({messageAtomTextarea})
    }

    getHelpTextArea = (numCharacters, maxCharacters) => {
      const {helpText: staticText, textCharacters = 'characters'} = this.props
      const dynamicText = `${numCharacters}/${maxCharacters} ${textCharacters}`
      return staticText ? staticText + ' - ' + dynamicText : dynamicText
    }

    onAtomTextAreaChange = ({value, ev}) => {
      const messageAtomTextarea = this.getHelpTextArea(
        value.length,
        this.maxCharacters
      )
      this.setState({messageAtomTextarea})
    }

    handleChange = ev => {
      const value = ev.target.value
      const {onChange, maxCharacters} = this.props
      if (value.length > maxCharacters) return

      let messageAtomTextarea = this.getHelpTextArea(
        value.length,
        maxCharacters
      )

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
