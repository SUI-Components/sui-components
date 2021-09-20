import {useState} from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import {
  BASE_CLASS_PASSWORD,
  BASE_CLASS_PASSWORD_TOGGLE_BUTTON,
  TEXT,
  PASSWORD
} from './config'

const Password = ({
  onChange,
  pwShowLabel = 'show',
  pwHideLabel = 'hide',
  ...props
}) => {
  const [type, setType] = useState(PASSWORD)
  const [value, setValue] = useState('')

  const toggle = () => {
    const inputType = type === PASSWORD ? TEXT : PASSWORD
    setType(inputType)
  }

  const handleChange = (ev, {value}) => {
    setValue(value)
    typeof onChange === 'function' && onChange(ev, {value})
  }

  return (
    <div className={BASE_CLASS_PASSWORD}>
      <Input {...props} onChange={handleChange} value={value} type={type} />
      <div onClick={toggle} className={BASE_CLASS_PASSWORD_TOGGLE_BUTTON}>
        {type === PASSWORD ? pwShowLabel : pwHideLabel}
      </div>
    </div>
  )
}

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
  id: PropTypes.string
}

export default Password
