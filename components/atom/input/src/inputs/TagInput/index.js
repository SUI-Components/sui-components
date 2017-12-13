import React from 'react'
import PropTypes from 'prop-types'
import AtomTag from '@schibstedspain/sui-atom-tag'
import InputWrapper from '../../InputWrapper'

const SEPARATION_KEY = ','

import './styles.scss'

class TagInput extends React.Component {
  state = {
    tags: [],
    inputValue: ''
  }

  get value () {
    return this.state.tags.join(SEPARATION_KEY)
  }

  shouldConvertIntoTag (inputValue) {
    return inputValue.length > 1 && inputValue[inputValue.length - 1] === SEPARATION_KEY
  }

  convertIntoTag (inputValue) {
    const key = inputValue.replace(/,\s*$/, '')
    this.setState({
      tags: [...this.state.tags, key],
      inputValue: ''
    })
  }

  removeTag (idx) {
    this.setState({
      tags: [
        ...this.state.tags.slice(0, idx),
        ...this.state.tags.slice(idx + 1, this.state.tags.length)
      ]
    }, this.notifyChange)
  }

  onChange = (ev) => {
    const inputValue = ev.target.value
    if (this.shouldConvertIntoTag(inputValue)) {
      this.convertIntoTag(inputValue)
      return
    }

    this.setState({inputValue}, this.notifyChange)
  }

  notifyChange = () => {
    this.props.onChange && this.props.onChange({value: this.value})
  }

  render () {
    const {name, label} = this.props
    return (
      <InputWrapper name={name} label={label} >
        {
          this.state.tags.map((label, idx) =>
            <AtomTag label={label} key={idx} onClose={() => this.removeTag(idx)} />
          )
        }
        <input type='text' onChange={this.onChange} value={this.state.inputValue} />
      </InputWrapper>
    )
  }
}

TagInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default TagInput
