import PropTypes from 'prop-types'
import PinInput from '@s-ui/react-atom-pin-input'
import AtomButton, {atomButtonDesigns} from '@s-ui/react-atom-button'
import ValidationText from '@s-ui/react-atom-validation-text'
import {validationCodeStatus, SIZES, MASK} from './config'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import {forwardRef} from 'react'

const baseClass = 'sui-MoleculeValidationCode'
const MoleculeValidationCode = forwardRef(
  (
    {
      labelText,
      deleteButtonText,
      sendButtonText,
      resendButtonText,
      value,
      defaultValue,
      onChange,
      size,
      onClear,
      isPassword,
      status,
      statusMessage,
      placeholder,
      length = 6,
      mask,
      disabled
    },
    forwardedRef
  ) => {
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
            length={length}
            onChange={onChangeHandler}
            value={innerValue}
            status={status}
            ref={forwardedRef}
            placeholder={placeholder}
            isPassword={isPassword}
            size={size}
            mask={mask}
            disabled={disabled}
          />
        </div>
        <div className={`${baseClass}-errorMessage`}>
          {statusMessage !== undefined && (
            <ValidationText text={statusMessage} type={status} />
          )}
        </div>

        <div className={`${baseClass}-footer`}>
          <AtomButton fullWidth>{sendButtonText}</AtomButton>
          <AtomButton fullWidth design={atomButtonDesigns.FLAT}>
            {resendButtonText}
          </AtomButton>
        </div>
      </div>
    )
  }
)

MoleculeValidationCode.displayName = 'MoleculeValidationCode'
MoleculeValidationCode.propTypes = {
  labelText: PropTypes.string,
  deleteButtonText: PropTypes.string,
  sendButtonText: PropTypes.string,
  resendButtonText: PropTypes.string,
  status: PropTypes.oneOf(Object.values(validationCodeStatus)),
  statusMessage: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZES)),
  placeholder: PropTypes.string,
  length: PropTypes.number,
  mask: PropTypes.oneOf(Object.values(MASK)),
  disabled: PropTypes.bool,
  isPassword: PropTypes.bool
}

export default MoleculeValidationCode
