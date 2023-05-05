import {useState} from 'react'

import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import MoleculePhoneValidation from '../src/index.js'
import {phoneValidationType} from '../src/settings.js'

const prefixes = [
  {value: 'ES', label: 'España', countryCode: '+34'},
  {value: 'FR', label: 'Francia', countryCode: '+33'},
  {value: 'PT', label: 'Portugal', countryCode: '+351'},
  {value: 'AD', label: 'Andorra', countryCode: '+376'}
]

export const icon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export default () => {
  const [phone, setPhone] = useState('')

  return (
    <>
      <h1>Phone Validation Demo</h1>
      <br />
      <h2>Default</h2>
      <MoleculePhoneValidation
        phone={phone}
        setPhone={setPhone}
        dropdownIcon={icon}
        prefixes={prefixes}
      />
      <br />
      <h2>Splitted</h2>
      <MoleculePhoneValidation
        type={phoneValidationType.SPLITTED}
        phone={phone}
        setPhone={setPhone}
        dropdownIcon={icon}
        prefixes={prefixes}
      />
    </>
  )
}
