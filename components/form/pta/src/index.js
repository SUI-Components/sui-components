import React, {Component, createRef} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-FormPta'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const SEND_SETTINGS_TO_PTA = 'SEND_SETTINGS_TO_PTA'
const REMOVE_DRAFT = 'REMOVE_DRAFT'

class FormPta extends Component {
  _iframeRef = createRef()

  /**
   * Avoid iframe re-rendering
   */
  shouldComponentUpdate() {
    return false
  }

  /**
   * Send settings to iframe content form
   */
  sendSettingsToForm = ({target: {contentWindow}}) => {
    const {
      redirectOnErrorUrl,
      formUrl,
      enableDraft,
      draftId,
      redirectOnSuccessUrl
    } = this.props
    const formSettings = {
      enableDraft,
      draftId,
      formUrl,
      exitURLs: {
        success: redirectOnSuccessUrl,
        error: redirectOnErrorUrl
      }
    }
    contentWindow.postMessage(
      {
        payload: formSettings,
        type: SEND_SETTINGS_TO_PTA
      },
      formUrl
    )
  }

  removeDraft(draftId) {
    const {formUrl} = this.props
    const {contentWindow} = this._iframeRef.current

    contentWindow.postMessage(
      {
        type: REMOVE_DRAFT,
        payload: {
          draftId
        }
      },
      formUrl
    )
  }

  render() {
    const {
      props: {formUrl},
      sendSettingsToForm,
      _iframeRef
    } = this

    return (
      <div className={BASE_CLASS}>
        <iframe
          ref={_iframeRef}
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
   * Draft id
   */
  draftId: PropTypes.string,
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
