/* eslint-disable no-console */
import React, {useState} from 'react'
import axios from 'axios'
import {withStateValue} from '@s-ui/hoc'

import MoleculeSelect from '../../../../../components/molecule/select/src'
import MoleculeAutosuggest from '../../../../../components/molecule/autosuggest/src'

import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import regions from '../data/regions.json'

const IconArrowDown = () => (
  <svg>
    <defs>
      <path
        id="a"
        d="M14.5 18.5a1 1 0 0 1-.71-.29l-4.08-4.08a3 3 0 0 1 0-4.24l4.09-4.1a1 1 0 0 1 1.41 1.41l-4.09 4.1a1 1 0 0 0 0 1.41l4.08 4.08a1 1 0 0 1-.71 1.71h.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use
        fill="#666"
        fillRule="nonzero"
        transform="matrix(0 -1 -1 0 24.189 24.189)"
        xlinkHref="#a"
      />
    </g>
  </svg>
)

const MoleculeSelectWithState = withStateValue(MoleculeSelect)
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
        <MoleculeSelectWithState
          placeholder="Select a Region..."
          onChange={handleChange}
          iconArrowDown={<IconArrowDown />}
        >
          {regions.map(({code, text}, i) => (
            <MoleculeDropdownOption key={i} value={code}>
              {text}
            </MoleculeDropdownOption>
          ))}
        </MoleculeSelectWithState>
      </div>
      <div style={{width: '50%', margin: '0 10px'}}>
        <MoleculeAutosuggestWithState
          placeholder="Select a Country..."
          onChange={(_, {value: country}) => console.log({country})}
          disabled={!countries.length}
        >
          {countries.map(({code, name}, i) => (
            <MoleculeDropdownOption key={i} value={name}>
              {name}
            </MoleculeDropdownOption>
          ))}
        </MoleculeAutosuggestWithState>
      </div>
    </div>
  )
}
export default ComboCountries
