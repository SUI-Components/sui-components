import PropTypes from 'prop-types'

import {BASE_CLASS_BUTTON} from './config.js'

const InputButton = ({button, children}) => {
  if (button === undefined) {
    return children
  }

  return (
    <div className={BASE_CLASS_BUTTON}>
      <div className={`${BASE_CLASS_BUTTON}-input`}>{children}</div>
      <div className={`${BASE_CLASS_BUTTON}-button`}>{button}</div>
    </div>
  )
}
InputButton.propTypes = {
  /** button html element */
  button: PropTypes.node,
  /* inner react node element */
  children: PropTypes.node
}

export default InputButton
