import React, {Component} from 'react'

import MoleculeField from '../../../../../components/molecule/field/src'
import MoleculeFieldTextArea from '../MoleculeFieldTextarea'
import FormInput from '@s-ui/react-form-input'

const stylesList = {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  padding: 0
}

const stylesListItem = {
  marginRight: '20px'
}

class FormWithState extends Component {
  state = {
    fullname: {value: ''},
    comments: {value: 'Lorem Ipsum...'}
  }

  onChange = ({value, field}) => {
    this.setState({
      [field]: {value}
    })
  }

  onSubmit = ev => {
    ev.preventDefault()
    ev.stopPropagation()

    Object.keys(this.state).forEach(this.checkField)

    const hasNoErrors = Object.keys(this.state).every(
      field => !this.state[field].error
    )
    if (hasNoErrors) window.alert(JSON.stringify(this.state))
    else window.alert('check your errors')
  }

  checkField = field => {
    if (field === 'comments') {
      const validationMessage = this.checkComments(this.state[field].value)
      this.setState({
        [field]: {...this.state[field], ...validationMessage}
      })
      return !!validationMessage.success
    } else {
      this.setState({
        [field]: {...this.state[field], success: `${field} is OK!`}
      })
      return true
    }
  }

  checkComments = value => {
    if (value.length > 20)
      return {success: `Perfect! Length is more than 20 characters`}
    else return {error: `error! Length should be more than 20 characters`}
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <ul style={stylesList}>
          <li style={stylesListItem}>
            <MoleculeField
              label="Full Name"
              name="fullname"
              helpText="Write your name (name & surname)"
              successText={this.state.fullname.success}
              errorText={this.state.fullname.error}
            >
              <FormInput
                id="fullname"
                type="text"
                onChange={({ev, value}) =>
                  this.onChange({value, field: 'fullname', ev})
                }
                value={this.state.fullname.value}
              />
            </MoleculeField>
          </li>
          <li style={stylesListItem}>
            <MoleculeFieldTextArea
              id="comments"
              label="Comments"
              maxCharacters={50}
              onChange={({ev, value}) =>
                this.onChange({value, field: 'comments', ev})
              }
              successText={this.state.comments.success}
              errorText={this.state.comments.error}
            >
              {this.state.comments.value}
            </MoleculeFieldTextArea>
          </li>
        </ul>
        <button>Send Data</button>
        <pre>{this.state && JSON.stringify(this.state, null, 2)}</pre>
      </form>
    )
  }
}

export default FormWithState
