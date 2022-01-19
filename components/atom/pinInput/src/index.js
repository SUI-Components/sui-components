import {forwardRef, useCallback, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {MASK, SIZES, STATUS, getValueType, BASE_CLASSNAME} from './config'
import useUpdateEffect from './hooks/useUpdateEffect'
import useKeyPress from './hooks/useKeyPress'
import {actions as pinInputActions, usePinInputReducer} from './reducer'
import {PinInputContextProvider} from './PinInputContext'
import PinInputChildren from './PinInputChildren'
import PinInputField from './PinInputField'

const CLASSNAME = BASE_CLASSNAME

const PinInput = forwardRef(
  (
    {
      children,
      defaultValue = '',
      disabled,
      inputMode,
      isOneTimeCode = true,
      isPassword = false,
      length = 6,
      mask,
      onChange,
      placeholder = '',
      size = SIZES.MEDIUM,
      status,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = useRef()
    const targetRef = useRef()
    const [reducerStore, dispatch] = usePinInputReducer({
      mask,
      defaultValue,
      value,
      disabled
    })
    const {innerValue, focusPosition, elements} = reducerStore

    useUpdateEffect(() => {
      const innerValue =
        typeof value === 'string' ? value.split('') : value || []
      dispatch(pinInputActions.setValue({innerValue}))
    }, [`${value}`, dispatch])

    useEffect(() => {
      dispatch(pinInputActions.setDisabled({disabled}))
    }, [disabled, dispatch])

    useEffect(() => {
      dispatch(pinInputActions.setMask({mask}))
    }, [mask, dispatch])

    const setFocus = useCallback(
      position => {
        dispatch(pinInputActions.setFocus({focusPosition: position}))
      },
      [dispatch]
    )

    useKeyPress(
      event => {
        dispatch(pinInputActions.setKey({event, onChange}))
      },
      {target: targetRef, onChange}
    )

    const getIndex = useCallback(
      node => {
        return elements.indexOf(node)
      },
      [elements]
    )

    useUpdateEffect(() => {
      setFocus(focusPosition)
    }, [focusPosition])

    return (
      <div className={CLASSNAME} ref={targetRef}>
        <PinInputContextProvider
          disabled={reducerStore.disabled}
          dispatch={dispatch}
          getIndex={getIndex}
          inputMode={inputMode}
          isOneTimeCode={isOneTimeCode}
          isPassword={isPassword}
          mask={reducerStore.mask}
          placeholder={placeholder}
          setFocus={setFocus}
          size={size}
          status={status}
          targetRef={innerRef}
          value={innerValue}
        >
          <PinInputChildren length={length}>{children}</PinInputChildren>
        </PinInputContextProvider>
        <input
          type="hidden"
          value={innerValue.filter(Boolean).join('')}
          ref={useMergeRefs(innerRef, forwardedRef)}
        />
      </div>
    )
  }
)

PinInput.displayName = 'PinInput'
PinInput.propTypes = {
  /** children the components is gonna have  */
  children: PropTypes.node,
  /** default value for the input */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** true for disabled false for default */
  disabled: PropTypes.bool,
  /** inputmode **/
  inputMode: PropTypes.string,
  /** true for autocomplete from keyboard false for default  */
  isOneTimeCode: PropTypes.bool,
  /** true to make the input type password false for text */
  isPassword: PropTypes.bool,
  /** defines the number of cells */
  length: PropTypes.number,
  /** name of the custom mask (NUMBER, ALPHABETIC, ALPHANUMERIC) */
  mask: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(MASK)),
    PropTypes.string
  ]),
  /** function executed on value change */
  onChange: PropTypes.func,
  /** placeholder for the input */
  placeholder: PropTypes.string,
  /** set the size of the input (XXSMALL, XSMALL, SMALL, MEDIUM, LARGE, XLARGE, XXLARGE) */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /** set the input status (ERROR, SUCCESS, WARNING) */
  status: PropTypes.oneOf(Object.values(BASE_CLASSNAME)),
  /** input value */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}
export default PinInput

export {
  PinInputField,
  MASK as pinInputMask,
  SIZES as pinInputSizes,
  STATUS as pinInputStatus,
  getValueType as getPinInputValueType
}
