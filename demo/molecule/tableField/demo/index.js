/* eslint-disable no-console */
import React from 'react'

import MoleculeTableField, {
  WithStateTableField
} from '../../../../components/molecule/tableField/src'

import {columnsSorterBackend} from './data/'

import {getClientsFromServer} from './services'

import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeTableField'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MoleculeTableFieldWithDataFromServer = WithStateTableField(
  MoleculeTableField
)(getClientsFromServer)

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeTableField</code>
    </h1>

    <h2>Sort (Server)</h2>
    <div className={CLASS_DEMO_SECTION}>
      <MoleculeTableFieldWithDataFromServer
        columns={columnsSorterBackend}
        title="Table Example Sort (Server)"
      />
    </div>
  </div>
)

export default Demo
