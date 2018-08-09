import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'
import AtomHelpText from '@s-ui/react-atom-help-text'

const BASE_CLASS = 'sui-MoleculeField'

class MoleculeField extends Component {
  getClassNames(inline) {
    return cx(BASE_CLASS, inline && `${BASE_CLASS}--inline`)
  }

  getTypeValidation(element) {
    if (this.props.errorText) {
      if (element === 'label') return AtomLabelTypes.ERROR
      if (element === 'validationText') return AtomValidationTextTypes.ERROR
    }
    if (this.props.successText) {
      if (element === 'label') return AtomLabelTypes.SUCCESS
      if (element === 'validationText') return AtomValidationTextTypes.SUCCESS
    }
  }

  get statusValidationText() {
    if (this.props.errorText) return this.props.errorText
    if (this.props.successText) return this.props.successText
  }

  render() {
    const {
      label,
      helpText,
      name,
      inline,
      successText,
      errorText,
      children // eslint-disable-line react/prop-types
    } = this.props
    return (
      <div className={this.getClassNames(inline)}>
        <AtomLabel
          type={this.getTypeValidation('label')}
          name={name}
          text={label}
        />
        <div>
          {children}
          {(successText || errorText) && (
            <AtomValidationText
              type={this.getTypeValidation('validationText')}
              text={this.statusValidationText}
            />
          )}
          <AtomHelpText text={helpText} />
        </div>
      </div>
    )
  }
}

MoleculeField.displayName = 'MoleculeField'

MoleculeField.propTypes = {
  /** Text to be displayed as label of the textarea */
  label: PropTypes.string.isRequired,

  /** used as for attribute. Must be the same as the input element id */
  name: PropTypes.string.isRequired,

  /** Success message to display when success state  */
  successText: PropTypes.string,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Help Text to display */
  helpText: PropTypes.string,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeField
