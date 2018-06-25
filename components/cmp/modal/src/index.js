import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModalContainer} from './CmpModal'
import CmpServices from '../../services/src/index'

class CmpModal extends Component {
  state = {cmpReady: this.props.cmpReady}

  componentDidMount() {
    document.addEventListener('cmpReady', function() {
      this.setState({cmpReady: true})
    })
  }

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
  cmpReady: false,
  lang: 'es',
  onExit: () => {},
  retrieveConsentsFromCmp: false
}

CmpModal.propTypes = {
  cmpReady: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string.isRequired,
  onExit: PropTypes.func,
  retrieveConsentsFromCmp: PropTypes.bool,
  privacyUrl: PropTypes.string.isRequired
}

CmpModal.displayName = 'CmpModal'

export default CmpModal
