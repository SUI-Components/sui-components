import React from 'react'

import MoleculeCheckboxField from '../../../../components/molecule/checkboxField/src'

import './index.scss'
import withCheckedValue from './hoc/withCheckedValue'

const BASE_CLASS_DEMO = `DemoMoleculeCheckboxField`

const MoleculeCheckboxFieldWithState = withCheckedValue(MoleculeCheckboxField)

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
          <MoleculeCheckboxFieldWithState
            id="description-inline2"
            label="Description"
            helpText="Tu descripción en Latin"
          />
        </li>
        <li style={styleListItem}>
          <h2>With Success Validation HelpText</h2>
          <MoleculeCheckboxFieldWithState
            id="description2"
            label="Description"
            value="In some place of La Mancha which name..."
            successText="Everything ok!"
          />
        </li>
        <li style={styleListItem}>
          <h2>With Error validation HelpText</h2>
          <MoleculeCheckboxFieldWithState
            id="notes"
            label="Notes"
            errorText="All wrong!"
            value="In some place of La Mancha which name..."
          />
        </li>
      </ul>
    </div>
  )
}

export default Demo
