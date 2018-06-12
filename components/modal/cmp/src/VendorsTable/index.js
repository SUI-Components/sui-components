import React from 'react'
import PropTypes from 'prop-types'

export const VendorsTable = ({children}) => (
  <div className="sui-ModalCmp-vendorsTable">
    <table className="sui-ModalCmp-vendorsTableInner">
      <thead>
        <tr className="sui-ModalCmp-vendorsTableHead">
          <th>Company</th>
          <th>Off/On</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
)

VendorsTable.propTypes = {
  children: PropTypes.element.isRequired
}
