import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomInput, {inputStates} from '@s-ui/react-atom-input'

const getErrorState = (success, error) => {
  if (success) return false
  if (error) return true
}

const getState = (success, error, alert) => {
  if (success) return inputStates.SUCCESS
  if (error) return inputStates.ERROR
  if (alert) return inputStates.ALERT
}

const MoleculeInputField = ({
  id,
  label,
  successText,
  errorText,
  alertText,
  helpText,
  inline,
  onChange,
  ...props
}) => {
  const errorState = getErrorState(successText, errorText)
  const inputState = getState(successText, errorState, alertText)

  return (
    <MoleculeField
      name={id}
      label={label}
      successText={successText}
      errorText={errorText}
      alertText={alertText}
      helpText={helpText}
      inline={inline}
      onChange={onChange}
    >
      <AtomInput
        id={id}
        errorState={errorState}
        state={inputState}
        {...props}
      />
    </MoleculeField>
  )
}

MoleculeInputField.displayName = 'MoleculeInputField'

MoleculeInputField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string.isRequired,

  /* onChange callback */
  onChange: PropTypes.func,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Alert message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeInputField
