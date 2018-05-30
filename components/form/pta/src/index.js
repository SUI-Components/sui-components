import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-FormPta'
const CONTENT_CLASS = `${BASE_CLASS}-content`

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

    contentWindow.postMessage(formSettings, formUrl)
  }

  render () {
    const { props: { formUrl }, sendSettingsToForm } = this

    return (
      <div className={BASE_CLASS}>
        <iframe
          className={CONTENT_CLASS}
          src={formUrl}
          onLoad={sendSettingsToForm}
        />
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
  redirectOnSuccessUrl: PropTypes.string.isRequired,
}

FormPta.defaultProps = {
  enableDraft: false
}

export default FormPta
