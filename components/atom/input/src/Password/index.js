import {forwardRef, useState} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import Input from '../Input/index.js'
import {BASE_CLASS_PASSWORD, BASE_CLASS_PASSWORD_TOGGLE_BUTTON, PASSWORD, TEXT} from './config.js'

const Password = forwardRef(
  ({onChange, pwShowLabel = 'show', pwHideLabel = 'hide', value, defaultValue = '', ...props}, forwardedRef) => {
    const [type, setType] = useState(PASSWORD)
    const [innerValue, setInnerValue] = useControlledState(value, defaultValue)

    const toggle = () => {
      const inputType = type === PASSWORD ? TEXT : PASSWORD
      setType(inputType)
    }

    const handleChange = (ev, {value}) => {
      setInnerValue(value)
      typeof onChange === 'function' && onChange(ev, {value})
    }

    return (
      <div className={BASE_CLASS_PASSWORD}>
        <Input ref={forwardedRef} {...props} onChange={handleChange} value={innerValue} type={type} />
        <div onClick={toggle} className={BASE_CLASS_PASSWORD_TOGGLE_BUTTON}>
          {type === PASSWORD ? pwShowLabel : pwHideLabel}
        </div>
      </div>
    )
  }
)

Password.propTypes = {
  /* Text to be shown in order to show the password on click */
  pwShowLabel: PropTypes.string,
  /* Text to be shown in order to hide the password on click */
  pwHideLabel: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func,
  /* The name of the control */
  name: PropTypes.string,
  /* The id of the control */
  id: PropTypes.string,
  /* The value of the control */
  value: PropTypes.string,
  /* The default value of the control */
  defaultValue: PropTypes.string
}

export default Password
