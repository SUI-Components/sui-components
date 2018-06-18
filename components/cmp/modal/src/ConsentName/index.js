import React from 'react'
import PropTypes from 'prop-types'

import {CLASS} from '../settings'

export const ConsentName = ({name, url}) => (
  <div className={`${CLASS}-consentName`}>
    {url ? (
      <a
        className={`${CLASS}-consentLink`}
        href={url}
        target="_blank"
        title="Leer condiciones de privacidad"
        rel="noopener"
      >
        {name}
      </a>
    ) : (
      name
    )}
  </div>
)

ConsentName.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}
