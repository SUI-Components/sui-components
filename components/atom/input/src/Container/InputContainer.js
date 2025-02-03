import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE, INPUT_SHAPES} from '../config.js'

const InputContainer = ({children, shape, noBorder, ...props}) => {
  return (
    <div
      className={cx(
        `${BASE}_Container`,
        shape && `${BASE}_Container-shape-${shape}`,
        noBorder && `${BASE}_Container-noBorder`
      )}
      {...props}
    >
      {children}
    </div>
  )
}

InputContainer.propTypes = {
  /** Sets the shape of the input field. It can be 'rounded', 'square' or 'circle' */
  shape: PropTypes.oneOf(Object.values(INPUT_SHAPES)),
  /** Nodes to be rendered inside the component */
  children: PropTypes.node,
  /** Removes the border from the input */
  noBorder: PropTypes.bool
}

export default InputContainer
