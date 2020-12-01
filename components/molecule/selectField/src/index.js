import {useRef} from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeSelect, {moleculeSelectStates} from '@s-ui/react-molecule-select'

const hasErrors = ({successText, errorText}) => {
  if (errorText) return true
  if (successText) return false
}

const getState = ({successText, errorState, alertText}) => {
  if (successText) return moleculeSelectStates.SUCCESS
  if (errorState) return moleculeSelectStates.ERROR
  if (alertText) return moleculeSelectStates.ALERT
}

const MoleculeSelectField = ({
  children,
  errorText,
  helpText,
  id,
  inline,
  label,
  successText,
  alertText,
  onChange: handleChange,
  ...props
}) => {
  const refSelect = useRef()

  const handleClick = () => {
    const {current: domSelect} = refSelect
    if (domSelect) domSelect.focus()
  }

  const errorState = hasErrors({successText, errorText})
  const selectState = getState({successText, errorState, alertText})

  return (
    <MoleculeField
      errorText={errorText}
      helpText={helpText}
      inline={inline}
      label={label}
      name={id}
      onChange={handleChange}
      onClickLabel={handleClick}
      successText={successText}
      alertText={alertText}
    >
      <MoleculeSelect
        errorState={errorState}
        refMoleculeSelect={refSelect}
        state={selectState}
        id={id}
        {...props}
      >
        {children}
      </MoleculeSelect>
    </MoleculeField>
  )
}

MoleculeSelectField.displayName = 'MoleculeSelectField'

MoleculeSelectField.propTypes = {
  /** cnhildren */
  children: PropTypes.any,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Help Text to display */
  helpText: PropTypes.string,

  /** used as label for attribute and Select element id */
  id: PropTypes.string.isRequired,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /* onChange callback */
  onChange: PropTypes.func,

  /** Success message to display when success state  */
  successText: PropTypes.string,

  /** Alert message to display when alert state  */
  alertText: PropTypes.string
}

export default MoleculeSelectField
