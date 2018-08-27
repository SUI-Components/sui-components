/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeButtonGroup from '../../../../components/molecule/buttonGroup/src'
import AtomButtom from '@schibstedspain/sui-atom-button'

import './index.scss'

const Demo = () => {
  return (
    <div className="DemoMoleculeButtonGroup">
      <h1>MoleculeButtonGroup</h1>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup>
          <AtomButtom type="secondary">A</AtomButtom>
          <AtomButtom type="secondary">B</AtomButtom>
          <AtomButtom type="secondary">C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup>
          <AtomButtom type="tertiary">A</AtomButtom>
          <AtomButtom type="tertiary">B</AtomButtom>
          <AtomButtom type="tertiary">C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
    </div>
  )
}

export default Demo
