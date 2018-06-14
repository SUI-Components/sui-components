import React from 'react'
import PropTypes from 'prop-types'

import AtomSwitch from '@s-ui/react-atom-switch'

import {CLASS} from '../settings'

export const ConsentItem = ({
  enabled,
  id,
  handleToggleConsent,
  title,
  isVendor,
  url
}) => (
  <div className={`${CLASS}-consent`}>
    <div className={`${CLASS}-consentTitle`}>{title}</div>
    <div className={`${CLASS}-consentActions`}>
      <AtomSwitch
        disabled={!enabled}
        label=""
        labelLeft=""
        labelRight=""
        name={`${title}-switch`}
        onToggle={_ => handleToggleConsent({enabled: !enabled, id, isVendor})}
        type="toggle"
      />
    </div>
  </div>
)

ConsentItem.propTypes = {
  enabled: PropTypes.bool,
  handleToggleConsent: PropTypes.func,
  id: PropTypes.number.isRequired,
  isVendor: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}
