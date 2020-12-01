import {useState} from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_PASSWORD = `${BASE_CLASS}-password`
const CLASS_PASSWORD_TOGGLE_BUTTON = `${CLASS_PASSWORD}--toggleButton`

const TEXT = 'text'
const PASSWORD = 'password'
const HIDE_LABEL = 'hide'
const SHOW_LABEL = 'show'

const Password = ({onChange, pwShowLabel, pwHideLabel, ...props}) => {
  const [type, setType] = useState(PASSWORD)
  const [value, setValue] = useState('')

  const toggle = () => {
    const inputType = type === PASSWORD ? TEXT : PASSWORD
    setType(inputType)
  }

  const handleChange = (ev, {value}) => {
    setValue(value)
    onChange(ev, {value})
  }

  return (
    <div className={CLASS_PASSWORD}>
      <Input {...props} onChange={handleChange} value={value} type={type} />
      <div onClick={toggle} className={CLASS_PASSWORD_TOGGLE_BUTTON}>
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

Password.defaultProps = {
  pwShowLabel: SHOW_LABEL,
  pwHideLabel: HIDE_LABEL,
  onChange: () => {}
}

export default Password
