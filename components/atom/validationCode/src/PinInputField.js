import {forwardRef, useCallback, useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {BASE_CLASSNAME, MASK} from './config.js'
import {usePinInputContext} from './PinInputContext'

import './PinInputField.scss'

const CLASSNAME = `${BASE_CLASSNAME}Field`

const getClassName = ({size, status}) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${size}`]: size,
    [`${CLASSNAME}--${status}`]: status
  })

const valueChecker = ({length = 1, mask}) => value => {
  const matchExpression = `${mask}{${length}}`
  const regex = new RegExp(matchExpression)
  return regex.test(value)
}

const PinInputField = forwardRef(({index, mask, ...props}, forwardedRef) => {
  const innerRef = useRef()
  const {
    value = [],
    onChange,
    size,
    status,
    mask: maskContext = MASK.NUMBER,
    isOneTimeCode,
    setFocus
  } = usePinInputContext()

  const isValidValue = useCallback(
    valueChecker({
      mask: mask || maskContext
    }),
    [mask, maskContext]
  )

  const onKeyDownHandler = event => {
    const eventValue = event.target.value
    const eventKey = event.key
    const result = value.reduce((accumulator, current, i) => {
      if (i !== index) {
        accumulator[i] = current
      } else {
        if (['Backspace', 'Delete'].includes(eventKey)) {
          accumulator[i] = undefined
          setFocus(i)
        } else if (eventKey.length > 1) {
          accumulator[i] = eventValue
        } else if (isValidValue(eventKey)) {
          accumulator[i] = eventKey
          setFocus(i + 1)
        } else {
          accumulator[i] = eventValue
          setFocus(i)
        }
      }
      return accumulator
    }, Array(value.length))
    value[index] !== eventKey && onChange(event, {value: result})
  }

  const onFocusHandler = () => {
    setFocus(index)
  }

  return (
    <input
      ref={useMergeRefs(innerRef, forwardedRef)}
      className={getClassName({size, status})}
      value={value[index] === undefined ? '' : value[index]}
      onKeyDown={onKeyDownHandler}
      onFocus={onFocusHandler}
      maxLength="1"
      {...(isOneTimeCode && {autoComplete: 'one-time-code'})}
      {...props}
    />
  )
})

PinInputField.displayName = 'PinInputField'
PinInputField.propTypes = {
  index: PropTypes.number,
  mask: PropTypes.string
}
export default PinInputField
