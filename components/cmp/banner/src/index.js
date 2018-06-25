import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CmpServices from '../../services/src/index'

import {CmpBannerContainer} from './CmpBanner/index'

class CmpBanner extends Component {
  state = {cmpReady: false}
  componentDidMount() {
    document.addEventListener('cmpReady', function() {
      this.setState({cmpReady: true})
    })
  }

  render() {
    if (this.state.cmpReady === false) return null

    return (
      <CmpServices>
        {({getConsentStatus, getPurposesAndVendors, sendConsents}) => (
          <CmpBannerContainer
            {...this.props}
            getConsentStatus={getConsentStatus}
            getPurposesAndVendors={getPurposesAndVendors}
            sendConsents={sendConsents}
          />
        )}
      </CmpServices>
    )
  }
}

CmpBanner.displayName = 'CmpBanner'

CmpBanner.defaultProps = {
  lang: 'es'
}

CmpBanner.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string
}

export default CmpBanner
