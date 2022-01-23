import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomInput from '@s-ui/react-atom-input'

import {getErrorState, getState} from './config.js'

const MoleculeInputField = ({
  id,
  label,
  nodeLabel,
  successText,
  errorText,
  alertText,
  helpText,
  autoHideHelpText = false,
  inline,
  onChange,
  useContrastLabel,
  fullWidth,
  ...props
}) => {
  const errorState = getErrorState({successText, errorText})
  const inputState = getState({successText, errorState, alertText})
  const {disabled} = props

  return (
    <MoleculeField
      name={id}
      label={label}
      nodeLabel={nodeLabel}
      successText={successText}
      errorText={errorText}
      alertText={alertText}
      helpText={helpText}
      autoHideHelpText={autoHideHelpText}
      inline={inline}
      disabled={disabled}
      onChange={onChange}
      useContrastLabel={useContrastLabel}
      fullWidth={fullWidth}
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

  /** React node to be displayed as label if there is not a label */
  nodeLabel: PropTypes.element,

  /** used as label for attribute and input element id */
  id: PropTypes.string,

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
  inline: PropTypes.bool,

  /** Boolean to decide if the field is disabled or not */
  disabled: PropTypes.bool,

  /** Boolean to decide if helptext should be auto hide */
  autoHideHelpText: PropTypes.bool,

  /** label prop to use contrast type */
  useContrastLabel: PropTypes.bool,

  /** Flag to apply full-width */
  fullWidth: PropTypes.bool
}

export default MoleculeInputField
