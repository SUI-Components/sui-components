import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeSelect from '@s-ui/react-molecule-select'

const hasErrors = (success, error) => {
  if (error) return true
  if (success) return false
}

const MoleculeSelectField = ({
  children,
  errorText,
  helpText,
  id,
  inline,
  label,
  successText,
  onChange,
  ...props
}) => {
  const refSelect = useRef()

  const handleClick = () => {
    const {current: domSelect} = refSelect
    if (domSelect) domSelect.focus()
  }

  const errorState = hasErrors(successText, errorText)

  return (
    <MoleculeField
      errorText={errorText}
      helpText={helpText}
      inline={inline}
      label={label}
      name={id}
      onChange={onChange}
      onClickLabel={handleClick}
      successText={successText}
    >
      <MoleculeSelect
        errorState={errorState}
        refMoleculeSelect={refSelect}
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
  successText: PropTypes.string
}

export default MoleculeSelectField
