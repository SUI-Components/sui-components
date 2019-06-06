/* eslint-disable no-console */
import React from 'react'

import MoleculeTableField from '../../../../components/molecule/tableField/src'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import {
  IconFillBackup,
  IconFillDashboard,
  IconFillExtension,
  IconFillHttps
} from './Icons'

import {
  dataSource,
  columnsNoSorter,
  columnsSorterClient,
  columnsSorterBackend,
  columnsComplexCell,
  dataSourceComplexCell
} from './data/'

import {getClientsFromServer} from './services'
import withDataFromServer from './hoc/withDataFromServer'

import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeTableField'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`

const MoleculeTableFieldWithDataFromServer = withDataFromServer(
  MoleculeTableField
)(getClientsFromServer)

const optionsNumRows = [10, 25, 50]

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
      <code>MoleculeTableField</code>
    </h1>

    <h2>Basic</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableField
        optionsNumRows={optionsNumRows}
        onChangeDisplayNumRows={console.log}
        dataSource={dataSource}
        columns={columnsNoSorter}
        title="Table Example Basic"
      />
    </div>

    <h2>Sort (Client)</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableField
        onChangeDisplayNumRows={console.log}
        dataSource={dataSource}
        columns={columnsSorterClient}
        title="Table Example Sort (Client)"
      />
    </div>

    <h2>Sort (Server)</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableFieldWithDataFromServer
        columns={columnsSorterBackend}
        title="Table Example Sort (Server)"
      />
    </div>

    <h2>Row Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableField
        rowSelection={{
          onChange: console.log // eslint-disable-line
        }}
        dataSource={dataSource}
        columns={columnsSorterClient}
        title="Table Example Row Selection"
      />
    </div>

    <h2>With Actions</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableField
        actions={<Actions />}
        dataSource={dataSource}
        columns={columnsSorterClient}
        title="Table Example With Actions"
      />
    </div>

    <h2>With Complex Cell</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableField
        dataSource={dataSourceComplexCell}
        columns={columnsComplexCell}
        title="Table Example With Complex Cell"
      />
    </div>

    <h2>Mobile Mode Use Case 1</h2>
    <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
      <LayoutMediaQuery>
        {({S, M}) => {
          let mobileMode = false
          if (M !== 'undefined' && M === false) mobileMode = true
          return (
            <MoleculeTableField
              dataSource={dataSource}
              columns={columnsSorterClient}
              title="Table Example Responsive Mode 1 (Simple Data)"
              mobile={mobileMode}
            />
          )
        }}
      </LayoutMediaQuery>
    </div>

    <h2>Mobile Mode Use Case 2</h2>
    <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
      <LayoutMediaQuery>
        {({S, M}) => {
          let mobileMode = false
          if (M !== 'undefined' && M === false) mobileMode = true
          return (
            <MoleculeTableField
              dataSource={dataSourceComplexCell}
              columns={columnsComplexCell}
              title="Table Example Responsive Mode 1 (Complex Cell)"
              mobile={mobileMode}
            />
          )
        }}
      </LayoutMediaQuery>
    </div>
  </div>
)

export default Demo
