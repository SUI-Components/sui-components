import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import {CLASS} from '../settings'

const CmpModalGeneralBox = ({children, title, description}) => (
  <div className={`${CLASS}-box`}>
    <h3 className={`${CLASS}-boxTitle`}>{title}:</h3>
    <p className={`${CLASS}-boxDescription`}>{description}</p>
    {children}
  </div>
)

const CmpModalGeneralBoxReadMore = ({i18n, privacyUrl}) => (
  <a className={`${CLASS}-boxLink`} href={privacyUrl}>
    {i18n['READ_MORE']}
  </a>
)

export const CmpModalGeneralStep = ({i18n, onOpenAdsStep, privacyUrl}) => {
  return (
    <Fragment>
      <h2 className={`${CLASS}-title`}>{i18n['TITLE']}</h2>
      <p>{i18n['BODY']}</p>

      <CmpModalGeneralBox
        title={i18n['COOKIES_SESSION']}
        description={i18n['COOKIES_SESSION_DESC']}
      >
        <CmpModalGeneralBoxReadMore i18n={i18n} privacyUrl={privacyUrl} />
      </CmpModalGeneralBox>

      <CmpModalGeneralBox
        title={i18n['COOKIES_ANALYTICS']}
        description={i18n['COOKIES_ANALYTICS_DESC']}
      >
        <CmpModalGeneralBoxReadMore i18n={i18n} privacyUrl={privacyUrl} />
      </CmpModalGeneralBox>

      <CmpModalGeneralBox
        title={i18n['COOKIES_MARKETING']}
        description={i18n['COOKIES_MARKETING_DESC']}
      >
        <CmpModalGeneralBoxReadMore i18n={i18n} privacyUrl={privacyUrl} />
      </CmpModalGeneralBox>

      <CmpModalGeneralBox
        title={i18n['COOKIES_ADS']}
        description={i18n['COOKIES_ADS_DESC']}
      >
        <a className={`${CLASS}-boxLink`} href="#" onClick={onOpenAdsStep}>
          {i18n['PERSONALIZE']}
        </a>
      </CmpModalGeneralBox>
    </Fragment>
  )
}

CmpModalGeneralBox.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
}

CmpModalGeneralBoxReadMore.propTypes = {
  i18n: PropTypes.object,
  privacyUrl: PropTypes.string
}

CmpModalGeneralStep.propTypes = {
  i18n: PropTypes.object,
  onOpenAdsStep: PropTypes.func,
  privacyUrl: PropTypes.string
}
