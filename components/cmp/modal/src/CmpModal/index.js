import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModal} from './component'
export class CmpModalContainer extends Component {
  state = {
    fetchingData: true,
    purposesAndVendors: {}
  }
  async componentDidMount() {
    const {getPurposesAndVendors, retrieveConsentsFromCmp} = this.props
    const purposesAndVendors = await getPurposesAndVendors.execute({
      retrieveConsentsFromCmp
    })
    this.setState({purposesAndVendors, fetchingData: false})
  }

  _handleToggleConsent = ({enabled, id, isVendor}) => {
    console.log('todo')
  }

  _handleAccept = async () => {
    const {sendConsents} = this.props
    const {features, vendors} = this.state
    sendConsents.execute({features, vendors})
  }

  render() {
    const {lang, logo} = this.props
    const {fetchingData, features, vendors} = this.state

    if (fetchingData) return null

    return (
      <CmpModal
        lang={lang}
        logo={logo}
        features={features}
        onAccept={this._handleAccept}
        vendors={vendors}
      />
    )
  }
}

CmpModalContainer.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string
}
