import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const BASE_CLASS = 'sui-FormPta'

class FormPta extends Component {
  /**
   * Avoid iframe re-rendering
   */
  shouldComponentUpdate () {
    return false
  }

  /**
   * Send settings to iframe content form
   */
  sendSettingsToForm = ({ target: { contentWindow } }) => {
    const { redirectOnErrorUrl, formUrl, enableDraft, redirectOnSuccessUrl } = this.props
    const formSettings = {
      enableDraft,
      formUrl,
      exitURLs: {
        success: redirectOnSuccessUrl,
        error: redirectOnErrorUrl
      }
    }

    contentWindow.postMessage(formSettings, '*')
  }

  render () {
    const { props: { formUrl }, sendSettingsToForm } = this

    return (
      <div>
        <h1>PTA Form builder</h1>
        <div className='sui-FormPta'>
          <iframe
            className='sui-FormPta-content'
            src={formUrl}
            onLoad={sendSettingsToForm}
          />
        </div>
      </div>
    )
  }
}

FormPta.displayName = 'FormPta'

FormPta.propTypes = {
  /**
   * Save current form state in local storage
   */
  enableDraft: PropTypes.bool,
  /**
   * Form url
   */
  formUrl: PropTypes.string.isRequired,
  /**
   * Redirection url on error
   */
  redirectOnErrorUrl: PropTypes.string.isRequired,
  /**
   * Redirection url on success
   */
  redirectOnSuccessUrl: PropTypes.string.isRequired
}

FormPta.defaultProps = {
  enableDraft: false
}

export default FormPta
