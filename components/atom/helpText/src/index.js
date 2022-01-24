import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const AtomHelpText = ({text}) => <span className={BASE_CLASS}>{text}</span>

AtomHelpText.displayName = 'AtomHelpText'

AtomHelpText.propTypes = {
  text: PropTypes.string.isRequired
}

export default AtomHelpText
