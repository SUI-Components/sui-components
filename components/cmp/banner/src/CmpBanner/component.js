import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Notification from '@s-ui/react-molecule-notification'

import {CLASS, I18N} from '../settings'

export class CmpBanner extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const {buttons, companyName, lang} = this.props
    return (
      <div className={CLASS}>
        <Notification
          buttons={buttons}
          position="bottom"
          text={
            <p className={`${CLASS}-text`}>
              {I18N[lang].BANNER_BODY.replace('%{companyName}', companyName)}
            </p>
          }
          show
          showCloseButton={false}
        />
      </div>
    )
  }
}

CmpBanner.propTypes = {
  /**
   * Name of the company which the consents are for
   */
  companyName: PropTypes.string.isRequired,
  /**
   * Props for the buttons to be created
   */
  buttons: PropTypes.array,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string
}
