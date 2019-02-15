import React, {Component} from 'react'

import MoleculeAutosuggest from '../../../../../components/molecule/autosuggest/src'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import {getAsyncCountriesFromQuery} from '../services'

export default class AutosuggestSingleWithAsyncOptions extends Component {
  state = {value: '', options: []}

  onChange = async (e, {value}) => {
    this.setState({value})
    const options = await getAsyncCountriesFromQuery({query: value})
    this.setState({options})
  }

  render() {
    const {options, value} = this.state
    const {onChange, props} = this

    return (
      <MoleculeAutosuggest {...props} value={value} onChange={onChange}>
        {options.map((option, i) => (
          <MoleculeAutosuggestOption key={i} value={option}>
            {option}
          </MoleculeAutosuggestOption>
        ))}
      </MoleculeAutosuggest>
    )
  }
}
