import React, {Component} from 'react'
import AtomInput from '@schibstedspain/sui-atom-input'

const postalCodeMask = {
  mask: '00000',
  placeholder: {
    lazy: false,
    char: 0
  }
}

class FormTest extends Component {
  state = {
    value: ''
  }

  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange ({value}) {
    console.log(value)
    this.setState({value})
  }

  handleSubmit = (event) => {
    window.alert(this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <AtomInput.Mask mask={postalCodeMask} name='date' label='mask' onChange={this.handleChange} value={this.state.value} />
        <AtomInput.Tag name='tag' label='tag' onChange={this.handleChange} />
        <AtomInput.Password name='passwd' label='passwd' onChange={this.handleChange} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

FormTest.displayName = 'FormTest'

// Remove these comments if you need
// FormTest.contextTypes = {i18n: PropTypes.object}
// FormTest.propTypes = {}
// FormTest.defaultProps = {}

export default FormTest
