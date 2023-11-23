import PropTypes from 'prop-types'

import {BASE_CLASS_DEMO} from '../../settings.js'

const CustomArrow = ({children}) => <span className={`${BASE_CLASS_DEMO}-customArrow`}>{children}</span>

CustomArrow.propTypes = {
  children: PropTypes.node
}

export default CustomArrow
