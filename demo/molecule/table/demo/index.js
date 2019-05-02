/* eslint-disable no-console */
import React from 'react'

import MoleculeTable from '../../../../components/molecule/table/src'

import {dataSource, columns} from './data/simple'

const BASE_CLASS_DEMO = 'DemoMoleculeTable'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeTable</code>
    </h1>
    <h2>Basic</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTable
        scroll={{y: 240}}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  </div>
)

export default Demo
