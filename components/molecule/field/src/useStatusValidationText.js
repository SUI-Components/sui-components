import {AtomValidationTextTypes} from '@s-ui/react-atom-validation-text'

const textStatusConverter = ({errorText, alertText, successText}) => {
  if (alertText) return AtomValidationTextTypes.ALERT
  else if (errorText) return AtomValidationTextTypes.ERROR
  else if (successText) return AtomValidationTextTypes.SUCCESS
  return undefined
}

const useStatusValidationText = ({successText, errorText, alertText, status, statusText}) => {
  return {
    text: alertText || successText || errorText || statusText,
    status: status || textStatusConverter({alertText, successText, errorText})
  }
}

export default useStatusValidationText
