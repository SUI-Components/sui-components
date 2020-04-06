import React from 'react'
import MoleculeTextareaField from '../../../../components/molecule/textareaField/src'
import TextareaUpdatingValue from './updatingValue'
import withState from './withState'

const styleList = {
  listStyle: 'none'
}

const MoleculeTextareaFieldWithState = withState(MoleculeTextareaField)

const Demo = () => {
  return (
    <div>
      <h1>
        <code>MoleculeTextareaField</code>
      </h1>
      <ul style={styleList}>
        <li>
          <h2>
            With <code>placeholder</code>
          </h2>
          <MoleculeTextareaFieldWithState
            id="commentd"
            label="Comments"
            maxChars={100}
            placeholder="Please, write something cool..."
          />
        </li>
        <li>
          <h2>
            With <code>placeholder</code> and autohide HelpText
          </h2>
          <MoleculeTextareaFieldWithState
            id="commentd"
            label="Comments"
            maxChars={100}
            placeholder="Please, write something cool..."
            autoHideHelpText
          />
        </li>
        <li>
          <h2>
            With Information HelpText and custom <code>textCharacters</code>
          </h2>
          <MoleculeTextareaField
            id="description-inline"
            label="Description"
            helpText="Tu descripción en Latin"
            textCharacters="caracteres"
          />
        </li>
        <li>
          <h2>With Success Validation HelpText</h2>
          <MoleculeTextareaField
            id="description"
            label="Description"
            value="In some place of La Mancha which name..."
            successText="Everything ok!"
          />
        </li>
        <li>
          <h2>
            With Error validation HelpText and custom <code>maxChars</code>
          </h2>
          <MoleculeTextareaField
            id="notes"
            label="Notes"
            errorText="All wrong!"
            value="In some place of La Mancha which name..."
            maxChars={60}
          />
        </li>
        <li>
          <h2>
            With Alert validation HelpText and custom <code>maxChars</code>
          </h2>
          <MoleculeTextareaField
            id="notes"
            label="Notes"
            alertText="Ok, but's something needs your attention..."
            value="In some place of La Mancha which name..."
            maxChars={60}
          />
        </li>
        <li>
          <h2>
            With <code>updateInternalValue</code> from outside
          </h2>
          <TextareaUpdatingValue />
        </li>
      </ul>
    </div>
  )
}

export default Demo
