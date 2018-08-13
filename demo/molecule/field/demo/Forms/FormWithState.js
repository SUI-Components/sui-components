import React, {Component} from 'react'

import MoleculeField from '../../../../../components/molecule/field/src'
import FormInput from '@s-ui/react-form-input'

class FormWithState extends Component {
  onChange = ({value, field}) => {
    this.setState({
      [field]: value
    })
  }

  onSubmit = ev => {
    ev.preventDefault()
    ev.stopPropagation()

    window.alert(JSON.stringify(this.state))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <MoleculeField
          label="evaluation"
          name="evaluation"
          helpText="Write your evaluation about it"
        >
          <FormInput id="evaluation" type="text" />
        </MoleculeField>
      </form>
    )
  }
}

export default FormWithState
