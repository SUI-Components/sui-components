/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeField from '@s-ui/react-molecule-field'
import FormInput from '@s-ui/react-form-input'

const AtomInput = ({
  id,
  label,
  successText,
  errorText,
  helpText,
  inline,
  ...props
}) => {
  const newProps = {...props}
  if (successText) newProps.errorState = false
  if (errorText) newProps.errorState = true

  return (
    <MoleculeField
      name={id}
      label={label}
      successText={successText}
      errorText={errorText}
      helpText={helpText}
      inline={inline}
    >
      <FormInput id={id} {...newProps} />
    </MoleculeField>
  )
}

AtomInput.displayName = 'AtomInput'

export default AtomInput
