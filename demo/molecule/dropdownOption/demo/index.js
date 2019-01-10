/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import MoleculeDropdownOption from '../../../../components/molecule/dropdownOption/src'
import './index.scss'

import BasicDropdownOptions from './BasicDropdownOptions'
import CheckboxDropdownOptions from './CheckboxDropdownOptions'
import HighlightDropdownOptions from './HighlightDropdownOptions'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownOption'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_OPTION = `${BASE_CLASS_DEMO}-option`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeDropdownOption</code>
    </h1>
    <h2>Dynamic</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Options & unique selection</h3>
      <BasicDropdownOptions options={['john', 'paul', 'george', 'ringo']} />
      <h3>Checkbox Options & multiple selection</h3>
      <CheckboxDropdownOptions options={['john', 'paul', 'george', 'ringo']} />
      <h3>Highlight options</h3>
      <HighlightDropdownOptions options={['john', 'paul', 'george', 'ringo']} />
    </div>
    <h2>Static</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="option-basic">
          basic
        </MoleculeDropdownOption>
      </div>
      <h3>Basic selected </h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="option-selected" selected>
          selected
        </MoleculeDropdownOption>
      </div>
      <h3>Disabled</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="option-disabled" disabled>
          disabled
        </MoleculeDropdownOption>
      </div>
      <h3>With checkbox</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="option-checkbox" checkbox>
          checkbox
        </MoleculeDropdownOption>
      </div>
      <h3>With checkbox selected</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="option-selected" checkbox selected>
          selected
        </MoleculeDropdownOption>
      </div>
      <h3>With text highlighted</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="indiana jones" highlightQuery="indi">
          Indiana Jones
        </MoleculeDropdownOption>
      </div>

      <h3>With callback (click & enter)</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption
          value="Indiana Jones"
          checkbox
          onClick={(e, {value}) => {
            window.alert(value)
          }}
        >
          Indiana Jones
        </MoleculeDropdownOption>
      </div>
      <h3>With callback (click & space)</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption
          value="Indiana Jones"
          checkbox
          onSelectKey=" "
          onClick={(e, {value}) => {
            window.alert(value)
          }}
        >
          Indiana Jones
        </MoleculeDropdownOption>
      </div>
      <h3>With some HTML as children</h3>
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption value="sparta" checkbox selected>
          <span>
            this is <em>sparta</em> 😎
          </span>
        </MoleculeDropdownOption>
      </div>
    </div>
  </div>
)

export default Demo
