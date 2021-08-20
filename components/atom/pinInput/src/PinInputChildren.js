import PropTypes from 'prop-types'
import {BASE_CLASSNAME} from './config'
import PinInputField from './PinInputField'

const CLASSNAME = `${BASE_CLASSNAME}FieldsWrapper`

const PinInputChildren = ({length, children}) => {
  if (children) return children
  return (
    <div className={CLASSNAME}>
      {Array(length)
        .fill('')
        .map((value, index) => (
          <PinInputField key={index} />
        ))}
    </div>
  )
}

PinInputChildren.propTypes = {
  length: PropTypes.number,
  children: PropTypes.node
}

export default PinInputChildren
