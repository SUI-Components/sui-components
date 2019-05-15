import React, {lazy, Suspense} from 'react'
import PropTypes from 'prop-types'

const Table = lazy(() => import('antd/lib/table'))

const BASE_CLASS = `sui-MoleculeTable`
const CLASS_ACTIONS = `${BASE_CLASS}-actions`

const MoleculeTable = ({
  dataSource,
  actions,
  title,
  mobile,
  columns: originalColumns,
  ...props
}) => {
  const columns = actions
    ? [
        ...originalColumns,
        {
          title: 'Actions',
          key: 'actions',
          align: 'left',
          width: 150,
          render: (text, record) => {
            const extendedActions = React.cloneElement(actions, {
              text,
              record
            })

            return <span className={CLASS_ACTIONS}>{extendedActions}</span>
          }
        }
      ]
    : originalColumns

  const renderMobileMode = () => {
    return (
      <div className="ant-table-title">
        <h2>{title}</h2>
        {dataSource.map((row, indexRow) => {
          return (
            <div key={indexRow}>
              {Object.keys(row).map((keyTitle, index) => {
                const column = columns.filter(
                  column => column.key === keyTitle
                )[0]

                let dataCell = ''
                if (typeof row[keyTitle] === 'string') dataCell = row[keyTitle]
                if (typeof row[keyTitle] === 'object' && column.render) {
                  dataCell = column.render(row[keyTitle])
                }

                return (
                  <div key={index}>
                    {column.title} : {dataCell}
                  </div>
                )
              })}
              {/* row.map((cell, indexCell) => <p key={indexCell}>cell</p>) */}
            </div>
          )
        })}
        <pre>{JSON.stringify(columns)}</pre>
        <pre>{JSON.stringify(dataSource)}</pre>
      </div>
    )
  }

  return (
    <div className={BASE_CLASS}>
      {mobile ? (
        renderMobileMode()
      ) : (
        <Suspense fallback={null}>
          <Table
            title={() => <h3 style={{margin: 0}}>{title}</h3>}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey={record => record.id}
            {...props}
          />
        </Suspense>
      )}
    </div>
  )
}

MoleculeTable.displayName = 'MoleculeTable'

MoleculeTable.propTypes = {
  /** table title */
  title: PropTypes.string,

  /** minimal value in range */
  dataSource: PropTypes.object,

  /** minimal value in range */
  columns: PropTypes.object,

  /** component including actions over rows */
  actions: PropTypes.node,

  /** component including actions over rows */
  mobile: PropTypes.bool
}

// Remove these comments if you need
// MoleculeTable.contextTypes = {i18n: PropTypes.object}
// MoleculeTable.propTypes = {}
// MoleculeTable.defaultProps = {}

export default MoleculeTable
