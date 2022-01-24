import PropTypes from 'prop-types'

import {TYPES, getClassNames} from './settings.js'

const AtomValidationText = function({type, text}) {
  return <span className={getClassNames(type)}>{text}</span>
}

AtomValidationText.displayName = 'AtomValidationText'

AtomValidationText.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  text: PropTypes.string.isRequired
}

export default AtomValidationText
export {TYPES as AtomValidationTextTypes}
