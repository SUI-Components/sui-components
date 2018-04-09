import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'
import cx from 'classnames'

export default class CardSubscription extends Component {
  input = null

  _handleSubmit = event => {
    const {onSubmit} = this.props
    event.preventDefault()
    onSubmit(this.input.value)
  }

  _printCardContent = () => {
    const {placeholder, iconButton, responseError} = this.props
    const IconAngle = iconButton || Chevronright
    const inputClassName = cx('sui-CardSubscription-input', {
      'has-error': !!responseError
    })
    return (
      <form onSubmit={this._handleSubmit} className='sui-CardSubscription-form'>
        <input
          className={inputClassName}
          placeholder={placeholder}
          ref={node => {
            this.input = node
          }}
        />
        <button type='submit' className='sui-CardSubscription-button'>
          <IconAngle svgClass='sui-CardSubscription-buttonIcon' />
        </button>
      </form>
    )
  }

  render () {
    const {responseContent: ResponseContent, responseError, title} = this.props
    return (
      <div>
        {(!ResponseContent || !!responseError) && (
          <div className='sui-CardSubscription'>
            <div className='sui-CardSubscription-content'>
              <p className='sui-CardSubscription-title'>{title}</p>
              {this._printCardContent()}
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
  responseError: PropTypes.bool
}

CardSubscription.displayName = 'CardSubscription'
