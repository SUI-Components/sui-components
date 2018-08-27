/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeButtonGroup from '../../../../components/molecule/buttonGroup/src'
import AtomButtom from '@schibstedspain/sui-atom-button'

import './index.scss'

const Demo = () => {
  return (
    <div className="DemoMoleculeButtonGroup">
      <h1>MoleculeButtonGroup</h1>
      <h2>Basic (Medium)</h2>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup type="secondary">
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup type="tertiary">
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup type="secondary" negative>
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup type="tertiary" negative>
          <AtomButtom>A</AtomButtom>
          <AtomButtom>B</AtomButtom>
          <AtomButtom>C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
    </div>
  )
}

export default Demo
