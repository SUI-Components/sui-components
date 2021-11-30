import MoleculeTextareaField, {
  MoleculeTextareaSizes
} from 'components/molecule/textareaField/src'
import TextareaUpdatingValue from './updatingValue'
import withState from './withState'

const MoleculeTextareaFieldWithState = withState(MoleculeTextareaField)

const Demo = () => {
  const exceedLenghtText = exceedAmmount => {
    return `Has excedido ${exceedAmmount} caracteres el texto máximo`
  }

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>TextAreaField</h1>
        <p className="sui-Studio-h4">
          `MoleculeTextareaField` is a component that wraps a composition of
          Label + Textarea + Validations Messages.
        </p>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">Placeholder</h2>
          <div>
            <MoleculeTextareaFieldWithState
              id="commentd"
              label="with placeholder"
              maxChars={100}
              placeholder="Please, write something cool..."
            />
            <MoleculeTextareaFieldWithState
              id="commentd"
              label="with NO placeholder"
              maxChars={100}
            />
          </div>
        </div>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">Text exceed</h2>
          <div>
            <MoleculeTextareaFieldWithState
              id="commentd"
              label="Text that exceed the maxChars"
              maxChars={10}
              exceedLength
              exceedLengthText={exceedLenghtText}
              placeholder="Please, write text that exceeds the maxLength..."
            />
          </div>
        </div>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">State</h2>
          <div>
            <MoleculeTextareaField
              id="description"
              label="Success"
              value="In some place of La Mancha which name..."
              successText="Everything ok!"
            />
            <MoleculeTextareaField
              id="notes"
              label="Error"
              errorText="All wrong!"
              value="In some place of La Mancha which name..."
              maxChars={60}
            />
            <MoleculeTextareaField
              id="notes"
              label="Alert"
              alertText="Ok, but's something needs your attention..."
              value="In some place of La Mancha which name..."
              maxChars={60}
            />
          </div>
        </div>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">Size</h2>
          <div>
            <MoleculeTextareaField
              label="Short"
              size={MoleculeTextareaSizes.SHORT}
              maxChars={60}
            />
            <MoleculeTextareaField
              label="Long"
              size={MoleculeTextareaSizes.LONG}
              maxChars={60}
            />
          </div>
        </div>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">
            Autohide HelpText with <code>placeholder</code>
          </h2>
          <div>
            <MoleculeTextareaFieldWithState
              id="commentd"
              label="Comments"
              maxChars={100}
              placeholder="Please, write something cool..."
              autoHideHelpText
            />
          </div>
        </div>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">
            With Information HelpText and custom <code>textCharacters</code>
          </h2>
          <div>
            <MoleculeTextareaField
              id="description-inline"
              label="Description"
              helpText="Tu descripción en Latin"
              textCharacters="caracteres"
            />
          </div>
        </div>
        <div className="sui-Studio-wrapper--light">
          <h2 className="sui-Studio-h2">
            With <code>updateInternalValue</code> from outside
          </h2>
          <div>
            <TextareaUpdatingValue />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
