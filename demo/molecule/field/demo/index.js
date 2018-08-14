import React from 'react'

import MoleculeField from '../../../../components/molecule/field/src'

import MoleculeFieldTextarea from './MoleculeFieldTextarea'
import FormInput from '@s-ui/react-form-input'
import FormWithFormik from './FormWithFormik'

import './index.scss'

const Form = () => {
  return (
    <div className="FormDemoMoleculeField">
      <h2 className="FormDemoMoleculeField-title">Form With Formik & Yup</h2>
      <div className="FormDemoMoleculeField-FormWithState">
        <FormWithFormik />
      </div>
      <h2 className="FormDemoMoleculeField-title">
        With <code>AtomTextarea</code>
      </h2>
      <ul className="FormDemoMoleculeField-list">
        <li className="FormDemoMoleculeField-listItem">
          <h3>With Success Message and HelpText</h3>
          <MoleculeFieldTextarea
            id="description"
            label="Description"
            successText="Everything ok!"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MoleculeFieldTextarea>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>
            With Error Message and HelpText<br />and custom maxCharacters
          </h3>
          <MoleculeFieldTextarea
            id="notes"
            label="Notes"
            errorText="All wrong!"
            maxCharacters={75}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </MoleculeFieldTextarea>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>With HelpText and placeholder</h3>
          <MoleculeFieldTextarea
            id="commentd"
            label="Comments"
            maxCharacters={100}
            placeholder="Please, write something cool..."
          />
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>Inline</h3>
          <MoleculeFieldTextarea
            id="description-inline"
            label="Description"
            successText="Everything ok!"
            inline
          >
            Lorem ipsum dolor sit amet
          </MoleculeFieldTextarea>
        </li>
      </ul>
      <h2 className="FormDemoMoleculeField-title">
        With <code>FormInput</code>
      </h2>
      <ul className="FormDemoMoleculeField-list">
        <li className="FormDemoMoleculeField-listItem">
          <h3>Basic Usage</h3>
          <MoleculeField label="name" name="name">
            <FormInput id="name" type="text" />
          </MoleculeField>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>With Error Message</h3>
          <MoleculeField label="surname" name="surname" errorText="Error!">
            <FormInput id="surname" type="text" />
          </MoleculeField>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>With Success Message</h3>
          <MoleculeField label="address" name="address" successText="Success!">
            <FormInput id="address" type="text" />
          </MoleculeField>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>With Help Text</h3>
          <MoleculeField
            label="country"
            name="country"
            helpText="Read the instructions to write proper format"
          >
            <FormInput id="country" type="text" />
          </MoleculeField>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>With Help Text and Error Message</h3>
          <MoleculeField
            label="town"
            name="town"
            errorText="Error!"
            helpText="Read the instructions to write proper format"
          >
            <FormInput id="town" type="text" />
          </MoleculeField>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>Inline With Validation Message</h3>
          <MoleculeField inline label="city" name="city" successText="Success!">
            <FormInput id="city" type="text" />
          </MoleculeField>
        </li>
        <li className="FormDemoMoleculeField-listItem">
          <h3>Error Message has priority</h3>
          <MoleculeField
            inline
            label="brand"
            name="brand"
            successText="Success!"
            errorText="Error!"
            helpText="Bla, bla, bla..."
          >
            <FormInput id="brand" type="text" />
          </MoleculeField>
        </li>
      </ul>
    </div>
  )
}

export default Form
