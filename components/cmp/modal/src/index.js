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
  lang: 'es',
  onExit: () => {},
  retrieveConsentsFromCmp: false
}

CmpModal.propTypes = {
  /**
   * Flag to determine if we have to check if the cmp library is loaded.
   * Used as this modal could work standalone or opened by another component, that could have already checked
   * if the cmp is loaded
   */
  checkCmpLibraryIsLoaded: PropTypes.bool,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string,
  /**
   * URL of the static image that will be the logo for the Modal
   */
  logo: PropTypes.string,
  /**
   * URL where the user will go in order to know more about the privacy conditions of the website
   */
  privacyUrl: PropTypes.string.isRequired,
  /**
   * Function to be executed when the user wants to exit the modal because he accepted the consents
   */
  onExit: PropTypes.func,
  /**
   * Flag to determine if we have to retrieve the consents from the CMP cookie
   * or if it's the first time the user is selecting the consents
   */
  retrieveConsentsFromCmp: PropTypes.bool
}

CmpModal.displayName = 'CmpModal'

export default CmpModal
