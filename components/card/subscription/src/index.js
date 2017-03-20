import React, {Component, PropTypes} from 'react'
import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'
import cx from 'classnames'

export default class CardSubscription extends Component {
  input = null

  _handleSubmit = (event) => {
    const {onSubmit} = this.props
    event.preventDefault()
    onSubmit(this.input.value)
  }

  _printCardContent = () => {
    const { placeholder, iconButton, title, status } = this.props
    const IconAngle = iconButton || Chevronright
    const inputClassName = cx('sui-CardSubscription-input', {
      'has-error': status === 'fail'
    })
    return (
      <div>
        <p className='sui-CardSubscription-title'>{title}</p>
        <form onSubmit={this._handleSubmit} className='sui-CardSubscription-form'>
          <input
            className={inputClassName} placeholder={placeholder}
            type='email'
            ref={node => { this.input = node }}
            required
          />
          <button type='submit' className='sui-CardSubscription-button'>
            <IconAngle svgClass='sui-CardSubscription-buttonIcon' />
          </button>
        </form>
      </div>
    )
  }

  _printResponse = () => {
    const { responseContent: ResponseContent } = this.props
    return (
      <div>
        <ResponseContent />
      </div>
    )
  }

  render () {
    const { responseContent, status } = this.props
    return (
      <div className='sui-CardSubscription'>
        <div className='sui-CardSubscription-content'>
          {(responseContent === null || status === 'fail') &&
            this._printCardContent()
          }
          {responseContent &&
            this._printResponse()
          }
        </div>
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
  responseContent: PropTypes.element,

  /**
   * Response Status
   */
  status: PropTypes.string
}

CardSubscription.displayName = 'CardSubscription'
