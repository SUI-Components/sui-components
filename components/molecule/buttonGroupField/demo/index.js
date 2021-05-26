/* eslint-disable react/prop-types, no-unused-vars, no-console */

import MoleculeButtonGroupField from 'components/molecule/buttonGroupField/src'
import AtomButtom from '@s-ui/react-atom-button'

const BASE_CLASS_DEMO = 'DemoMoleculeButtonGroupField'

const DemoMoleculeButtonGroupField = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Button Group Field</h1>
        <div className={`${BASE_CLASS_DEMO}-section`}>
          <h2>With Information HelpText</h2>
          <MoleculeButtonGroupField
            id="info-help-text"
            label="Your text here"
            helpText="Your description here"
          >
            <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
          </MoleculeButtonGroupField>
        </div>

        <div className={`${BASE_CLASS_DEMO}-section`}>
          <h2>With Success Validation HelpText</h2>
          <MoleculeButtonGroupField
            id="success-help-text"
            label="Your text here"
            successText="Everything ok!"
          >
            <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
          </MoleculeButtonGroupField>
        </div>

        <div className={`${BASE_CLASS_DEMO}-section`}>
          <h2>With Error validation HelpText</h2>
          <MoleculeButtonGroupField
            id="error-help-text"
            label="Your text here"
            errorText="All wrong!"
          >
            <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
          </MoleculeButtonGroupField>
        </div>

        <div className={`${BASE_CLASS_DEMO}-section`}>
          <h2>With Alert validation HelpText</h2>
          <MoleculeButtonGroupField
            id="alert-help-text"
            label="Your text here"
            alertText="Something meh..."
          >
            <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
            <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
          </MoleculeButtonGroupField>
        </div>
      </div>
    </div>
  )
}

export default DemoMoleculeButtonGroupField
