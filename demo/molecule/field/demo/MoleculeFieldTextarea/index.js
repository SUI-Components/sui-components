/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '../../../../../components/molecule/field/src'
import AtomTextarea from '@s-ui/react-atom-textarea'

import WithCharacterCount from './hoc/WithCharacterCount'

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
  return (
    <MoleculeField {...props} label={label} name={id}>
      <AtomTextarea
        id={id}
        onChange={onChange}
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

FieldTextareaWithCharacterCount.defaultProps = {
  maxCharacters: 4000
}

FieldTextareaWithCharacterCount.propTypes = {
  /** Maximum number of characters allowed  */
  maxCharacters: PropTypes.number,

  /** Text `characters`  */
  textCharacters: PropTypes.string
}

export default FieldTextareaWithCharacterCount
