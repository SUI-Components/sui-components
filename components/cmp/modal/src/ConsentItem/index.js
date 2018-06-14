import React from 'react'
import PropTypes from 'prop-types'

import AtomSwitch from '@s-ui/react-atom-switch'

import {CLASS} from '../settings'

export const ConsentItem = ({
  enabled,
  id,
  handleToggleConsent,
  title,
  isVendor
}) => (
  <div className={`${CLASS}-consent`}>
    <div className={`${CLASS}-consentTitle`}>{title}</div>
    <div className={`${CLASS}-consentActions`}>
      <AtomSwitch
        disabled={!enabled}
        labelLeft=""
        labelRight=""
        onToggle={_ => handleToggleConsent({enabled: !enabled, id, isVendor})}
        type="toggle"
      />
    </div>
  </div>
)

ConsentItem.propTypes = {
  enabled: PropTypes.bool,
  handleToggleConsent: PropTypes.func,
  id: PropTypes.string.isRequired,
  isVendor: PropTypes.bool,
  title: PropTypes.string.isRequired
}
