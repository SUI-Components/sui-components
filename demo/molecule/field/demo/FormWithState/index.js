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
        <ul style={stylesList}>
          <li style={stylesListItem}>
            <MoleculeFieldTextArea
              id="description"
              label="Description"
              maxCharacters={50}
              onChange={({ev, value}) =>
                this.onChange({value, field: 'description', ev})
              }
            />
          </li>
          <li style={stylesListItem}>
            <MoleculeField
              label="evaluation"
              name="evaluation"
              helpText="Write your evaluation about it"
            >
              <FormInput
                id="evaluation"
                type="text"
                onChange={({ev, value}) =>
                  this.onChange({value, field: 'evaluation', ev})
                }
              />
            </MoleculeField>
          </li>
        </ul>
        <button>Send Data</button>
        <pre>{this.state && JSON.stringify(this.state, null, 2)}</pre>
      </form>
    )
  }
}

export default FormWithState
