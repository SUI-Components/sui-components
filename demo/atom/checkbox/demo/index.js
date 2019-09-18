/* eslint-disable no-console */
import React from 'react'

import AtomCheckbox from '../../../../components/atom/checkbox/src'

import './index.scss'
import withCheckedValue from './hoc/withCheckedValue'

const BASE_CLASS_DEMO = `DemoAtomCheckbox`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const AtomCheckboxWithState = withCheckedValue(AtomCheckbox)

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>AtomUpload</h1>
      <h2>Dynamic Behaviour</h2>
      <div className={CLASS_SECTION}>
        <h3>Checked (default) & w/ "onChange" handler</h3>
        <AtomCheckboxWithState
          checked
          id="checkbox1"
          onChange={(ev, {value}) => {
            console.log({value})
          }}
        />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Disabled & Checked (default) & w/ "onChange" handler</h3>
        <AtomCheckboxWithState
          checked
          disabled
          id="checkbox2"
          onChange={(ev, {value}) => {
            console.log({value})
          }}
        />
      </div>
      <h2>Use Cases</h2>
      <div className={CLASS_SECTION}>
        <h3>Unchecked & Disabled</h3>
        <AtomCheckbox id="checkbox5" disabled />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Checked & disabled</h3>
        <AtomCheckbox id="checkbox6" disabled checked />
      </div>
    </div>
  )
}

export default Demo
