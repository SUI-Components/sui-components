import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CmpServices from '../../services/src/index'

import {CmpBannerContainer} from './CmpBanner/index'

class CmpBanner extends Component {
  render() {
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

CmpBanner.propTypes = {
  logo: PropTypes.string
}

export default CmpBanner
