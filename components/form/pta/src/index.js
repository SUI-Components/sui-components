import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {paramsToQueryString} from './querystring'

const BASE_CLASS = 'sui-FormPta'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const REMOVE_DRAFT = 'REMOVE_DRAFT'

class FormPta extends Component {
  constructor(props) {
    super(props)

    const {formUrl: BASE_URL, ...settings} = this.props
    const QUERY = paramsToQueryString(settings)
    const formUrl = `${BASE_URL}?${QUERY}`

    this.state = {
      formUrl
    }
  }
  /**
   * Avoid iframe re-rendering
   */
  shouldComponentUpdate() {
    return false
  }

  removeDraft(draftId) {
    const {formUrl} = this.state
    const {contentWindow} = this._iframeRef

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
      state: {formUrl}
    } = this

    return (
      <div className={BASE_CLASS}>
        <iframe
          ref={ref => (this._iframeRef = ref)}
          className={CONTENT_CLASS}
          src={formUrl}
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
