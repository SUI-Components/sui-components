import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomTextarea, {
  AtomTextareaSizes as SIZES
} from '@s-ui/react-atom-textarea'

import WithCharacterCount from './hoc/WithCharacterCount'

const MoleculeTextareaField = WithCharacterCount(
  ({id, placeholder, onChange, maxChars, label, value, size, ...props}) => {
    return (
      <MoleculeField {...props} label={label} name={id}>
        <AtomTextarea
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          size={size}
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

  /** Success message to be displayed */
  successText: PropTypes.string,

  /** Error message to be displayed */
  errorText: PropTypes.string,

  /** Help Text to be displayed */
  helpText: PropTypes.string,

  /** Boolean to decide if field elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeTextareaField
