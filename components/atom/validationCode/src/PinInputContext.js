import {
  createContext,
  useContext,
  forwardRef,
  Children,
  cloneElement,
  useState,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {arrowKeysEventHandlingMapper, SIZES, STATUS} from './config'
import useKeyPress from './hooks/useKeyPress'

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
      value,
      targetRef
    },
    forwardedRef
  ) => {
    const inputReferenceStack = []
    const [focusPosition, setFocusPosition] = useState(0)
    const [innerValue, setInnerValue] = useControlledState(
      value ? value.split('') : undefined,
      defaultValue ? defaultValue.split('') : undefined
    )
    const onChangeHandler = (event, {value}) => {
      setInnerValue(value)
      typeof onChange === 'function' &&
        onChange(event, {value: value.filter(Boolean).join('')})
    }

    const setFocus = useCallback(
      position => {
        if (inputReferenceStack[position]) {
          setFocusPosition(position)
          setTimeout(() => {
            inputReferenceStack[position].focus()
            inputReferenceStack[position].select()
          }, 0)
        } else {
          setTimeout(() => {
            inputReferenceStack[focusPosition].focus()
            inputReferenceStack[focusPosition].select()
          }, 0)
        }
      },
      [setFocusPosition, inputReferenceStack]
    )

    useKeyPress(
      event => {
        let newIndex = focusPosition

        switch (event.key) {
          case 'ArrowLeft':
            event.shiftKey
            newIndex = newIndex - 1
            setFocus(newIndex)
            break
          case 'ArrowRight':
            newIndex = newIndex + 1
            setFocus(newIndex)
            break
          case 'Tab':
            newIndex = event.shiftKey ? newIndex - 1 : newIndex + 1
            setFocus(newIndex)
            break;
          default:
            break
        }
      },
      {target: targetRef}
    )

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
            focusPosition,
            setFocus
          }}
        >
          {Children.toArray(children).map((child, index) =>
            cloneElement(child, {
              index,
              ref: node => {
                // Keep your own reference
                if (node) inputReferenceStack[index] = node
                // Call the original ref, if any
                const {ref} = child
                if (typeof ref === 'function') {
                  ref(node)
                }
              }
            })
          )}
        </PinInputContext.Provider>
        <input
          type="hidden"
          ref={forwardedRef}
          value={innerValue.filter(Boolean).join('')}
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
  value: PropTypes.string
}

const usePinInputContext = () => useContext(PinInputContext)
export {PinInputContextProvider, usePinInputContext}
