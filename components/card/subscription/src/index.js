import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'
import FormCheckbox from '@schibstedspain/sui-form-checkbox'
import cx from 'classnames'

export default class CardSubscription extends Component {
  state = {
    termsOfUseAccepted: false,
    showErrorMessage: false
  }

  input = null

  _handleCheckboxChange = () => {
    const {termsOfUseAccepted} = this.state

    this.setState({
      termsOfUseAccepted: !termsOfUseAccepted,
      showErrorMessage: false
    })
  }

  _getCheckboxError = () =>
    this.state.showErrorMessage && this.props.checkboxErrorMessage
      ? this.props.checkboxErrorMessage
      : null

  _handleSubmit = event => {
    const {onSubmit} = this.props
    const {termsOfUseAccepted} = this.state

    event.preventDefault()
    this.setState({showErrorMessage: !termsOfUseAccepted})
    termsOfUseAccepted && onSubmit(this.input.value)
  }

  _printCardContent = ({termsOfUseAccepted}) => {
    const {
      placeholder,
      iconButton,
      responseError,
      checkboxName,
      checkboxLabel,
      checkboxIcons
    } = this.props
    const IconAngle = iconButton || Chevronright
    const inputClassName = cx('sui-CardSubscription-input', {
      'has-error': !!responseError
    })

    return (
      <form onSubmit={this._handleSubmit} className="sui-CardSubscription-form">
        <div className="sui-CardSubscription-formField">
          <input
            className={inputClassName}
            placeholder={placeholder}
            ref={node => {
              this.input = node
            }}
          />
          <button type="submit" className="sui-CardSubscription-button">
            <IconAngle svgClass="sui-CardSubscription-buttonIcon" />
          </button>
        </div>
        {checkboxName && (
          <div className="sui-CardSubscription-formCheck">
            <FormCheckbox
              name={checkboxName}
              checked={termsOfUseAccepted}
              onChange={this._handleCheckboxChange}
              label={checkboxLabel}
              errorMessage={this._getCheckboxError()}
              svgIcons={checkboxIcons}
            />
          </div>
        )}
      </form>
    )
  }

  render() {
    const {responseContent: ResponseContent, responseError, title} = this.props
    const {termsOfUseAccepted} = this.state

    return (
      <div>
        {(!ResponseContent || !!responseError) && (
          <div className="sui-CardSubscription">
            <div className="sui-CardSubscription-content">
              <p className="sui-CardSubscription-title">{title}</p>
              {this._printCardContent({termsOfUseAccepted})}
              {ResponseContent && responseError && <ResponseContent />}
            </div>
          </div>
        )}
        {ResponseContent && !responseError && <ResponseContent />}
      </div>
    )
  }
}

CardSubscription.propTypes = {
  /**
   * Handler triggered on submit form
   */
  onSubmit: PropTypes.func.isRequired,

  /**
   * Input placeholder
   */
  placeholder: PropTypes.string.isRequired,

  /**
   * Card title
   */
  title: PropTypes.string.isRequired,

  /**
   * Button custom icon (React component).
   */
  iconButton: PropTypes.func,

  /**
   * Response HTML
   */
  responseContent: PropTypes.func,

  /**
   * Response error flag
   */
  responseError: PropTypes.bool,

  /**
   * Checkbox name
   */
  checkboxName: PropTypes.string,

  /**
   * Checkbox label
   */
  checkboxLabel: PropTypes.node,

  /**
   * Checkbox error message
   */
  checkboxErrorMessage: PropTypes.string,

  /**
   * Checkbox icons (checked and unchecked)
   */
  checkboxIcons: PropTypes.object
}

CardSubscription.displayName = 'CardSubscription'
