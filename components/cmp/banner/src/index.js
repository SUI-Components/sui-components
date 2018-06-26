import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CmpServices, {CmpWaitForLibrary} from '@s-ui/react-cmp-services'

import {CmpBannerContainer} from './CmpBanner/index'

class CmpBanner extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <CmpWaitForLibrary>
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
      </CmpWaitForLibrary>
    )
  }
}

CmpBanner.displayName = 'CmpBanner'

CmpBanner.defaultProps = {
  lang: 'es'
}

CmpBanner.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string,
  privacyUrl: PropTypes.string.isRequired
}

export default CmpBanner
