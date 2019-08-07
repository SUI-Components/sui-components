/* eslint-disable react/prop-types */

import React, {Component} from 'react'

const WithCharacterCount = BaseComponent => {
  return class extends Component {
    state = {
      value: this.props.value,
      messageAtomTextarea: '',
      initialMessageAtomTextarea: ''
    }

    get initialMessageAtomTextarea() {
      const {value, maxChars} = this.props
      const lengthInitialText = value ? value.length : 0
      return this.getHelpTextArea(lengthInitialText, maxChars)
    }

    static getDerivedStateFromProps(nextProps, nextState) {
      if (nextProps.value === '' && nextState.value.length > 1) {
        const {initialMessageAtomTextarea} = nextState
        return {value: '', messageAtomTextarea: initialMessageAtomTextarea}
      }
      return null
    }

    componentDidMount() {
      const {initialMessageAtomTextarea} = this
      const messageAtomTextarea = initialMessageAtomTextarea
      this.setState({messageAtomTextarea, initialMessageAtomTextarea})
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
      ev.persist()
      const value = ev.target.value
      const {onChange, maxChars} = this.props
      if (value.length > maxChars) return

      const messageAtomTextarea = this.getHelpTextArea(value.length, maxChars)

      this.setState(
        {value, messageAtomTextarea},
        () => onChange && onChange(ev, {value})
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
