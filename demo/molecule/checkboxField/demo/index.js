/* eslint-disable no-console */
import React from 'react'
import AtomIcon from '../../../../components/atom/icon/src'
import MoleculeCheckboxField from '../../../../components/molecule/checkboxField/src'

import './index.scss'

const IconCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.77 20.812l-5-5a.5.5 0 0 0-.707.707l5.417 5.417a.5.5 0 0 0 .76-.062L21.99 2.707a.5.5 0 0 0-.813-.583L7.77 20.812z"
        fillRule="nonzero"
      />
    </svg>
  </AtomIcon>
)
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
          <h2>Styled</h2>
          <MoleculeCheckboxField
            id="styled"
            label="Styled"
            onChange={(e, {name, value}) => console.log({[name]: value})}
            styledIcon={IconCheck}
          />
        </li>
      </ul>
    </div>
  )
}

export default Demo
