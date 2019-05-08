/* eslint-disable no-console */
import React from 'react'

import MoleculeTable from '../../../../components/molecule/table/src'
import {
  IconFillBackup,
  IconFillDashboard,
  IconFillExtension,
  IconFillHttps
} from './Icons'

import {dataSource, columnsSorter, columnsNoSorter} from './data/simple'
import {getClientsFromServer} from './services'
import withDataFromServer from './hoc/withDataFromServer'

const BASE_CLASS_DEMO = 'DemoMoleculeTable'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MoleculeTableWithDataFromServer = withDataFromServer(MoleculeTable)(
  getClientsFromServer
)

const Actions = ({record, index}) => ( // eslint-disable-line
  <span style={{display: 'flex'}}>
    <span style={{cursor: 'pointer'}}>
      <IconFillBackup />
    </span>
    <span style={{cursor: 'pointer'}}>
      <IconFillDashboard />
    </span>
    <span style={{cursor: 'pointer'}}>
      <IconFillExtension />
    </span>
    <span style={{cursor: 'pointer'}}>
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
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columnsSorter}
      />
    </div>

    <h2>Sort (Server)</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableWithDataFromServer
        scroll={{y: 240}}
        columns={columnsNoSorter}
      />
    </div>

    <h2>Row Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        rowSelection={{
          onChange: console.log // eslint-disable-line
        }}
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columnsSorter}
      />
    </div>

    <h2>With Actions</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        actions={<Actions />}
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columnsSorter}
      />
    </div>
  </div>
)

export default Demo
