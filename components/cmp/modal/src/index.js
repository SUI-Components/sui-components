import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModalContainer} from './CmpModal'
import CmpServices from '../../services/src/index'

class CmpModal extends Component {
  render() {
    return (
      <CmpServices>
        {({getPurposesAndVendors, sendConsents}) => (
          <CmpModalContainer
            {...this.props}
            getPurposesAndVendors={getPurposesAndVendors}
            sendConsents={sendConsents}
          />
        )}
      </CmpServices>
    )
  }
}

CmpModal.defaultProps = {
  lang: 'es',
  onExit: () => {},
  retrieveConsentsFromCmp: false
}

CmpModal.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string.isRequired,
  onExit: PropTypes.func,
  retrieveConsentsFromCmp: PropTypes.bool,
  privacyUrl: PropTypes.string.isRequired
}

CmpModal.displayName = 'CmpModal'

export default CmpModal
