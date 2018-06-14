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
    console.log(purposesAndVendors)
    this.setState({purposesAndVendors, fetchingData: false})
  }

  _handleToggleConsent = ({enabled, id, isVendor}) => {
    console.log('todo')
  }

  _handleToggleAll = ({enabled, isVendor}) => {
    console.log('todo')
  }

  _handleAccept = async () => {
    const {sendConsents} = this.props
    const {featuresConsents, vendorsConsents} = this.state.purposesAndVendors
    sendConsents.execute({featuresConsents, vendorsConsents})
  }

  render() {
    const {lang, logo} = this.props
    const {fetchingData, purposesAndVendors} = this.state
    if (fetchingData) return null

    return (
      <CmpModal
        lang={lang}
        logo={logo}
        onAccept={this._handleAccept}
        purposesAndVendors={purposesAndVendors}
      />
    )
  }
}

CmpModalContainer.propTypes = {
  lang: PropTypes.string,
  logo: PropTypes.string
}
