/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import MoleculeButtonGroup from '../../../../components/molecule/buttonGroup/src'
import AtomButtom from '@schibstedspain/sui-atom-button'

import './index.scss'

const Demo = () => {
  return (
    <div className="DemoMoleculeButtonGroup">
      <h1>MoleculeButtonGroup</h1>
      <h2>Basic</h2>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup>
          <AtomButtom type="secondary">A</AtomButtom>
          <AtomButtom type="secondary">B</AtomButtom>
          <AtomButtom type="secondary">C</AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup>
          <AtomButtom type="tertiary">A</AtomButtom>
          <AtomButtom type="tertiary">B</AtomButtom>
          <AtomButtom type="tertiary">C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <h2>Small</h2>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup>
          <AtomButtom type="secondary" size="small">
            A
          </AtomButtom>
          <AtomButtom type="secondary" size="small">
            B
          </AtomButtom>
          <AtomButtom type="secondary" size="small">
            C
          </AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup>
          <AtomButtom type="tertiary" size="small">
            A
          </AtomButtom>
          <AtomButtom type="tertiary" size="small">
            B
          </AtomButtom>
          <AtomButtom type="tertiary" size="small">
            C
          </AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <h2>Medium</h2>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup>
          <AtomButtom type="secondary">A</AtomButtom>
          <AtomButtom type="secondary">B</AtomButtom>
          <AtomButtom type="secondary">C</AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup>
          <AtomButtom type="tertiary">A</AtomButtom>
          <AtomButtom type="tertiary">B</AtomButtom>
          <AtomButtom type="tertiary">C</AtomButtom>
        </MoleculeButtonGroup>
      </div>
      <h2>Large</h2>
      <div className="DemoMoleculeButtonGroup-section">
        <MoleculeButtonGroup>
          <AtomButtom type="secondary" size="large">
            A
          </AtomButtom>
          <AtomButtom type="secondary" size="large">
            B
          </AtomButtom>
          <AtomButtom type="secondary" size="large">
            C
          </AtomButtom>
        </MoleculeButtonGroup>
        <MoleculeButtonGroup>
          <AtomButtom type="tertiary" size="large">
            A
          </AtomButtom>
          <AtomButtom type="tertiary" size="large">
            B
          </AtomButtom>
          <AtomButtom type="tertiary" size="large">
            C
          </AtomButtom>
        </MoleculeButtonGroup>
      </div>
    </div>
  )
}

export default Demo
