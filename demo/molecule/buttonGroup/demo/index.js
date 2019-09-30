/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeButtonGroup from '../../../../components/molecule/buttonGroup/src'
import AtomButtom, {
  atomButtonGroupPositions
} from '@schibstedspain/sui-atom-button'

import SimpleOptionsRadioForm from './inputRadio'
import SimpleOptionsCheckboxForm from './inputCheckbox'
import './index.scss'

const Demo = () => {
  return (
    <div className="DemoMoleculeButtonGroup">
      <h1>MoleculeButtonGroup</h1>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>As a group of buttons that trigger some action (or link)</h2>
        <MoleculeButtonGroup type="secondary">
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
      <div className="DemoMoleculeButtonGroup-section--fullWidth">
        <h2>Secondary (Full Width)</h2>
        <MoleculeButtonGroup type="secondary" fullWidth>
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <div style={{width: '500px'}} className="DemoMoleculeButtonGroup-section">
        <h2>Secondary (specifying groupPositions)</h2>
        <MoleculeButtonGroup
          type="secondary"
          groupPositions={atomButtonGroupPositions}
        >
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>Tertiary</h2>
        <MoleculeButtonGroup type="tertiary">
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>Secondary (Negative)</h2>
        <div className="DemoMoleculeButtonGroup-section--negative">
          <MoleculeButtonGroup type="secondary" negative>
            <AtomButtom>A</AtomButtom>
            <AtomButtom>B</AtomButtom>
            <AtomButtom>C</AtomButtom>
          </MoleculeButtonGroup>
        </div>
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <h2>Tertiary (Negative)</h2>
        <div className="DemoMoleculeButtonGroup-section--negative">
          <MoleculeButtonGroup type="tertiary" negative>
            <AtomButtom>A</AtomButtom>
            <AtomButtom>B</AtomButtom>
            <AtomButtom>C</AtomButtom>
          </MoleculeButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default Demo
