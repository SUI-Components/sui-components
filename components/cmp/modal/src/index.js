import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModalContainer} from './CmpModal'
import CmpServices, {CmpWaitForLibrary} from '@s-ui/react-cmp-services'

class CmpModal extends Component {
  render() {
    const {checkCmpLibraryIsLoaded} = this.props

    return (
      <CmpWaitForLibrary cmpReady={!checkCmpLibraryIsLoaded}>
        <CmpServices>
          {({getPurposesAndVendors, sendConsents}) => (
            <CmpModalContainer
              {...this.props}
              getPurposesAndVendors={getPurposesAndVendors}
              sendConsents={sendConsents}
            />
          )}
        </CmpServices>
      </CmpWaitForLibrary>
    )
  }
}

CmpModal.defaultProps = {
  checkCmpLibraryIsLoaded: true,
  cmpReady: false,
  lang: 'es',
  onExit: () => {},
  retrieveConsentsFromCmp: false
}

CmpModal.propTypes = {
  checkCmpLibraryIsLoaded: PropTypes.bool,
  cmpReady: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string.isRequired,
  onExit: PropTypes.func,
  retrieveConsentsFromCmp: PropTypes.bool,
  privacyUrl: PropTypes.string.isRequired
}

CmpModal.displayName = 'CmpModal'

export default CmpModal
