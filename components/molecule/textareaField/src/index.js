import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomTextarea, {
  AtomTextareaSizes as SIZES
} from '@s-ui/react-atom-textarea'
import WithCharacterCount from './hoc/WithCharacterCount'

const MoleculeTextareaField = WithCharacterCount(
  ({
    id,
    label,
    maxChars,
    textCharacters,
    successText,
    errorText,
    helpText,
    onChange,
    ...props
  }) => {
    const hasErrors = (success, error) => {
      if (error) return true
      if (success) return false
    }
    const errorState = hasErrors(successText, errorText)
    return (
      <MoleculeField
        name={id}
        label={label}
        textCharacters={textCharacters}
        successText={successText}
        errorText={errorText}
        helpText={helpText}
        maxChars={maxChars}
        onChange={onChange}
      >
        <AtomTextarea id={id} errorState={errorState} {...props} />
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

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if field elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeTextareaField
