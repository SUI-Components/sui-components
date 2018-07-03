import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import Password from './Password'

const TYPES = {
  DATE: 'date',
  NUMBER: 'number',
  TEXT: 'text',
  PASSWORD: 'password',
  SUI_PASSWORD: 'sui-password'
}

const FormInput = ({type, ...props}) => {
  switch (type) {
    case 'sui-password':
      return <Password {...props} />
    default:
      return <Input {...props} type={type} />
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES))
}

FormInput.displayName = 'FormInput'

export default FormInput
