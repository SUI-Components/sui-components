/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'

import MoleculeButtonGroup from '../../../../components/molecule/buttonGroup/src'
import AtomButtom, {atomButtonGroupPositions} from '@s-ui/react-atom-button'

import SimpleOptionsRadioForm from './inputRadio'
import SimpleOptionsCheckboxForm from './inputCheckbox'
import './index.scss'

const ButtonDesignByState = () => {
  const [selected, setSelected] = useState()

  const _onClick = buttonId => {
    console.log(buttonId)
    setSelected(buttonId)
  }

  return (
    <MoleculeButtonGroup>
      <AtomButtom
        design={selected !== 'A' && 'outline'}
        onClick={() => _onClick('A')}
      >
        A
      </AtomButtom>
      <AtomButtom
        design={selected !== 'B' && 'outline'}
        onClick={() => _onClick('B')}
      >
        B
      </AtomButtom>
      <AtomButtom
        design={selected !== 'C' && 'outline'}
        onClick={() => _onClick('C')}
      >
        C
      </AtomButtom>
    </MoleculeButtonGroup>
  )
}

const Demo = () => {
  return (
    <div className="DemoMoleculeButtonGroup">
      <h1>MoleculeButtonGroup</h1>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>As a group of buttons that trigger some action (or link)</h2>
        <MoleculeButtonGroup>
          <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
          <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
          <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>
          As a group of choices (only one can be selected) → 'input radio' like
        </h2>
        <SimpleOptionsRadioForm />
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>
          As a group of choices (several can be selected) → 'checkbox' like
        </h2>
        <SimpleOptionsCheckboxForm />
      </div>
      <div style={{width: '500px'}} className="DemoMoleculeButtonGroup-section">
        <h2>specifying groupPositions</h2>
        <MoleculeButtonGroup groupPositions={atomButtonGroupPositions}>
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>different design dependeding on state</h2>
        <ButtonDesignByState />
      </div>
    </div>
  )
}

export default Demo
