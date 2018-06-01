import PropTypes from 'prop-types'

const types = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  text: PropTypes.any
}

export { types as default }
