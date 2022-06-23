/* eslint-disable no-console */
import {useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import {withStateValue} from '@s-ui/hoc'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect from '../../src/index.js'
import regions from '../data/regions.json'
import {IconArrowDown} from '../Icons/index.js'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const MoleculeSelectUseEffect = props => {
  const {value} = props
  console.log('initial value: ', value)
  const handleRegionChange = (_, {value: region}) => {
    console.log({region})
    setCurrentValue(region)
  }
  const [options, setOptions] = useState([])
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    const getRegions = async () => {
      setOptions(regions)
    }
    getRegions()
  }, [])

  return (
    <MoleculeSelectWithState
      placeholder="Select a Region..."
      iconArrowDown={<IconArrowDown />}
      onChange={handleRegionChange}
      value={currentValue}
    >
      {options.map(({code, text}, i) => (
        <MoleculeSelectOption key={i} value={code}>
          {text}
        </MoleculeSelectOption>
      ))}
    </MoleculeSelectWithState>
  )
}

MoleculeSelectUseEffect.propTypes = {
  value: PropTypes.string
}

export default MoleculeSelectUseEffect
