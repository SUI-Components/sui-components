import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeAutosuggest from '@s-ui/react-molecule-autosuggest'

const hasErrors = (success, error) => {
  if (error) return true
  if (success) return false
}

class MoleculeAutosuggestField extends Component {
  refAutosuggest = React.createRef()

  handleClick = () => {
    const {current: domAutosuggest} = this.refAutosuggest
    if (domAutosuggest) domAutosuggest.focus()
  }

  render() {
    const {refAutosuggest, handleClick} = this
    const {
      label,
      id,
      successText,
      errorText,
      helpText,
      inline,
      children, // eslint-disable-line
      ...props
    } = this.props
    const errorState = hasErrors(successText, errorText)
    return (
      <MoleculeField
        name={id}
        label={label}
        successText={successText}
        errorText={errorText}
        helpText={helpText}
        inline={inline}
        onClickLabel={handleClick}
      >
        <MoleculeAutosuggest
          refMoleculeAutosuggest={refAutosuggest}
          errorState={errorState}
          {...props}
        >
          {children}
        </MoleculeAutosuggest>
      </MoleculeField>
    )
  }
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

  /** Help Text to display */
  helpText: PropTypes.string,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeAutosuggestField
