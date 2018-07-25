import React, {Component} from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import cx from 'classnames'

import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'

import '@s-ui/react-atom-validation-text/lib/index.scss'
import '@s-ui/react-atom-label/lib/index.scss'

const BASE_CLASS = 'sui-MoleculeFieldset'
const CLASS_INPUT = `${BASE_CLASS}-input`

class MoleculeFieldset extends Component {
  state = {
    value: this.props.children // eslint-disable-line react/prop-types
  }

  idLabelFor = `sui-MoleculeFieldset-${+new Date()}`

  getClassNames(inline) {
    return cx(BASE_CLASS, inline && `${BASE_CLASS}--inline`)
  }

  extendChildren(children) {
    const childrenOnly = React.Children.only(children)

    return React.Children.map(childrenOnly, child => {
      this.title = child.props.title
      const className = CLASS_INPUT
      const {idLabelFor: id} = this
      return React.cloneElement(child, {
        id,
        className
      })
    })
  }

  getTypeValidation(element) {
    if (this.props.successText) {
      if (element === 'label') return AtomLabelTypes.SUCCESS
      if (element === 'validationText') return AtomValidationTextTypes.SUCCESS
    }
    if (this.props.errorText) {
      if (element === 'label') return AtomLabelTypes.ERROR
      if (element === 'validationText') return AtomValidationTextTypes.ERROR
    }
  }

  get statusValidationText() {
    if (this.props.successText) return this.props.successText
    if (this.props.errorText) return this.props.errorText
  }

  render() {
    const {label, inline, successText, errorText, children} = this.props
    return (
      <div className={this.getClassNames(inline)}>
        <AtomLabel
          type={this.getTypeValidation('label')}
          name={this.idLabelFor}
          for={this.idLabelFor}
          text={label}
        />
        <div>
          {this.extendChildren(children)}
          {(successText || errorText) && (
            <AtomValidationText
              type={this.getTypeValidation('validationText')}
              text={this.statusValidationText}
            />
          )}
        </div>
      </div>
    )
  }
}

MoleculeFieldset.displayName = 'MoleculeFieldset'

MoleculeFieldset.propTypes = {
  /** Text to be displayed as label of the textarea */
  label: PropTypes.string.isRequired,

  /** Sucess message to display when sucess state  */
  successText: PropTypes.string,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool
}

export default MoleculeFieldset
