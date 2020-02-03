/* eslint-disable no-console */
import React from 'react'
import MoleculeCheckboxField from '../../../../components/molecule/checkboxField/src'

import './index.scss'

const BASE_CLASS_DEMO = `DemoMoleculeCheckboxField`

const styleList = {
  listStyle: 'none'
}

const styleListItem = {
  marginTop: '50px'
}

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculeCheckboxField</code>
      </h1>
      <ul style={styleList}>
        <li style={styleListItem}>
          <h2>With Information HelpText</h2>
          <MoleculeCheckboxField
            id="info-help-text"
            label="Description"
            helpText="Tu descripción en Latin"
            onChange={(e, {name, value}) => console.log({[name]: value})}
          />
        </li>
        <li style={styleListItem}>
          <h2>With Success Validation HelpText</h2>
          <MoleculeCheckboxField
            id="success-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            successText="Everything ok!"
            onChange={(e, {name, value}) => console.log({[name]: value})}
          />
        </li>
        <li style={styleListItem}>
          <h2>With Error validation HelpText</h2>
          <MoleculeCheckboxField
            id="error-help-text"
            label="Notes"
            errorText="All wrong!"
            value="In some place of La Mancha which name..."
            onChange={(e, {name, value}) => console.log({[name]: value})}
          />
        </li>
        <li style={styleListItem}>
          <h2>With Error validation HelpText</h2>
          <MoleculeCheckboxField
            id="alert-help-text"
            label="Notes"
            alertText="Something meh..."
            value="In some place of La Mancha which name..."
            onChange={(e, {name, value}) => console.log({[name]: value})}
          />
        </li>
      </ul>
    </div>
  )
}

export default Demo
