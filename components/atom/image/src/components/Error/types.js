import PropTypes from 'prop-types'

const types = {
  /** Icon (component) to be displayed in the Error Box */
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Text to be displayed in the Error Box */
  text: PropTypes.any
}

export { types as default }
