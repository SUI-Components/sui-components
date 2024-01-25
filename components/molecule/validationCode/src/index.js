import {forwardRef, useMemo} from 'react'

import PropTypes from 'prop-types'

import AtomButton, {atomButtonDesigns} from '@s-ui/react-atom-button'
import PinInput, {getPinInputValueType} from '@s-ui/react-atom-pin-input'
import ValidationText from '@s-ui/react-atom-validation-text'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {
  BASE_CLASS as baseClass,
  normalizeValue,
  validationCodeMask,
  validationCodeSizes,
  validationCodeStatus
} from './config.js'

const MoleculeValidationCode = forwardRef(
  (
    {
      autoFocus = false,
      defaultValue = '',
      deleteButtonTextLabel,
      disabled,
      isPassword,
      labelText,
      length = 6,
      mask,
      onChange,
      onClear,
      onResend,
      onSend,
      placeholder,
      resendButtonTextLabel,
      sendButtonTextLabel,
      size,
      footer: Footer = ({onSubmit, onResend, sendButtonTextLabel, resendButtonTextLabel}) => (
        <>
          <AtomButton fullWidth onClick={onSubmit} isFitted>
            {sendButtonTextLabel}
          </AtomButton>
          <AtomButton design={atomButtonDesigns.FLAT} fullWidth onClick={onResend} isFitted>
            {resendButtonTextLabel}
          </AtomButton>
        </>
      ),
      status,
      statusMessage,
      value
    },
    forwardedRef
  ) => {
    const [innerValue, setInnerValue] = useControlledState(normalizeValue(value), normalizeValue(defaultValue))

    const arrayInnerValue = innerValue.length > 0 ? innerValue.split(',') : innerValue

    const valueType = useMemo(() => getPinInputValueType({value, defaultValue}), [value, defaultValue])

    const onChangeHandler = (event, args) => {
      setInnerValue(`${args.innerValue}`)
      typeof onChange === 'function' &&
        onChange(event, {
          ...args,
          value: valueType === 'string' ? args.innerValue.join('') : args.innerValue
        })
    }

    const onClearHandler = event => {
      setInnerValue('')
      typeof onClear === 'function' && onClear(event)
      typeof onChange === 'function' && onChange(event, {value: '', innerValue: []})
    }

    const onHandler = handler => {
      return handler
        ? event => {
            handler(event, {
              value:
                valueType === 'string' ? arrayInnerValue && arrayInnerValue.filter(Boolean).join('') : arrayInnerValue
            })
          }
        : undefined
    }

    const isHeaderless = !labelText && !deleteButtonTextLabel
    const isFooterless = !Footer

    return (
      <div className={baseClass}>
        {!isHeaderless && (
          <div className={`${baseClass}-header`}>
            {labelText ? <p className={`${baseClass}-header-labelTitle`}>{labelText}</p> : null}
            {deleteButtonTextLabel && (
              <AtomButton onClick={onClearHandler} design={atomButtonDesigns.FLAT}>
                {deleteButtonTextLabel}
              </AtomButton>
            )}
          </div>
        )}
        <div className={`${baseClass}-inputContainer`}>
          <div className={`${baseClass}-inputContainer-pinInput ${isFooterless && `is-marginless`}`}>
            <PinInput
              autoFocus={autoFocus}
              disabled={disabled}
              isPassword={isPassword}
              length={length}
              mask={mask}
              onChange={onChangeHandler}
              placeholder={placeholder}
              ref={forwardedRef}
              size={size}
              status={status}
              value={arrayInnerValue}
            />
            {statusMessage !== undefined && <ValidationText text={statusMessage} type={status} />}
          </div>
        </div>
        {!isFooterless && (
          <div className={`${baseClass}-footer`}>
            <Footer
              onSubmit={onHandler(onSend)}
              onResend={onHandler(onResend)}
              sendButtonTextLabel={sendButtonTextLabel}
              resendButtonTextLabel={resendButtonTextLabel}
            />
          </div>
        )}
      </div>
    )
  }
)

MoleculeValidationCode.displayName = 'MoleculeValidationCode'
MoleculeValidationCode.propTypes = {
  /** boolean to autoFocus the first input */
  autoFocus: PropTypes.bool,
  /** text on the label */
  labelText: PropTypes.string,
  /** text on delete button */
  deleteButtonTextLabel: PropTypes.string,
  /** text on send button  */
  sendButtonTextLabel: PropTypes.string,
  /** text on resend button */
  resendButtonTextLabel: PropTypes.string,
  /** message shown on status */
  statusMessage: PropTypes.string,
  /** function to be called when user presses clear button */
  onClear: PropTypes.func,
  /** default value for the input */
  defaultValue: PropTypes.string,
  /** true for disabled false for default */
  disabled: PropTypes.bool,
  /** true to make the input type password false for text */
  isPassword: PropTypes.bool,
  /** defines the number of cells */
  length: PropTypes.number,
  /** name of the custom mask (NUMBER, ALPHABETIC, ALPHANUMERIC) */
  mask: PropTypes.oneOf(Object.values(validationCodeMask)),
  /** function executed on value change */
  onChange: PropTypes.func,
  /** function executed on pressing sending button */
  onSend: PropTypes.func,
  /** function executed on pressing re-sending button */
  onResend: PropTypes.func,
  /** placeholder for the input */
  placeholder: PropTypes.string,
  /** set the size of the input (XXSMALL, XSMALL, SMALL, MEDIUM, LARGE, XLARGE, XXLARGE) */
  size: PropTypes.oneOf(Object.values(validationCodeSizes)),
  /** set the input status (ERROR, SUCCESS, WARNING) */
  status: PropTypes.oneOf(Object.values(validationCodeStatus)),
  /** input value */
  value: PropTypes.string,
  /** React node ith injected onSubmit onResend prop handlers ({onSubmit, onResend}) => () **/
  footer: PropTypes.node
}

export default MoleculeValidationCode

export {validationCodeStatus, validationCodeMask, validationCodeSizes}
