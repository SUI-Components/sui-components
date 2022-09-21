import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS_BUTTON, BASE_CLASS_ITEM} from './config.js'

const InputButton = ({button, children}) => {
  if (button === undefined) {
    return children
  }

  return (
    <>
      {children}
      <span className={cx(BASE_CLASS_ITEM, `${BASE_CLASS_BUTTON}-button`)}>
        {button}
      </span>
    </>
  )
}
InputButton.propTypes = {
  /** button html element */
  button: PropTypes.node,
  /* inner react node element */
  children: PropTypes.node
}

export default InputButton
