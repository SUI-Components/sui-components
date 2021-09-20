import PropTypes from 'prop-types'
import {BASE_CLASS_BUTTON} from './config'

const withButton = WrappedInput => {
  const Input = ({button, ...props}) => {
    return button ? (
      <div className={BASE_CLASS_BUTTON}>
        <div className={`${BASE_CLASS_BUTTON}-input`}>
          <WrappedInput {...props} />
        </div>
        <div className={`${BASE_CLASS_BUTTON}-button`}>{button}</div>
      </div>
    ) : (
      <WrappedInput {...props} />
    )
  }

  Input.propTypes = {
    button: PropTypes.node
  }

  return Input
}

export default withButton
