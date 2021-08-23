import MoleculeValidationCode from 'components/molecule/validationCode/src'

const demoTexts = {
  labelText: 'Tu código de verificación',
  deleteButtonText: 'Borrar',
  sendButtonText: 'Validar código y entrar',
  resendButtonText: 'Volver a enviar'
}
export default () => (
  <MoleculeValidationCode
    deleteButtonText={demoTexts.deleteButtonText}
    sendButtonText={demoTexts.sendButtonText}
    resendButtonText={demoTexts.resendButtonText}
    labelText={demoTexts.labelText}
    defaultValue="234512"
  />
)
