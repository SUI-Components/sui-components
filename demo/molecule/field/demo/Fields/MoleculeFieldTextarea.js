/* eslint-disable react/prop-types */

import React from 'react'

import MoleculeField from '../../../../../components/molecule/field/src'
import AtomTextarea from '@s-ui/react-atom-textarea'

import WithCharacterCount from '../hoc/WithCharacterCount'

const MoleculeFieldTextarea = ({
  id,
  placeholder,
  label,
  children,
  ...props
}) => {
  return (
    <MoleculeField {...props} label={label} name={id}>
      <AtomTextarea id={id} placeholder={placeholder}>
        {children}
      </AtomTextarea>
    </MoleculeField>
  )
}

const FieldTextareaWithCharacterCount = WithCharacterCount(
  MoleculeFieldTextarea
)
FieldTextareaWithCharacterCount.displayName = 'MoleculeFieldTextarea'

export default FieldTextareaWithCharacterCount
