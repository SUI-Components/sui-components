import {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'

const textStatusConverter = ({errorText, alertText, successText}) => {
  if (alertText) return AtomValidationTextTypes.ALERT
  if (errorText) return AtomValidationTextTypes.ERROR
  if (successText) return AtomValidationTextTypes.SUCCESS
}

const useStatusValidationText = ({
  successText,
  errorText,
  alertText,
  status,
  statusText
}) => {
  return {
    text: alertText || successText || errorText || statusText,
    status: status || textStatusConverter({alertText, successText, errorText})
  }
}

export default useStatusValidationText
