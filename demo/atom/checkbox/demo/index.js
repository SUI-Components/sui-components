/* eslint-disable no-console */
import React from 'react'

import AtomCheckbox, {
  withCheckedValue
} from '../../../../components/atom/checkbox/src'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomCheckbox`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const AtomCheckboxWithState = withCheckedValue(AtomCheckbox)

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>AtomCheckbox</h1>
      <h2>Dynamic Behaviour</h2>
      <div className={CLASS_SECTION}>
        <h3>Checked (default) & w/ "onChange" handler</h3>
        <p>
          <AtomCheckboxWithState
            checked
            id="checkbox1"
            name="terms-agreement"
            onChange={(ev, {value, name}) => {
              console.log({[name]: value})
            }}
          />
        </p>
      </div>
      <div className={CLASS_SECTION}>
        <h3>Disabled & Checked (default) & w/ "onChange" handler</h3>
        <p>
          <AtomCheckboxWithState
            checked
            disabled
            id="checkbox2"
            name="older-than-18"
            onChange={(ev, {value, name}) => {
              console.log({[name]: value})
            }}
          />
        </p>
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
