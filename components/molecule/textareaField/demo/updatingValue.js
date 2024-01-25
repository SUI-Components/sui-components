import {useState} from 'react'

import MoleculeTextareaField from 'components/molecule/textareaField/src'

import Button from '@s-ui/react-atom-button'

export default () => {
  const [value, setValue] = useState('Click the button')

  const onClick = () => {
    const got = ['Tyrion', 'Jon', 'Daenerys', 'Arya', 'Tywin', 'Brienne', 'Petyr']
    const random = Math.floor(Math.random() * got.length)
    const value = got[random]
    setValue(value)
  }
  return (
    <>
      <p>value: {value}</p>
      <MoleculeTextareaField
        onChange={(ev, {value: newValue}) => {
          setValue(newValue)
        }}
        value={value}
      />
      <Button onClick={onClick}>Choose your favorite</Button>
    </>
  )
}
