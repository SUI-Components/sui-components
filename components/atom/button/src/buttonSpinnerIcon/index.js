import PropTypes from 'prop-types'
import {BASE_CLASSNAME} from './config'

const ButtonSpinnerIcon = ({role = 'status', ...props}) => {
  return <div role="status" {...props} className={BASE_CLASSNAME} />
}
ButtonSpinnerIcon.propTypes = {
  role: PropTypes.string
}
ButtonSpinnerIcon.displayName = 'AtomButtonSpinnerIcon'

export default ButtonSpinnerIcon
