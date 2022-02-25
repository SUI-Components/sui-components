import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomHelpText from '@s-ui/react-atom-help-text'

const textStatusConverter = ({errorText, alertText, successText}) => {
  if (alertText) return AtomValidationTextTypes.ALERT
  if (errorText) return AtomValidationTextTypes.ERROR
  if (successText) return AtomValidationTextTypes.SUCCESS
}

const useStatusHelpText = ({
  successText,
  errorText,
  alertText,
  helpText,
  status,
  disabled
}) => {
  if (status) {
    return {
      text: alertText || successText || errorText || helpText,
      status,
      element:
        !disabled &&
        (alertText ||
          successText ||
          errorText ||
          Object.values(AtomValidationTextTypes).includes(status))
          ? AtomValidationText
          : AtomHelpText
    }
  }

  if (errorText || successText || alertText) {
    return {
      text: alertText || successText || errorText,
      status: textStatusConverter({alertText, successText, errorText}),
      element: disabled ? AtomHelpText : AtomValidationText
    }
  }

  return {
    text: helpText,
    status: undefined,
    element: AtomHelpText
  }
}

export default useStatusHelpText
