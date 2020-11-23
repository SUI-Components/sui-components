import {useRef} from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeAutosuggest, {
  MoleculeAutosuggestStates
} from '@s-ui/react-molecule-autosuggest'

const getErrorState = ({successText, errorText}) => {
  if (successText) return false
  if (errorText) return true
}

const getState = ({successText, errorState, alertText}) => {
  if (successText) return MoleculeAutosuggestStates.SUCCESS
  if (errorState) return MoleculeAutosuggestStates.ERROR
  if (alertText) return MoleculeAutosuggestStates.ALERT
}

function MoleculeAutosuggestField({
  alertText,
  children,
  errorText,
  helpText,
  id,
  inline,
  label,
  onChange,
  successText,
  useContrastLabel,
  ...restProps
}) {
  const refAutosuggest = useRef()

  const handleClick = () => {
    const {current: domAutosuggest} = refAutosuggest
    if (domAutosuggest) domAutosuggest.focus()
  }

  const errorState = getErrorState({successText, errorText})
  const autosuggestState = getState({successText, errorState, alertText})

  return (
    <MoleculeField
      name={id}
      label={label}
      successText={successText}
      errorText={errorText}
      alertText={alertText}
      helpText={helpText}
      inline={inline}
      onClickLabel={handleClick}
      onChange={onChange}
      useContrastLabel={useContrastLabel}
    >
      <MoleculeAutosuggest
        id={id}
        refMoleculeAutosuggest={refAutosuggest}
        errorState={errorState}
        state={autosuggestState}
        {...restProps}
      >
        {children}
      </MoleculeAutosuggest>
    </MoleculeField>
  )
}

MoleculeAutosuggestField.displayName = 'MoleculeAutosuggestField'

MoleculeAutosuggestField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and Autosuggest element id */
  id: PropTypes.string.isRequired,

  /** Success message to display when success state  */
  successText: PropTypes.string,

  /* onChange callback */
  onChange: PropTypes.func,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Alert message to display when alert state  */
  alertText: PropTypes.string,

  /** Help Text to display */
  helpText: PropTypes.string,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** Boolean, if true it will use contrast label */
  useContrastLabel: PropTypes.string,

  /** A React element */
  children: PropTypes.element
}

export default MoleculeAutosuggestField
export {MoleculeAutosuggestStates}
