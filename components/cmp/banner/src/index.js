import React, {Component} from 'react'

import CmpServices from '../../services/src/index'

import {CmpBannerContainer} from './CmpBanner/index'

class CmpBanner extends Component {
  render() {
    return (
      <CmpServices>
        {({getConsentStatus, getPurposesAndVendors, sendConsents}) => (
          <CmpBannerContainer
            {...this.props}
            getPurposesAndVendors={getPurposesAndVendors}
            getConsentStatus={getConsentStatus}
            sendConsents={sendConsents}
          />
        )}
      </CmpServices>
    )
  }
}

CmpBanner.displayName = 'CmpBanner'

CmpBanner.propTypes = {}

export default CmpBanner
