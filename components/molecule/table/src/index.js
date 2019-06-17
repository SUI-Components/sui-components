import React, {lazy, Suspense} from 'react'
import PropTypes from 'prop-types'

const Table = lazy(() => import('antd/lib/table'))

const BASE_CLASS = `sui-MoleculeTable`
const CLASS_ACTIONS = `${BASE_CLASS}-actions`
const CLASS_MOBILE_MODE = `${BASE_CLASS}-mobile`
const CLASS_MOBILE_MODE_ROW = `${CLASS_MOBILE_MODE}-row`
const CLASS_MOBILE_MODE_CELL = `${CLASS_MOBILE_MODE_ROW}-cell`
const CLASS_MOBILE_MODE_CELL_TITLE = `${CLASS_MOBILE_MODE_CELL}-title`
const CLASS_MOBILE_MODE_CELL_CONTENT = `${CLASS_MOBILE_MODE_CELL}-content`

const getActionsHeaderConfig = actions => ({
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
})

const getDataCell = ({column, rowContent}) => {
  return typeof rowContent === 'object' && column.render
    ? column.render(rowContent)
    : rowContent
}

const renderMobileMode = ({title, dataSource, columns}) => { // eslint-disable-line
  return (
    <div className={CLASS_MOBILE_MODE}>
      <h2>{title}</h2>
      {dataSource.map((row, indexRow) => {
        return (
          <div key={indexRow} className={CLASS_MOBILE_MODE_ROW}>
            {Object.keys(row).map((keyTitle, index) => {
              const column = columns.find(column => column.key === keyTitle)

              const dataCell = getDataCell({column, rowContent: row[keyTitle]})

              return (
                <div key={index} className={CLASS_MOBILE_MODE_CELL}>
                  <div className={CLASS_MOBILE_MODE_CELL_TITLE}>
                    {column.title}
                  </div>
                  <div className={CLASS_MOBILE_MODE_CELL_CONTENT}>
                    {dataCell}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const MoleculeTable = ({
  dataSource,
  actions,
  title,
  mobile,
  fixedHeader,
  columns: originalColumns,
  ...props
}) => {
  const columns = actions
    ? [...originalColumns, getActionsHeaderConfig(actions)]
    : originalColumns

  return (
    <div className={BASE_CLASS}>
      {mobile ? (
        renderMobileMode({title, dataSource, columns})
      ) : (
        <Suspense fallback={null}>
          <Table
            title={() => <h3 style={{margin: 0}}>{title}</h3>}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey={record => record.id}
            scroll={fixedHeader ? {y: 240, x: 1000} : {}}
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
  mobile: PropTypes.bool,

  /** is header fixed? */
  fixedHeader: PropTypes.bool
}

export default MoleculeTable
