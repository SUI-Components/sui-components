import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import cx from 'classnames'

import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'

const BASE_CLASS = 'sui-MoleculeFieldset'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

class MoleculeFieldset extends Component {
  state = {
    value: this.props.children // eslint-disable-line react/prop-types
  }
  refTextarea = React.createRef()
  id = this.props.id || `sui-MoleculeFieldset-${+new Date()}` // eslint-disable-line react/prop-types

  get classNames() {
    const {size} = this.props
    return cx(BASE_CLASS, `${BASE_CLASS}--${size}`)
  }

  handleChange = e => {
    const value = e.target.value
    if (value.length > this.props.maxCharacters) return
    this.setState({value})
  }

  get helpTextContent() {
    const numCharacters = this.state.value ? this.state.value.length : 0
    return `${numCharacters}/${this.props.maxCharacters} characters`
  }

  getTypeValidation(element) {
    if (this.props.success) {
      if (element === 'label') return AtomLabelTypes.SUCCESS
      if (element === 'validationText') return AtomValidationTextTypes.SUCCESS
    }
    if (this.props.error) {
      if (element === 'label') return AtomLabelTypes.ERROR
      if (element === 'validationText') return AtomValidationTextTypes.ERROR
    }
  }

  get statusValidationText() {
    if (this.props.success) return this.props.successText
    if (this.props.error) return this.props.errorText
  }

  render() {
    const {
      size,
      label,
      maxCharacters,
      successText,
      errorText,
      success,
      error,
      ...props
    } = this.props
    return (
      <Fragment>
        <AtomLabel
          type={this.getTypeValidation('label')}
          name={this.id}
          for={this.id}
          text={label}
        />
        <textarea
          {...props}
          ref={this.refTextarea}
          onChange={this.handleChange}
          id={this.id}
          className={this.classNames}
          value={this.state.value}
        />
        {(success || error) && (
          <AtomValidationText
            type={this.getTypeValidation('validationText')}
            text={this.statusValidationText}
          />
        )}
        <AtomHelpText text={this.helpTextContent} />
      </Fragment>
    )
  }
}

MoleculeFieldset.displayName = 'MoleculeFieldset'

MoleculeFieldset.propTypes = {
  /** Text to be displayed as label of the textarea */
  label: PropTypes.string.isRequired,

  /** Size of button: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Sucess state of the component */
  success: PropTypes.bool,

  /** Error state of the component */
  error: PropTypes.bool,

  /** Sucess message to display when sucess state  */
  successText: PropTypes.string,

  /** Error message to display when error state  */
  errorText: PropTypes.string,

  /** Maximum nomber of characters allowed  */
  maxCharacters: PropTypes.number
}

MoleculeFieldset.defaultProps = {
  size: SIZES.SHORT,
  maxCharacters: 4000
}

export default MoleculeFieldset
export {SIZES as MoleculeFieldsetSizes}
