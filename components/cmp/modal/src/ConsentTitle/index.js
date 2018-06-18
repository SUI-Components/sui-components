import React from 'react'
import PropTypes from 'prop-types'

import {CLASS} from '../settings'

export const ConsentTitle = ({title, url}) => (
  <div className={`${CLASS}-consentTitle`}>
    {url ? (
      <a
        className={`${CLASS}-consentLink`}
        href={url}
        target="_blank"
        title="Leer condiciones de privacidad"
        rel="noopener"
      >
        {title}
      </a>
    ) : (
      title
    )}
  </div>
)

ConsentTitle.propTypes = {
  title: PropTypes.string,
  url: PropTypes.url
}
