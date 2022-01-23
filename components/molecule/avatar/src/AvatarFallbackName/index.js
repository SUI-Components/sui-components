import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS_NAME} from './settings.js'

const MoleculeAvatarFallbackName = ({
  name: nameProp,
  size,
  className: classNameProp,
  ...others
}) => {
  const className = cx(
    BASE_CLASS_NAME,
    classNameProp,
    `${BASE_CLASS_NAME}--${size}`
  )
  const [firstName, lastName] = nameProp.split(' ')
  const name =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : firstName.charAt(0)

  return (
    <div className={className} aria-label={nameProp} {...others}>
      {name.toUpperCase()}
    </div>
  )
}

MoleculeAvatarFallbackName.displayName = 'MoleculeAvatarFallbackName'
MoleculeAvatarFallbackName.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string
}

export default MoleculeAvatarFallbackName
