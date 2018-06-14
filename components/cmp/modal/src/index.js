import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModalContainer} from './CmpModal'
import CmpServices from '../../services/src/index'

/*
<div className={CLASS}>
            <div className={`${CLASS}-content`}>
              <header className={`${CLASS}-header`}>
                <img
                  alt="Schibsted Spain logo"
                  className={`${CLASS}-logo`}
                  src={this.props.logo}
                />
              </header>

              <section className={`${CLASS}-body`}>
                <h3 className={`${CLASS}-title`}>{i18n.title}</h3>
                <p className={`${CLASS}-message`}>{i18n.body}</p>
                <FeaturesConsents />
                <VendorsConsents />
              </section>

              <footer className={`${CLASS}-footer`}>
                <Button type="tertiary" onClick={() => {}} size="small">
                  {i18n.cancel}
                </Button>
                <Button onClick={() => {}} size="large">
                  {i18n.saveAndExit}
                </Button>
              </footer>
            </div>
          </div>
        )}
        */
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
