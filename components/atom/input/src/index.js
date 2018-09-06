import React from 'react'
import PropTypes from 'prop-types'

import Input, {inputSizes} from './Input'
import Password from './Password'
import Mask from './Mask'

const TYPES = {
  DATE: 'date',
  MASK: 'mask',
  NUMBER: 'number',
  PASSWORD: 'password',
  SUI_PASSWORD: 'sui-password',
  TEXT: 'text',
  RADIO: 'radio',
  CHECKBOX: 'checkbox'
}

const AtomInput = ({type, ...props}) => {
  switch (type) {
    case 'sui-password':
      return <Password {...props} />
    case 'mask':
      return <Mask {...props} />
    default:
      return <Input {...props} type={type} />
  }
}

AtomInput.propTypes = {
  /* native types (text, date, ...), 'sui-password' */
  type: PropTypes.oneOf(Object.values(TYPES)),
  /* Left addon component, text,... */
  leftAddon: PropTypes.any,
  /* Right addon component, text,... */
  rightAddon: PropTypes.any,
  /* Text to be shown in order to show the password on click */
  pwShowLabel: PropTypes.string,
  /* Text to be shown in order to hide the password on click */
  pwHideLabel: PropTypes.string,
  /* onBlur callback */
  onBlur: PropTypes.func,
  /* onChange callback */
  onChange: PropTypes.func,
  /* sets the name property of an element in the DOM */
  name: PropTypes.string,
  /* The DOM id global attribute. */
  id: PropTypes.string,
  /* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. */
  placeholder: PropTypes.string,
  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /* 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(inputSizes)),
  /* true = error, false = success, null = neutral */
  errorState: PropTypes.bool,
  /* value of the control */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /* mask object, see https://unmanner.github.io/imaskjs/ */
  mask: PropTypes.object
}

AtomInput.displayName = 'AtomInput'

export default AtomInput
export {inputSizes}
