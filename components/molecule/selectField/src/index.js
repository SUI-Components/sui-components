import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import MoleculeSelect from '@s-ui/react-molecule-select'

const hasErrors = (success, error) => {
  if (error) return true
  if (success) return false
}

class MoleculeSelectField extends Component {
  refSelect = React.createRef()

  handleClick = () => {
    const {current: domSelect} = this.refSelect
    if (domSelect) domSelect.focus()
  }

  render() {
    const {refSelect, handleClick} = this
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
        <MoleculeSelect
          refMoleculeSelect={refSelect}
          errorState={errorState}
          {...props}
        >
          {children}
        </MoleculeSelect>
      </MoleculeField>
    )
  }
}

MoleculeSelectField.displayName = 'MoleculeSelectField'

MoleculeSelectField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and Select element id */
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

export default MoleculeSelectField
