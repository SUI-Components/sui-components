import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'

const CRITEO_SCRIPT_URL = '//static.criteo.net/js/ld/ld.js'

class ScriptCriteo extends Component {
  initCriteo() {
    const {
      accountIds,
      customerId,
      siteType,
      email,
      hashedEmail,
      pageEvent
    } = this.props

    const criteoData = [
      {event: 'setAccount', account: accountIds},
      {event: 'setSiteType', type: siteType},
      customerId && {event: 'setCustomerId', id: customerId},
      !hashedEmail && {event: 'setEmail', email},
      hashedEmail && {event: 'setHashedEmail', email: hashedEmail},
      pageEvent
    ].filter(Boolean)

    // Push events to criteo
    window.criteo_q = window.criteo_q || []
    window.criteo_q.push(...criteoData)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <ScriptLoader
        src={CRITEO_SCRIPT_URL}
        verifier={() => window && window.criteo_q}
        render={() => this.initCriteo() || null}
      />
    )
  }
}

ScriptCriteo.displayName = 'ScriptCriteo'

ScriptCriteo.propTypes = {
  accountIds: PropTypes.array.isRequired,
  siteType: PropTypes.oneOf(['d', 'm', 't']).isRequired,
  customerId: PropTypes.string,
  email: PropTypes.string,
  hashedEmail: PropTypes.string,
  pageEvent: PropTypes.object
}

ScriptCriteo.defaultProps = {
  email: '',
  hashedEmail: ''
}

export default ScriptCriteo
