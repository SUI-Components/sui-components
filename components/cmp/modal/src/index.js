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
  retrieveConsentsFromCmp: false,
  lang: 'es'
}

CmpModal.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string.isRequired,
  retrieveConsentsFromCmp: PropTypes.bool
}

CmpModal.displayName = 'CmpModal'

export default CmpModal
