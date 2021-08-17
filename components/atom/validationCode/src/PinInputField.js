import PropTypes from 'prop-types'
import './PinInputField.scss'
import {forwardRef, useCallback} from 'react'
import {usePinInputContext} from './PinInputContext'
import cx from 'classnames'
import {BASE_CLASSNAME, MASK} from './config.js'

const CLASSNAME = `${BASE_CLASSNAME}Field`

const getClassName = ({size, status}) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${size}`]: size,
    [`${CLASSNAME}--${status}`]: status
  })

const valueChecker = ({length, mask}) => value => {
  const matchExpression = `${mask}{${length}}`
  const regex = new RegExp(matchExpression)
  return regex.test(value)
}

const PinInputField = forwardRef(
  ({index, mask, maxLength, ...props}, forwardedRef) => {
    const {
      value = [],
      onChange,
      size,
      status,
      mask: maskContext = MASK.NUMBER,
      maxLength: maxLengthContext = 1,
      isOneTimeCode
    } = usePinInputContext()

    const isValidValue = useCallback(
      valueChecker({
        length: maxLength || maxLengthContext,
        mask: mask || maskContext
      }),
      [maxLength, maxLengthContext, mask, maskContext]
    )

    const onChangeHandler = event => {
      const eventValue = event.target.value
      const result = value.reduce((accumulator, current, i) => {
        if (i !== index) {
          accumulator[i] = current
        } else {
          accumulator[i] =
            eventValue === '' || !isValidValue(eventValue)
              ? undefined
              : event.target.value
        }
        return accumulator
      }, Array(value.length))
      onChange(event, {value: result})
    }
    return (
      <input
        className={getClassName({size, status})}
        value={value[index] === undefined ? '' : value[index]}
        onChange={onChangeHandler}
        maxLength={maxLength || maxLengthContext}
        {...(index === 0 && {autoFocus: true})}
        {...(isOneTimeCode && {autocomplete: 'one-time-code'})}
        ref={forwardedRef}
        {...props}
      />
    )
  }
)

PinInputField.displayName = 'PinInputField'
PinInputField.propTypes = {
  index: PropTypes.number,
  mask: PropTypes.string,
  maxLength: PropTypes.number
}
export default PinInputField
