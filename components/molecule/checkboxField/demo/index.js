/* eslint-disable no-console */
import MoleculeCheckboxField from 'components/molecule/checkboxField/src'

import './index.scss'

const styleList = {
  listStyle: 'none'
}

const styleListItem = {
  marginTop: '50px'
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Checkbox Field</h1>
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
            <h2>With Html Label</h2>
            <MoleculeCheckboxField
              id="info-help-text"
              nodeLabel={
                <>
                  this is the <a href="#">nodeLabel</a>
                </>
              }
              onChange={(e, {name, value}) => console.log({[name]: value})}
            />
          </li>
          <li style={styleListItem}>
            <h2>With Html Label + fullWidth</h2>
            <MoleculeCheckboxField
              id="info-help-text"
              fullWidth
              nodeLabel={
                <div style={{display: 'flex', border: '1px dashed #000'}}>
                  <div style={{flexGrow: 1}}>I'm full width</div>
                  <button>Action</button>
                </div>
              }
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
            <h2>With Alert validation HelpText</h2>
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
    </div>
  )
}

export default Demo
