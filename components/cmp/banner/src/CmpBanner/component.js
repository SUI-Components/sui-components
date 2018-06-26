import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Notification from '@s-ui/react-molecule-notification'

import {CLASS, I18N} from '../settings'

export class CmpBanner extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const {buttons, lang} = this.props
    return (
      <div className={CLASS}>
        <Notification
          buttons={buttons}
          position="bottom"
          text={<p className={`${CLASS}-text`}>{I18N[lang].BANNER_BODY}</p>}
          show
        />
      </div>
    )
  }
}

CmpBanner.propTypes = {
  /**
   * Props for the buttons to be created
   */
  buttons: PropTypes.array,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string
}
