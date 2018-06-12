import React from 'react'
import PropTypes from 'prop-types'

import {CLASS} from '../settings'

export const VendorsTable = ({children}) => (
  <div className={`${CLASS}-vendorsTable`}>
    <table className={`${CLASS}-vendorsTableInner`}>
      <thead>
        <tr className={`${CLASS}-vendorsTableHead`}>
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
