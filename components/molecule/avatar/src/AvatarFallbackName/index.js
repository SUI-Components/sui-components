import cx from 'classnames'
import PropTypes from 'prop-types'

import useConvertStringToHex from '../useConvertStringToHex.js'
import {BASE_CLASS_NAME} from './settings.js'

const MoleculeAvatarFallbackName = ({
  name: nameProp,
  size,
  className: classNameProp,
  isHexBackground = true,
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

  const backgroundColor = useConvertStringToHex(nameProp)

  return (
    <div
      className={className}
      aria-label={nameProp}
      {...(isHexBackground && {style: {backgroundColor}})}
      {...others}
    >
      {name}
    </div>
  )
}

MoleculeAvatarFallbackName.displayName = 'MoleculeAvatarFallbackName'
MoleculeAvatarFallbackName.propTypes = {
  className: PropTypes.string,
  isHexBackground: PropTypes.bool,
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string
}

export default MoleculeAvatarFallbackName
