/* eslint-disable no-console */
import React from 'react'

import {withStateValue} from '@s-ui/hoc'

import MoleculeInputField from '../../../../components/molecule/inputField/src'
import Button from '@schibstedspain/sui-atom-button'

import './index.scss'

const MoleculeInputFieldWithState = withStateValue(MoleculeInputField)

const BASE_CLASS_DEMO = 'DemoMoleculeInputField'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div>
    <h1>
      <code>MoleculeInputField</code>
    </h1>
    <ul className={BASE_CLASS_DEMO}>
      <li className={CLASS_DEMO_SECTION}>
        <h2>
          With <code>placeholder</code>
        </h2>
        <MoleculeInputFieldWithState
          id="comments"
          label="Comments"
          placeholder="Please, write something cool..."
        />
      </li>
      <li className={CLASS_DEMO_SECTION}>
        <h2>With Addons</h2>
        <MoleculeInputFieldWithState
          id="second"
          leftAddon="http://"
          rightAddon="@schibsted.com"
          label="Description"
        />
      </li>
      <li className={CLASS_DEMO_SECTION}>
        <h2>With Information HelpText</h2>
        <MoleculeInputFieldWithState
          id="description-inline2"
          label="Description"
          helpText="Tu descripción en Latin"
        />
      </li>
      <li className={CLASS_DEMO_SECTION}>
        <h2>With Success Validation HelpText</h2>
        <MoleculeInputFieldWithState
          id="description2"
          label="Description"
          value="In some place of La Mancha which name..."
          successText="Everything ok!"
        />
      </li>
      <li className={CLASS_DEMO_SECTION}>
        <h2>With Error validation HelpText</h2>
        <MoleculeInputFieldWithState
          id="notes"
          label="Notes"
          errorText="All wrong!"
          value="In some place of La Mancha which name..."
        />
      </li>
      <li className={CLASS_DEMO_SECTION}>
        <h2>Inline</h2>
        <MoleculeInputFieldWithState
          id="notes"
          label="Notes"
          helpText="Tu descripción en Latin"
          value="In some place of La Mancha which name..."
          inline
        />
      </li>
      <li className={CLASS_DEMO_SECTION}>
        <h2>Inline w/ Button</h2>
        <form action="" style={{display: 'flex'}}>
          <MoleculeInputFieldWithState
            id="notes"
            label="Notes"
            helpText="Tu descripción en Latin"
            value="In some place of La Mancha which name..."
            inline
          />
          <Button>Send!</Button>
        </form>
      </li>
    </ul>
  </div>
)

export default Demo
