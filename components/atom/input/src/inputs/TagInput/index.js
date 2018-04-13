import React from 'react'
import PropTypes from 'prop-types'
import AtomTag from '@schibstedspain/sui-atom-tag'
import InputWrapper from '../../InputWrapper'

const SEPARATION_KEY = ','

const AtomTagInput = (props) =>
  <InputWrapper {...props}>
    <TagInput {...props} />
  </InputWrapper>

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
    const {name} = this.props
    return (
      <div className='sui-AtomInput-wrapper'>
        {
          this.state.tags.map((label, idx) =>
            <AtomTag
              className='sui-AtomInput-tag'
              key={idx}
              label={label}
              onClose={() => this.removeTag(idx)} />
          )
        }
        <input
          id={name}
          type='text'
          onChange={this.onChange}
          value={this.state.inputValue}
          {...this.props}
        />
      </div>
    )
  }
}

TagInput.propTypes = {
  /**
   * The name of the control
   */
  name: PropTypes.string.isRequired,
  /**
   * Event launched on every input change
   */
  onChange: PropTypes.func,
}

export {
  TagInput, AtomTagInput
}
