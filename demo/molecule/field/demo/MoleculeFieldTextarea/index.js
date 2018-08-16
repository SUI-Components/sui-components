/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeField from '../../../../../components/molecule/field/src'
import AtomTextarea from '@s-ui/react-atom-textarea/src/index'

import WithCharacterCount from './hoc/WithCharacterCount'

console.log(AtomTextarea)

const MoleculeFieldTextarea = ({
  id,
  placeholder,
  onChange,
  maxCharacters,
  label,
  value,
  name,
  ...props
}) => {
  // console.log('MoleculeFieldTextarea')
  // console.log({
  //   id,
  //   placeholder,
  //   onChange,
  //   maxCharacters,
  //   label,
  //   value,
  //   ...props
  // })
  return (
    <MoleculeField {...props} label={label} name={id}>
      <AtomTextarea
        id={id}
        onChange={onChange}
        maxCharacters={maxCharacters}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </MoleculeField>
  )
}

const FieldTextareaWithCharacterCount = WithCharacterCount(
  MoleculeFieldTextarea
)
FieldTextareaWithCharacterCount.displayName = 'MoleculeFieldTextarea'

export default FieldTextareaWithCharacterCount
