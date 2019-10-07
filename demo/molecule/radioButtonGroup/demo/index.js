/* eslint-disable no-console */
import React from 'react'

import AtomRadioButton from '@s-ui/react-atom-radio-button'
import AtomRadioButtonField from '@s-ui/react-molecule-radio-button-field'
import AtomRadioButtonGroup from '../../../../components/molecule/radioButtonGroup/src'

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

        <AtomRadioButtonGroup
          onChange={(ev, {name, value}) => {
            console.log({[name]: value})
          }}
          name="favorite-beatle"
          value="john"
        >
          <AtomRadioButton value="john" />
          <AtomRadioButton value="paul" />
          <AtomRadioButton value="george" />
          <AtomRadioButton value="ringo" />
          <AtomRadioButton value="martin" disabled />
        </AtomRadioButtonGroup>
      </div>

      <div className={CLASS_SECTION}>
        <h3>Basic</h3>

        <AtomRadioButtonGroup
          onChange={(ev, {name, value}) => {
            console.log({[name]: value})
          }}
          name="field-favorite-beatle"
          value="john"
        >
          <AtomRadioButtonField id="john" value="john" label="John" />
          <AtomRadioButtonField id="paul" value="paul" label="Paul" />
          <AtomRadioButtonField id="george" value="george" label="George" />
        </AtomRadioButtonGroup>
      </div>
    </div>
  )
}

export default Demo
