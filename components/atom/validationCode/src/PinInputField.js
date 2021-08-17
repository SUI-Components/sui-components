import PropTypes from 'prop-types'
import './PinInputField.scss'
import {forwardRef} from 'react'
import {usePinInputContext} from './PinInputContext'
import cx from 'classnames'
import {BASE_CLASSNAME} from './config.js'

const CLASSNAME = `${BASE_CLASSNAME}Field`

const getClassName = ({size, status}) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${size}`]: size,
    [`${CLASSNAME}--${status}`]: status
  })

const PinInputField = forwardRef(({index, ...props}, forwardedRef) => {
  const {
    value = [],
    onChange,
    size,
    status,
    isOneTimeCode
  } = usePinInputContext()

  const onChangeHandler = event => {
    const result = value.reduce((accumulator, current, i) => {
      if (i !== index) {
        accumulator[i] = current
      } else {
        accumulator[i] =
          event.target.value === '' ? undefined : event.target.value
      }
      return accumulator
    }, Array(value.lenght))
    onChange(event, {value: result})
  }
  return (
    <input
      className={getClassName({size, status})}
      value={value[index]}
      onChange={onChangeHandler}
      {...(index === 0 && {autoFocus: true})}
      {...(isOneTimeCode && {autocomplete: 'one-time-code'})}
      ref={forwardedRef}
      {...props}
    />
  )
})

PinInputField.displayName = 'PinInputField'
PinInputField.propTypes = {
  index: PropTypes.number
}
export default PinInputField
