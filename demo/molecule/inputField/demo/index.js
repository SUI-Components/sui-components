import React from 'react'
import PropTypes from 'prop-types'
import SuiButton from '@s-ui/react-atom-button'
import MoleculeInputField from '../../../../components/molecule/inputField/src'

import './styles.scss'

const withState = BaseComponent => {
  return class BaseComponentWithState extends React.Component {
    propTypes = {
      value: PropTypes.string
    }

    state = {value: this.props.value || ''}

    onChange = (e, {value}) => {
      this.setState({value})
    }

    render() {
      const {value} = this.state
      const {onChange, props} = this
      return (
        <div>
          <BaseComponent {...props} value={value} onChange={onChange} />
        </div>
      )
    }
  }
}

const styleList = {
  listStyle: 'none'
}

const styleListItem = {
  marginTop: '50px'
}

const MoleculeInputFieldWithState = withState(MoleculeInputField)

export default () => (
  <div>
    <h1>
      <code>MoleculeInputField</code>
    </h1>
    <ul style={styleList}>
      <li style={styleListItem}>
        <h2>
          With <code>placeholder</code>
        </h2>
        <MoleculeInputFieldWithState
          id="comments"
          label="Comments"
          placeholder="Please, write something cool..."
        />
      </li>
      <li style={styleListItem}>
        <h2>With Addons</h2>
        <MoleculeInputFieldWithState
          id="second"
          leftAddon="http://"
          rightAddon="@schibsted.com"
          label="Description"
        />
      </li>
      <li style={styleListItem}>
        <h2>With Information HelpText</h2>
        <MoleculeInputFieldWithState
          id="description-inline2"
          label="Description"
          helpText="Tu descripción en Latin"
        />
      </li>
      <li style={styleListItem}>
        <h2>With Success Validation HelpText</h2>
        <MoleculeInputFieldWithState
          id="description2"
          label="Description"
          value="In some place of La Mancha which name..."
          successText="Everything ok!"
        />
      </li>
      <li style={styleListItem}>
        <h2>With Error validation HelpText</h2>
        <MoleculeInputFieldWithState
          id="notes"
          label="Notes"
          errorText="All wrong!"
          value="In some place of La Mancha which name..."
        />
      </li>
      <li style={styleListItem}>
        <h2>With inline Button</h2>
        <MoleculeInputFieldWithState
          id="notes"
          label="Notes"
          value="In some place of La Mancha which name..."
          button={
            <SuiButton
              onClick={() => console.log('whatever you need to do on submit')}
            >
              Submit
            </SuiButton>
          }
        />
      </li>
    </ul>
  </div>
)
