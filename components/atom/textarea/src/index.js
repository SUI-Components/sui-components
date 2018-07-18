import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'

const BASE_CLASS = 'sui-AtomTextarea'

class AtomTextarea extends Component {
  state = {
    value: this.props.children // eslint-disable-line react/prop-types
  }
  refTextarea = React.createRef()
  id = this.props.id || `sui-AtomTextarea-${+new Date()}`

  handleChange = e => {
    const value = e.target.value
    if (value.length > this.props.maxcharacters) return
    this.setState({value})
  }

  get helpTextContent() {
    return `${this.state.value.length}/${this.props.maxcharacters} characters`
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
    if (this.props.success) return this.props.successtext
    if (this.props.error) return this.props.errortext
  }

  render() {
    const {disabled, success, error, ...props} = this.props
    return (
      <Fragment>
        <AtomLabel
          type={this.getTypeValidation('label')}
          name={this.id}
          for={this.id}
          text="Hello label"
        />
        <textarea
          {...props}
          ref={this.refTextarea}
          onChange={this.handleChange}
          disabled={disabled}
          id={this.id}
          className={BASE_CLASS}
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

AtomTextarea.displayName = 'AtomTextarea'

// Remove these comments if you need
// AtomTextarea.contextTypes = {i18n: PropTypes.object}
// AtomTextarea.propTypes = {}
// AtomTextarea.defaultProps = {}

AtomTextarea.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  maxcharacters: PropTypes.number,
  successtext: PropTypes.string,
  errortext: PropTypes.string
}

AtomTextarea.defaultProps = {
  maxcharacters: 100,
  successtext: 'Success validation text',
  errortext: 'Error validation text'
}

export default AtomTextarea
