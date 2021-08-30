import PropTypes from 'prop-types'
import PinInput from '@s-ui/react-atom-pin-input'
import AtomButton, {atomButtonDesigns} from '@s-ui/react-atom-button'
import ValidationText from '@s-ui/react-atom-validation-text'
import {validationCodeStatus} from './config'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

const baseClass = 'sui-MoleculeValidationCode'
export default function MoleculeValidationCode({
  labelText,
  deleteButtonText,
  sendButtonText,
  resendButtonText,
  value,
  defaultValue,
  onChange,
  onClear,
  status,
  statusMessage
}) {
  const [innerValue, setInnerValue] = useControlledState(value, defaultValue)

  const onChangeHandler = (event, {value}) => {
    setInnerValue(value)
    typeof onChange === 'function' && onChange(event, {value})
  }

  const onClearHandler = event => {
    setInnerValue('')
    typeof onClear === 'function' && onClear(event)
    typeof onChange === 'function' && onChange(event, {value: ''})
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-header`}>
        <p className={`${baseClass}-header-labelTitle`}>{labelText}</p>
        <AtomButton onClick={onClearHandler} design={atomButtonDesigns.FLAT}>
          {deleteButtonText}
        </AtomButton>
      </div>
      <div className={`${baseClass}-pinInput`}>
        <PinInput
          length={6}
          onChange={onChangeHandler}
          value={innerValue}
          status={status}
        />
      </div>
      {statusMessage !== undefined && (
        <ValidationText text={statusMessage} type={status} />
      )}
      <div className={`${baseClass}-footer`}>
        <AtomButton fullWidth>{sendButtonText}</AtomButton>
        <AtomButton fullWidth design={atomButtonDesigns.FLAT}>
          {resendButtonText}
        </AtomButton>
      </div>
    </div>
  )
}

MoleculeValidationCode.displayName = 'MoleculeValidationCode'
MoleculeValidationCode.propTypes = {
  labelText: PropTypes.string,
  deleteButtonText: PropTypes.string,
  sendButtonText: PropTypes.string,
  resendButtonText: PropTypes.string,
  status: PropTypes.oneOf(Object.values(validationCodeStatus)),
  statusMessage: PropTypes.string
}
