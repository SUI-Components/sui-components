/* eslint-disable no-console */
import React from 'react'

import MoleculeTable from '../../../../components/molecule/table/src'
import {
  IconFillBackup,
  IconFillDashboard,
  IconFillExtension,
  IconFillHttps
} from './Icons'

import {
  dataSource,
  columnsSorter,
  columnsNoSorter,
  columnsComplexCell,
  dataSourceComplexCell
} from './data/'

import {getClientsFromServer} from './services'
import withDataFromServer from './hoc/withDataFromServer'

const BASE_CLASS_DEMO = 'DemoMoleculeTable'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MoleculeTableWithDataFromServer = withDataFromServer(MoleculeTable)(
  getClientsFromServer
)

const Actions = (
  {record, index} // eslint-disable-line
) => (
  <span style={{display: 'flex'}}>
    <span
      style={{cursor: 'pointer'}}
      onClick={() => console.log({record, index})}
    >
      <IconFillBackup />
    </span>
    <span
      style={{cursor: 'pointer'}}
      onClick={() => console.log({record, index})}
    >
      <IconFillDashboard />
    </span>
    <span
      style={{cursor: 'pointer'}}
      onClick={() => console.log({record, index})}
    >
      <IconFillExtension />
    </span>
    <span
      style={{cursor: 'pointer'}}
      onClick={() => console.log({record, index})}
    >
      <IconFillHttps />
    </span>
  </span>
)

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeTable</code>
    </h1>
    <h2>Sort (Client)</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        bordered
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columnsSorter}
        title="Table Example Sort (Client)"
      />
    </div>

    <h2>Sort (Server)</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableWithDataFromServer
        bordered
        scroll={{y: 240}}
        columns={columnsNoSorter}
        title="Table Example Sort (Server)"
      />
    </div>

    <h2>Row Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        rowSelection={{
          onChange: console.log // eslint-disable-line
        }}
        bordered
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columnsSorter}
        title="Table Example Row Selection"
      />
    </div>

    <h2>With Actions</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        bordered
        actions={<Actions />}
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columnsSorter}
        title="Table Example With Actions"
      />
    </div>

    <h2>With Complex Cell</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        bordered
        scroll={{y: 240}}
        dataSource={dataSourceComplexCell}
        columns={columnsComplexCell}
        title="Table Example With Complex Cell"
      />
    </div>

    <h2>Mobile Mode</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        bordered
        scroll={{y: 240}}
        dataSource={dataSourceComplexCell}
        columns={columnsComplexCell}
        title="Table Example With Complex Cell"
        mobile
      />
    </div>
  </div>
)

export default Demo
