/* eslint-disable no-console */
import React, {useState} from 'react'

import AtomRadioButton from '@s-ui/react-atom-radio-button'
import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'
import MoleculeRadioButtonGroup from '../../../../components/molecule/radioButtonGroup/src'

import RadioButtonGroupIcons from './components/radioButtonGroupIcons'
import './index.scss'

const BASE_CLASS_DEMO = `DemoMoleculeRadioButtonGroup`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const RadioButtonGroupStateWrapper = () => {
  const [value, setValue] = useState('john')
  return (
    <>
      <button
        onClick={() => {
          setValue('paul')
        }}
      >
        Change value to paul
      </button>
      <MoleculeRadioButtonGroup
        onChange={(ev, {name, value}) => {
          setValue(value)
          console.log({[name]: value})
        }}
        name="change-prop-from-state"
        value={value}
      >
        <MoleculeRadioButtonField
          id="john-change-prop-from-state"
          value="john"
          label="John"
          helpText="John Lennon"
        />
        <MoleculeRadioButtonField
          id="paul-change-prop-from-state"
          value="paul"
          label="Paul"
          helpText="Paul McCartney"
        />
        <MoleculeRadioButtonField
          id="george-change-prop-from-state"
          value="george"
          label="George"
          helpText="George Harrison"
        />
        <MoleculeRadioButtonField
          id="ringo-change-prop-from-state"
          value="ringo"
          label="Ringo"
          helpText="Ringo Star"
        />
      </MoleculeRadioButtonGroup>
    </>
  )
}

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>MoleculeRadioButtonGroup</h1>
      <h2>Use Cases</h2>
      <div className={CLASS_SECTION}>
        <h3>with AtomRadioButton</h3>

        <MoleculeRadioButtonGroup
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
        </MoleculeRadioButtonGroup>
      </div>

      <div className={CLASS_SECTION}>
        <h3>with MoleculeRadioButtonField</h3>

        <MoleculeRadioButtonGroup
          onChange={(ev, {name, value}) => {
            console.log({[name]: value})
          }}
          name="field-favorite-beatle"
          value="john"
        >
          <MoleculeRadioButtonField
            id="john"
            value="john"
            label="John"
            helpText="John Lennon"
          />
          <MoleculeRadioButtonField
            id="paul"
            value="paul"
            label="Paul"
            helpText="Paul McCartney"
          />
          <MoleculeRadioButtonField
            id="george"
            value="george"
            label="George"
            helpText="George Harrison"
          />
          <MoleculeRadioButtonField
            id="ringo"
            value="ringo"
            label="Ringo"
            helpText="Ringo Star"
            disabled
          />
        </MoleculeRadioButtonGroup>
      </div>
      <div className={CLASS_SECTION}>
        <h3>with Icons</h3>
        <RadioButtonGroupIcons />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Change props from parent</h3>
        <RadioButtonGroupStateWrapper />
      </div>
    </div>
  )
}

export default Demo
