/* eslint-disable no-console */
import React, {useState} from 'react'
import axios from 'axios'
import {withStateValue} from '@s-ui/hoc'

import MoleculeAutosuggest from '../../../../../components/molecule/autosuggest/src'

import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import regions from '../data/regions.json'

const MoleculeAutosuggestWithState = withStateValue(MoleculeAutosuggest)

const getCountriesByRegion = region => {
  const url = `https://restcountries.eu/rest/v2/regionalbloc/${region}`
  return axios.get(url).then(({data}) => data)
}

const ComboCountries = () => {
  const [countries, setCountries] = useState([])

  const handleChange = (_, {value: region}) => {
    console.log({region})
    getCountriesByRegion(region)
      .then(countries =>
        countries.map(({alpha3Code: code, name}) => ({
          code,
          name
        }))
      )
      .then(setCountries)
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '50%', margin: '0 10px'}}>
        <MoleculeAutosuggestWithState
          placeholder="Select a Region..."
          onChange={handleChange}
        >
          {regions.map(({code, text}, i) => (
            <MoleculeAutosuggestOption key={i} value={code}>
              {text}
            </MoleculeAutosuggestOption>
          ))}
        </MoleculeAutosuggestWithState>
      </div>
      <div style={{width: '50%', margin: '0 10px'}}>
        <MoleculeAutosuggestWithState
          placeholder="Select a Country..."
          onChange={(_, {value: country}) => console.log({country})}
          disabled={!countries.length}
        >
          {countries.map(({code, name}, i) => (
            <MoleculeAutosuggestOption key={i} value={code}>
              {name}
            </MoleculeAutosuggestOption>
          ))}
        </MoleculeAutosuggestWithState>
      </div>
    </div>
  )
}
export default ComboCountries
