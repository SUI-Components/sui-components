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
        <h3>Basic</h3>
        <AtomRadioButton
          name="favorite-beatle"
          value="john"
          onChange={(e, {name, value}) => console.log({[name]: value})}
        />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Checked</h3>
        <AtomRadioButton
          name="favorite-beatle"
          value="paul"
          checked
          onChange={(e, {name, value}) => console.log({[name]: value})}
        />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Disabled</h3>
        <AtomRadioButton name="favorite-beatle" value="george" disabled />
      </div>
    </div>
  )
}

export default Demo
