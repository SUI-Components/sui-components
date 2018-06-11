import React from 'react'
import PropTypes from 'prop-types'

export const VendorsTable = ({ children }) => (
  <table className='sui-ModalCmp-vendorsTable'>
    <thead>
      <tr>
        <th>
          <h5>Company</h5>
        </th>
        <th>
          <h5>Off/On</h5>
        </th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
)

VendorsTable.propTypes = {
  enabled: PropTypes.bool,
  handleToggleVendorStatus: PropTypes.func,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
