import React from 'react'
import PropTypes from 'prop-types'
import AtomSwitch from '@s-ui/react-atom-switch'

import {ConsentTitle} from '../ConsentTitle'
import {CLASS} from '../settings'

export const ConsentItem = ({
  enabled,
  id,
  onToggleConsent,
  title,
  isVendor,
  url
}) => (
  <div className={`${CLASS}-consent`}>
    <ConsentTitle title={title} url={url} />
    <div className={`${CLASS}-consentActions`}>
      <AtomSwitch
        initialValue={enabled}
        label=""
        labelLeft=""
        labelRight=""
        name={`${title}-switch`}
        onToggle={() => onToggleConsent({enabled: !enabled, id, isVendor})}
        type="toggle"
      />
    </div>
  </div>
)

ConsentItem.propTypes = {
  enabled: PropTypes.bool,
  onToggleConsent: PropTypes.func,
  id: PropTypes.number.isRequired,
  isVendor: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}
