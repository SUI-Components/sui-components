import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import FormInput from '@s-ui/react-form-input'

const getErrorState = (success, error) => {
  if (success) return false
  if (error) return true
}

const MoleculeInputField = ({
  id,
  label,
  successText,
  errorText,
  helpText,
  inline,
  ...props
}) => {
  const errorState = getErrorState(successText, errorText)

  return (
    <MoleculeField
      name={id}
      label={label}
      successText={successText}
      errorText={errorText}
      helpText={helpText}
      inline={inline}
    >
      <FormInput id={id} errorState={errorState} {...props} />
    </MoleculeField>
  )
}

MoleculeInputField.displayName = 'MoleculeInputField'

MoleculeInputField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string.isRequired,

  /** Success message to display when success state  */
  successText: PropTypes.string,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Help Text to display */
  helpText: PropTypes.string,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeInputField
