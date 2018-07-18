import React from 'react'
import PropTypes from 'prop-types'
import AtomSwitch from '@s-ui/react-atom-switch'

import {ConsentName} from '../ConsentName'
import {CLASS} from '../settings'

export const ConsentItem = ({
  description,
  enabled,
  id,
  onToggleConsent,
  name,
  isVendor,
  url
}) => (
  <div className={`${CLASS}-consent`}>
    <ConsentName
      name={name}
      description={isVendor ? '' : description}
      url={url}
    />
    <div className={`${CLASS}-consentActions`}>
      <AtomSwitch
        initialValue={enabled}
        label=""
        labelLeft=""
        labelRight=""
        name={`${id}-switch`}
        onToggle={() => onToggleConsent({enabled: !enabled, id, isVendor})}
        type="toggle"
      />
    </div>
  </div>
)

ConsentItem.propTypes = {
  description: PropTypes.string,
  enabled: PropTypes.bool,
  onToggleConsent: PropTypes.func,
  id: PropTypes.number.isRequired,
  isVendor: PropTypes.bool,
  name: PropTypes.string.isRequired,
  url: PropTypes.string
}
