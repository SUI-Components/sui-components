import React from 'react'
import PropTypes from 'prop-types'
import AtomTag from '@schibstedspain/sui-atom-tag'
import InputWrapper from '../../InputWrapper'
import cx from 'classnames'

const SEPARATION_KEY = ','

const AtomTagInput = (props) =>
  <InputWrapper {...props}>
    <TagInput {...props} />
  </InputWrapper>

class TagInput extends React.Component {
  state = {
    tags: [],
    inputValue: '',
    isFocus: false,
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

  onFocus = (ev) => {
    this.setState({isFocus: true})
  }

  onUnFocus = (ev) => {
    this.setState({isFocus: false})
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
    const {name, id} = this.props
    return (
      <div className={cx(
        'sui-AtomInput-wrapper',
        {
          focus: this.state.isFocus
        }
      )}>
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
          id={id}
          type='text'
          name={name}
          onChange={this.onChange}
          value={this.state.inputValue}
          onSelect={this.onFocus}
          onBlur={this.onUnFocus}
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
   * The id of the control
   */
  id: PropTypes.string,
  /**
   * Event launched on every input change
   */
  onChange: PropTypes.func,
}

export {
  TagInput, AtomTagInput
}
