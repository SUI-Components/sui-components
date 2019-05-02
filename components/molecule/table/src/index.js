import React, {lazy, Suspense} from 'react'
import PropTypes from 'prop-types'

const Table = lazy(() => import('antd/lib/table'))

const BASE_CLASS = `sui-MoleculeTable`

const MoleculeTable = ({dataSource, columns, ...props}) => {
  return (
    <div className={BASE_CLASS}>
      <Suspense fallback={null}>
        <Table
          title={() => 'Header'}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          {...props}
        />
      </Suspense>
    </div>
  )
}

MoleculeTable.displayName = 'MoleculeTable'

MoleculeTable.propTypes = {
  /** minimal value in range */
  dataSource: PropTypes.object,

  /** minimal value in range */
  columns: PropTypes.object
}

// Remove these comments if you need
// MoleculeTable.contextTypes = {i18n: PropTypes.object}
// MoleculeTable.propTypes = {}
// MoleculeTable.defaultProps = {}

export default MoleculeTable
