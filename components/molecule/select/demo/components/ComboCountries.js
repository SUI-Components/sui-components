/* eslint-disable no-console */
import {useState} from 'react'

import axios from 'axios'

import {withStateValue} from '@s-ui/hoc'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect from '../../src/index.js'
import regions from '../data/regions.json'
import {IconArrowDown} from '../Icons/index.js'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const getCountriesByRegion = region => {
  const url = `https://restcountries.eu/rest/v2/regionalbloc/${region}`
  return axios.get(url).then(({data}) => data)
}

const ComboCountries = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState()

  const handleRegionChange = (_, {value: region}) => {
    console.log({region})
    getCountriesByRegion(region)
      .then(countries =>
        countries.map(({alpha3Code: code, name}) => ({
          code,
          name
        }))
      )
      .then(setCountries)
      .then(() => setSelectedCountry())
  }

  const handleCountryChange = (_, {value: country}) => {
    console.log({country})
    setSelectedCountry(country)
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '50%', margin: '0 10px'}}>
        <MoleculeSelectWithState
          placeholder="Select a Region..."
          iconArrowDown={<IconArrowDown />}
          onChange={handleRegionChange}
        >
          {regions.map(({code, text}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {text}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>
      <div style={{width: '50%', margin: '0 10px'}}>
        <MoleculeSelectWithState
          placeholder="Select a Country..."
          onChange={handleCountryChange}
          iconArrowDown={<IconArrowDown />}
          disabled={!countries.length}
          value={selectedCountry}
        >
          {countries.map(({code, name}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {name}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>
    </div>
  )
}
export default ComboCountries
