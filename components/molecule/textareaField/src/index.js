import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomTextarea, {
  AtomTextareaSizes as SIZES,
  AtomTextareaStates
} from '@s-ui/react-atom-textarea'
import WithCharacterCount from './hoc/WithCharacterCount'

const hasErrors = ({successText, errorText}) => {
  if (errorText) return true
  if (successText) return false
}

const getState = ({successText, errorState, alertText}) => {
  if (successText) return AtomTextareaStates.SUCCESS
  if (errorState) return AtomTextareaStates.ERROR
  if (alertText) return AtomTextareaStates.ALERT
}

const MoleculeTextareaField = WithCharacterCount(
  ({
    id,
    label,
    maxChars,
    textCharacters,
    successText,
    errorText,
    alertText,
    helpText,
    onChange,
    ...props
  }) => {
    const errorState = hasErrors({successText, errorText})
    const textAreaState = getState({successText, errorState, alertText})

    return (
      <MoleculeField
        name={id}
        label={label}
        textCharacters={textCharacters}
        successText={successText}
        errorText={errorText}
        alertText={alertText}
        helpText={helpText}
        maxChars={maxChars}
        onChange={onChange}
      >
        <AtomTextarea
          id={id}
          errorState={errorState}
          state={textAreaState}
          {...props}
        />
      </MoleculeField>
    )
  }
)

MoleculeTextareaField.displayName = 'MoleculeTextareaField'

MoleculeTextareaField.defaultProps = {
  maxChars: 4000
}

MoleculeTextareaField.propTypes = {
  /** Maximum number of characters allowed  */
  maxChars: PropTypes.number,

  /** Text `characters` to be used in the character count HelpText */
  textCharacters: PropTypes.string,

  /** placeholder og the textarea */
  placeholder: PropTypes.string,

  /** Size of textarea: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Handler triggered on change */
  onChange: PropTypes.func,

  /** Value (content) of the textarea */
  value: PropTypes.string,

  /** Text to be displayed as label */
  label: PropTypes.string,

  /** used as for attribute and textarea id */
  id: PropTypes.string,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Alert message to display when error state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if field elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeTextareaField
