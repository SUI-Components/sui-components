/* eslint-disable no-console */
import React from 'react'

import AtomRadioButton from '../../../../components/atom/radioButton/src'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomRadioButton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>AtomRadioButton</h1>
      <h2>Use Cases</h2>
      <div className={CLASS_SECTION}>
        <h3>Unchecked & Disabled</h3>
        <AtomRadioButton
          id="checkbox5"
          onChange={(ev, {value}) => {
            console.log({value})
          }}
        />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Checked & disabled</h3>
        <AtomRadioButton id="checkbox6" disabled checked />
      </div>
    </div>
  )
}

export default Demo
