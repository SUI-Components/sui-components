import PropTypes from 'prop-types'

import {BASE_CLASSNAME} from './config.js'
import PinInputField from './PinInputField.js'

const CLASSNAME = `${BASE_CLASSNAME}FieldsWrapper`

const PinInputChildren = ({autoFocus = false, length, children}) => {
  if (children) return children
  return (
    <div className={CLASSNAME}>
      {Array(length)
        .fill('')
        .map((value, index) => (
          <PinInputField
            key={index}
            autoFocus={Boolean(index === 0 && autoFocus)}
          />
        ))}
    </div>
  )
}

PinInputChildren.propTypes = {
  /** boolean to autoFocus the first input */
  autoFocus: PropTypes.bool,
  /** number of input */
  length: PropTypes.number,
  /** children to be rendered */
  children: PropTypes.node
}

export default PinInputChildren
