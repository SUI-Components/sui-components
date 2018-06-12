import React from 'react'
import PropTypes from 'prop-types'

import AtomSwitch from '@s-ui/react-atom-switch'

import {CLASS} from '../settings'

export const VendorRow = ({enabled, id, handleToggleVendorStatus, title}) => (
  <tr className={`${CLASS}-vendorsRow`}>
    <td className={`${CLASS}-vendorsRow-title`}>{title}</td>
    <td className={`${CLASS}-vendorsRow-actions`}>
      <AtomSwitch
        disabled={!enabled}
        labelLeft=""
        labelRight=""
        onToggle={_ => handleToggleVendorStatus({enabled, id})}
        type="toggle"
      />
    </td>
  </tr>
)

VendorRow.propTypes = {
  enabled: PropTypes.bool,
  handleToggleVendorStatus: PropTypes.func,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
