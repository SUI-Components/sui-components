import PropTypes from 'prop-types'
import {
  createContext,
  useContext,
  forwardRef,
  Children,
  cloneElement
} from 'react'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import {SIZES, STATUS, TYPES} from './config'

const PinInputContext = createContext({})

const PinInputContextProvider = forwardRef(
  (
    {
      children,
      defaultValue,
      mask,
      isOneTimeCode,
      placeholder,
      size,
      onChange,
      status,
      type,
      value
    },
    forwardedRef
  ) => {
    const [innerValue, setInnerValue] = useControlledState(
      value ? value.split('') : undefined,
      defaultValue ? defaultValue.split('') : undefined
    )
    const onChangeHandler = (event, {value}) => {
      typeof onChange === 'function' &&
        onChange(event, {value: value.filter(Boolean).join('')})
      setInnerValue(value)
    }
    return (
      <>
        <PinInputContext.Provider
          value={{
            mask,
            value: innerValue,
            onChange: onChangeHandler,
            isOneTimeCode,
            placeholder,
            size,
            status,
            type
          }}
        >
          {Children.toArray(children).map((child, index) =>
            cloneElement(child, {index})
          )}
        </PinInputContext.Provider>
        <input
          type="hidden"
          ref={forwardedRef}
          value={innerValue.filter(Boolean).join()}
        />
      </>
    )
  }
)

PinInputContextProvider.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  mask: PropTypes.string,
  isOneTimeCode: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(Object.values(TYPES))
  ]),
  value: PropTypes.string
}

const usePinInputContext = () => useContext(PinInputContext)
export {PinInputContextProvider, usePinInputContext}
